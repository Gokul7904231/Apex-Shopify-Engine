import { auth } from './firebase';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  meta?: any;
  error?: string;
}

/**
 * Hardened API Client.
 * Handles Firebase Auth tokens, JSON parsing, and HTML detection.
 */
async function request<T = any>(
  endpoint: string,
  options: RequestInit & { token?: string } = {}
): Promise<ApiResponse<T>> {
  try {
    // Ensure relative paths aren't double-slashed
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
    const url = endpoint.startsWith('http') ? endpoint : `${API_BASE}${cleanEndpoint}`;

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'X-Test-Mode': localStorage.getItem('testMode') === 'true' ? 'true' : 'false',
      ...((options.headers as Record<string, string>) || {}),
    };

    let finalToken = options.token;

    if (!finalToken) {
      const currentUser = auth.currentUser;
      if (currentUser) {
        try {
          finalToken = await currentUser.getIdToken();
        } catch (err) {
          console.warn('⚠️ Token retrieval failed:', err);
        }
      }
    }

    if (finalToken) {
      headers['Authorization'] = `Bearer ${finalToken}`;
    }

    const { token: _, ...fetchOptions } = options;

    const response = await fetch(url, {
      ...fetchOptions,
      headers,
    });

    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('text/html')) {
      return {
        success: false,
        data: null as T,
        error: `Unexpected HTML response. The API might be down or misconfigured.`,
      };
    }

    let result;
    try {
      result = await response.json();
    } catch (parseErr) {
      return {
        success: false,
        data: null as T,
        error: 'Backend returned an unparseable response. Expected JSON.',
      };
    }

    if (!response.ok || result.success === false) {
      return {
        success: false,
        data: null as T,
        meta: result.meta,
        error: result.error || response.statusText || 'Operation failed',
      };
    }

    return {
      success: true,
      data: result.data ?? result,
      meta: result.meta,
    };
  } catch (err: any) {
    return {
      success: false,
      data: null as T,
      error: 'Cannot reach the server - Please check your internet connection.',
    };
  }
}

export const api = {
  get: <T = any>(endpoint: string, options: RequestInit & { token?: string } = {}) => 
    request<T>(endpoint, { method: 'GET', ...options }),
  post: <T = any>(endpoint: string, body: any, options: RequestInit & { token?: string } = {}) =>
    request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      ...options,
    }),
};
