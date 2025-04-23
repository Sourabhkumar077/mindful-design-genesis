
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-lavender mb-4">404</h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-4">Page not found</p>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you're looking for ({location.pathname}) doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
        <Link to="/dashboard" className="btn-outline">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
