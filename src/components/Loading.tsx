import { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';

interface LoadingProps {
  onComplete: () => void;
}

export const Loading = ({ onComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8 inline-block relative">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full">
            <TrendingUp className="w-16 h-16 text-white animate-bounce" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">
          節約資産形成
        </h2>
        <p className="text-blue-300 mb-8">未来を変える準備をしています...</p>

        <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-slate-500 text-sm mt-4">{progress}%</p>
      </div>
    </div>
  );
};
