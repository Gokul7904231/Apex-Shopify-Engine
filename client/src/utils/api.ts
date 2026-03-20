/**
 * API utility functions with error handling
 */

interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

/**
 * Wrapper around fetch with automatic error handling
 * @param url - The endpoint to call
 * @param options - Fetch options
 * @returns Promise with standardized response format
 */
export const apiFetch = async <T>(
  url: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    });

    // Handle non-2xx responses
    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch (e) {
        // If we can't parse JSON, use text
        try {
          const errorText = await response.text();
          errorMessage = errorText || errorMessage;
        } catch (textError) {
          // If we can't get text either, stick with status
        }
      }

      return {
        success: false,
        error: errorMessage,
      };
    }

    // Handle successful responses
    if (response.status === 204) {
      return { success: true };
    }

    try {
      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (parseError) {
      return {
        success: true,
        // If no JSON body, return empty object as data
        data: {} as T,
      };
    }
  } catch (error) {
    // Network errors or other fetch issues
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Network error',
    };
  }
};

/**
 * GET request helper
 */
export const apiGet = async <T>(url: string): Promise<ApiResponse<T>> => {
  return apiFetch<T>(url, { method: 'GET' });
};

/**
 * POST request helper
 */
export const apiPost = async <T>(url: string, data: any): Promise<ApiResponse<T>> => {
  return apiFetch<T>(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * PUT request helper
 */
export const apiPut = async <T>(url: string, data: any): Promise<ApiResponse<T>> => {
  return apiFetch<T>(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

/**
 * DELETE request helper
 */
export const apiDelete = async <T>(url: string): Promise<ApiResponse<T>> => {
  return apiFetch<T>(url, { method: 'DELETE' });
};

export default {
  apiFetch,
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
};
