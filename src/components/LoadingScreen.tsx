import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-white z-50">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-4">
          <Loader2 className="w-full h-full animate-spin text-blue-600" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm font-medium text-blue-600">{progress}%</span>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Zenora</h2>
        <p className="text-gray-600">Your journey to wellness begins here</p>
      </div>
    </div>
  );
};

export default LoadingScreen; 