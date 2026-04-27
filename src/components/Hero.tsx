import { useTypingEffect } from '../hooks/useTypingEffect';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const { displayedText, isComplete } = useTypingEffect(
    '「趣味は全力で楽しみ、未来に希望を！。」',
    50
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 hero-bg animate-kenburns opacity-20"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {displayedText}
            <span className={`inline-block w-1 h-12 md:h-16 bg-blue-400 ml-2 ${isComplete ? 'animate-blink' : ''}`}></span>
          </h1>
        </div>

        <div className={`transition-all duration-1000 ${isComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
            我慢しない節約で、好きなことを楽しみながら
          </p>
          <p className="text-2xl md:text-3xl text-white font-bold mb-12">
            確実に資産を築く3ヶ月プログラム
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 animate-float-mobile md:animate-none">
              <span className="relative z-10">今すぐ詳細を見る</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <p className="text-sm text-blue-200">
              ※期間限定募集・30名様限定
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-blue-400" />
        </div>
      </div>
    </section>
  );
};
