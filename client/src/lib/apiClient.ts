export class ApiClient {
  private baseURL: string;

  constructor(baseURL: string = '') {
    this.baseURL = baseURL;
  }

  /**
   * Perform a GET request
   * @param url - The endpoint URL (relative to baseURL)
   * @returns Promise resolving to { success, data, error }
   */
  async get(url: string): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      // Handle non-2xx responses
      if (!response.ok) {
        // Special handling for 500 errors
        if (response.status === 500) {
          return {
            success: false,
            error: 'Internal server error. Please try again later.',
          };
        }

        // Try to parse error response
        let errorMessage = `Request failed with status ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          // If we can't parse JSON, use the status text
          errorMessage = response.statusText || errorMessage;
        }

        return {
          success: false,
          error: errorMessage,
        };
      }

      // Handle empty responses (204 No Content)
      if (response.status === 204) {
        return {
          success: true,
          data: null,
        };
      }

      // Parse JSON response
      try {
        const data = await response.json();
        return {
          success: true,
          data,
        };
      } catch (parseError) {
        // If response is not JSON, return empty data
        return {
          success: true,
          data: null,
        };
      }
    } catch (networkError) {
      // Handle network errors
      console.error('Network error:', networkError);
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  /**
   * Perform a POST request
   * @param url - The endpoint URL (relative to baseURL)
   * @param body - The request body (will be JSON stringified)
   * @returns Promise resolving to { success, data, error }
   */
  async post(url: string, body: any): Promise<{ success: boolean; data?: any; error?: string }> {
    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        credentials: 'include',
      });

      // Handle non-2xx responses
      if (!response.ok) {
        // Special handling for 500 errors
        if (response.status === 500) {
          return {
            success: false,
            error: 'Internal server error. Please try again later.',
          };
        }

        // Try to parse error response
        let errorMessage = `Request failed with status ${response.status}`;
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (e) {
          // If we can't parse JSON, use the status text
          errorMessage = response.statusText || errorMessage;
        }

        return {
          success: false,
          error: errorMessage,
        };
      }

      // Handle empty responses (204 No Content)
      if (response.status === 204) {
        return {
          success: true,
          data: null,
        };
      }

      // Parse JSON response
      try {
        const data = await response.json();
        return {
          success: true,
          data,
        };
      } catch (parseError) {
        // If response is not JSON, return empty data
        return {
          success: true,
          data: null,
        };
      }
    } catch (networkError) {
      // Handle network errors
      console.error('Network error:', networkError);
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }
}
