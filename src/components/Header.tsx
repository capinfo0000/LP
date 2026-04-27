import { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-slate-900/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">節約資産形成</h1>
              <p className="text-xs text-blue-300">3ヶ月プログラム</p>
            </div>
          </div>

          <button className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-0.5">
            今すぐ申し込む
          </button>
        </div>
      </div>
    </header>
  );
};
