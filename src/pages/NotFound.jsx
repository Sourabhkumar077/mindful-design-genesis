
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl md:text-6xl font-bold text-lavender mb-4">404</h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-8">Page not found</p>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
