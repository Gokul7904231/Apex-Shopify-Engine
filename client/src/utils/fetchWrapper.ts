/**
 * Fetch wrapper with error handling for API calls
 * This provides a consistent way to make API requests with proper error handling
 */

/**
 * Generic fetch function with error handling
 * @param endpoint - API endpoint (will be proxied to backend)
 * @param options - Fetch options (method, headers, body, etc.)
 * @returns Promise with data or error information
 */
export const fetchApi = async <T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<{ data?: T; error?: string; success: boolean }> => {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
      ...options,
    });

    // Handle HTTP error responses
    if (!response.ok) {
      let errorMessage = `HTTP ${response.status}`;

      // Try to get error message from response body
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch (e) {
        // If JSON parsing fails, try to get text
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
      return { success: true }; // No content
    }

    try {
      const data = await response.json();
      return {
        success: true,
        data,
      };
    } catch (parseError) {
      // If we can't parse JSON but request succeeded
      return {
        success: true,
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
export const getApi = async <T>(
  endpoint: string,
): Promise<{ data?: T; error?: string; success: boolean }> => {
  return fetchApi<T>(endpoint, { method: 'GET' });
};

/**
 * POST request helper
 */
export const postApi = async <T>(
  endpoint: string,
  data: any,
): Promise<{ data?: T; error?: string; success: boolean }> => {
  return fetchApi<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

/**
 * PUT request helper
 */
export const putApi = async <T>(
  endpoint: string,
  data: any,
): Promise<{ data?: T; error?: string; success: boolean }> => {
  return fetchApi<T>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
};

/**
 * DELETE request helper
 */
export const deleteApi = async <T>(
  endpoint: string,
): Promise<{ data?: T; error?: string; success: boolean }> => {
  return fetchApi<T>(endpoint, { method: 'DELETE' });
};

export default {
  fetchApi,
  getApi,
  postApi,
  putApi,
  deleteApi,
};
