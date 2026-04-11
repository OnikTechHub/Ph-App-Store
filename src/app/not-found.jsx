import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <div className="text-center">
        {/* Large 404 text */}
        <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
        
        {/* Message */}
        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
        <p className="text-gray-500 mt-2 mb-8 px-4">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        {/* Back to Home Button */}
        <Link 
          href={"/"} 
          className="px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-all shadow-lg"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}