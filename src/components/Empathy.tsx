import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Heart, Coffee, Plane, Music } from 'lucide-react';

export const Empathy = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const concerns = [
    { icon: Heart, text: '推しのグッズ、ライブ…諦めたくない', delay: '0ms' },
    { icon: Coffee, text: '友達との時間も大切にしたい', delay: '200ms' },
    { icon: Plane, text: '年に数回の旅行は外せない', delay: '400ms' },
    { icon: Music, text: '趣味は人生の彩りだから', delay: '600ms' },
  ];

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          あなたは、こう思っていませんか？
        </h2>

        <p className={`text-xl text-blue-200 text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          好きなことを楽しみながら、将来も安心したい。<br />
          でも、どうすればいいのか分からない...
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          {concerns.map((concern, index) => {
            const Icon = concern.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: isVisible ? concern.delay : '0ms' }}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-blue-500/20 rounded-full ${isVisible ? 'animate-bounce-slow' : ''}`} style={{ animationDelay: concern.delay }}>
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <p className="text-lg text-white font-medium">{concern.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`bg-gradient-to-r from-orange-500/10 to-red-500/10 border-l-4 border-orange-500 p-6 rounded-r-2xl max-w-3xl mx-auto transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <p className="text-xl md:text-2xl text-white font-bold mb-4">
            でも同時に、不安もある。
          </p>
          <p className="text-lg text-blue-100 leading-relaxed">
            このままで本当に大丈夫なのか。<br />
            老後2000万円問題も気になる。<br />
            何かしなきゃいけない気がするけど、<br />
            <span className="text-orange-400 font-bold">何から始めればいいのか、わからない。</span>
          </p>
        </div>
      </div>
    </section>
  );
};
