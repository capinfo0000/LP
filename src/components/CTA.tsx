import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowRight } from 'lucide-react';

export const CTA = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples([...ripples, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 1000);
  };

  return (
    <section ref={elementRef} className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800"></div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-shimmer" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            10年後の自分に、<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              感謝されるために
            </span>
          </h2>

          <p className={`text-xl md:text-2xl text-blue-100 mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            変わるのは、今しかない。
          </p>

          <p className={`text-lg text-blue-200 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            1年後、3年後、10年後のあなたが、<br />
            「あの時、始めておいてよかった」と思える日が来る。
          </p>

          <div className={`mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <button
              onClick={handleClick}
              className="group relative px-12 py-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-xl md:text-2xl font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-2 hover:scale-105 animate-breathing"
            >
              <span className="relative z-10 flex items-center gap-3 justify-center">
                今すぐ参加する
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute w-4 h-4 bg-white rounded-full animate-ripple"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                  }}
                />
              ))}
            </button>
          </div>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-red-300 font-bold">期間限定募集</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '500ms' }}></div>
              <p className="text-orange-300 font-bold">30名様限定</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1000ms' }}></div>
              <p className="text-green-300 font-bold">30日間返金保証</p>
            </div>
          </div>

          <div className={`bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
              最後に、あなたに伝えたい。
            </p>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              完璧じゃなくていい。まず、始めること。<br />
              1年後、「あの時やっておけば…」と後悔しないために。<br />
              推しも、趣味も、未来も。全部、叶えよう。<br />
              <span className="text-blue-300 font-bold text-xl">今日が、あなたの人生が変わる日。</span>
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-500 text-sm">
            ※本講座はポートフォリオ用の架空商品です。実在の商品・サービスとは一切関係ありません。
          </p>
          <p className="text-center text-slate-600 text-xs mt-4">
            © 2024 節約資産形成オンライン講座. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};
