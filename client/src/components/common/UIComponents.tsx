// Reusable UI components for the application

export const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
  </div>
);

export const ErrorDisplay = ({ message }: { message: string }) => (
  <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <span role="img" aria-label="error">❌</span>
      </div>
      <div className="ml-3">
        <p className="text-sm text-red-700">
          {message || 'Something went wrong. Please try again later.'}
        </p>
      </div>
    </div>
  </div>
);

export const EmptyState = ({ message }: { message?: string }) => (
  <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
    <span className="text-4xl mb-4 block" role="img" aria-label="empty">🔎</span>
    <p className="text-gray-500">{message || 'No products found. Try a different search term.'}</p>
  </div>
);
