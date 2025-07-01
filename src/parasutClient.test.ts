import axios from 'axios';
import { ParasutClient } from './parasutClient';

// src/parasutClient.test.ts

// Mock modules
jest.mock('./modules/sales-offer', () => ({
  SalesOfferModule: jest.fn().mockImplementation(() => ({})),
}));
jest.mock('./modules/sales-invoice', () => ({
  SalesInvoiceModule: jest.fn().mockImplementation(() => ({})),
}));

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ParasutClient', () => {
  const options = {
    clientId: 'cid',
    clientSecret: 'secret',
    username: 'user',
    password: 'pass',
    baseUrl: 'https://api.parasut.com/v4',
  };

  let client: ParasutClient;
  let axiosInstance: any;

  beforeEach(() => {
    axiosInstance = {
      post: jest.fn(),
      get: jest.fn(),
      request: jest.fn(),
    };
    mockedAxios.create.mockReturnValue(axiosInstance);
    client = new ParasutClient(options);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize modules and axios', () => {
    expect(client['axios']).toBe(axiosInstance);
    expect(client.salesOffer).toBeDefined();
    expect(client.salesInvoice).toBeDefined();
  });

  describe('getAccessToken', () => {
    it('returns cached token if not expired', async () => {
      client['accessToken'] = 'token';
      client['tokenExpiresAt'] = Date.now() + 100000;
      const token = await client['getAccessToken']();
      expect(token).toBe('token');
    });

    it('calls authenticate if token missing or expired', async () => {
      client['accessToken'] = null;
      client['authenticate'] = jest.fn().mockResolvedValue(undefined);
      client['accessToken'] = 'newtoken';
      const token = await client['getAccessToken']();
      expect(client['authenticate']).toHaveBeenCalled();
      expect(token).toBe('newtoken');
    });

    it('throws if authenticate fails to set token', async () => {
      client['accessToken'] = null;
      client['authenticate'] = jest.fn().mockResolvedValue(undefined);
      client['accessToken'] = null;
      await expect(client['getAccessToken']()).rejects.toThrow('Failed to obtain access token');
    });
  });

  describe('authenticate', () => {
    it('posts to /oauth/token and stores token', async () => {
      const now = Date.now();
      jest.spyOn(Date, 'now').mockReturnValue(now);
      axiosInstance.post.mockResolvedValue({
        data: { access_token: 'tok', expires_in: 3600 },
      });
      await client['authenticate']();
      expect(axiosInstance.post).toHaveBeenCalledWith(
        '/oauth/token',
        expect.objectContaining({
          grant_type: 'password',
          client_id: options.clientId,
          client_secret: options.clientSecret,
          username: options.username,
          password: options.password,
        }),
        expect.any(Object)
      );
      expect(client['accessToken']).toBe('tok');
      expect(client['tokenExpiresAt']).toBe(now + 3600 * 1000 - 60000);
    });

    it('throws if credentials missing', async () => {
      client = new ParasutClient({ ...options, clientId: '' });
      await expect(client['authenticate']()).rejects.toThrow('Missing required authentication credentials');
    });

    it('throws if response missing token', async () => {
      axiosInstance.post.mockResolvedValue({ data: {} });
      await expect(client['authenticate']()).rejects.toThrow('Invalid authentication response');
    });

    it('throws on axios error with response', async () => {
      axiosInstance.post.mockRejectedValue({
        response: { status: 401, statusText: 'Unauthorized' },
      });
      await expect(client['authenticate']()).rejects.toThrow('Authentication failed: 401 Unauthorized');
    });

    it('throws on axios error without response', async () => {
      axiosInstance.post.mockRejectedValue(new Error('Network error'));
      await expect(client['authenticate']()).rejects.toThrow('Authentication error: Network error');
    });
  });

  describe('getApiHome', () => {
    it('calls getAccessToken and returns data', async () => {
      client['getAccessToken'] = jest.fn().mockResolvedValue('tok');
      axiosInstance.get.mockResolvedValue({ data: { hello: 'world' } });
      const data = await client.getApiHome();
      expect(client['getAccessToken']).toHaveBeenCalled();
      expect(axiosInstance.get).toHaveBeenCalledWith('/me', {
        headers: { Authorization: 'Bearer tok' },
      });
      expect(data).toEqual({ hello: 'world' });
    });

    it('throws on error with response', async () => {
      client['getAccessToken'] = jest.fn().mockResolvedValue('tok');
      axiosInstance.get.mockRejectedValue({
        response: { status: 403, statusText: 'Forbidden' },
      });
      await expect(client.getApiHome()).rejects.toThrow('API HOME request failed: 403 Forbidden');
    });

    it('throws on error without response', async () => {
      client['getAccessToken'] = jest.fn().mockResolvedValue('tok');
      axiosInstance.get.mockRejectedValue(new Error('Timeout'));
      await expect(client.getApiHome()).rejects.toThrow('API HOME request error: Timeout');
    });
  });

  describe('requestOrchestrator', () => {
    it('calls getAccessToken and makes request', async () => {
      client['getAccessToken'] = jest.fn().mockResolvedValue('tok');
      axiosInstance.request.mockResolvedValue({ data: { foo: 'bar' } });
      const config: {
        method: "post"| "get"|"put"|"delete";
        url: string;
        headers?: Record<string, string>;
        data?: any;
        params?: Record<string, any>;
        responseType?: string;
      } = { method: "get", url: '/test', headers: { 'X-Test': '1' } };
      const data = await client['requestOrchestrator'](config);
      expect(client['getAccessToken']).toHaveBeenCalled();
      expect(axiosInstance.request).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'get',
          url: '/test',
          headers: expect.objectContaining({
            Authorization: 'Bearer tok',
            'X-Test': '1',
          }),
        })
      );
      expect(data).toEqual({ foo: 'bar' });
    });

    it('throws on error with response', async () => {
      client['getAccessToken'] = jest.fn().mockResolvedValue('tok');
      axiosInstance.request.mockRejectedValue({
        response: { status: 500, statusText: 'Server Error' },
      });
      await expect(
        client['requestOrchestrator']({ method: 'get', url: '/fail' })
      ).rejects.toThrow('Request failed: 500 Server Error');
    });

    it('throws on error without response', async () => {
      client['getAccessToken'] = jest.fn().mockResolvedValue('tok');
      axiosInstance.request.mockRejectedValue(new Error('Oops'));
      await expect(
        client['requestOrchestrator']({ method: 'get', url: '/fail' })
      ).rejects.toThrow('Request error: Oops');
    });
  });
});