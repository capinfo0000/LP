import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AlertTriangle, TrendingDown, Shield } from 'lucide-react';

export const Philosophy = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={elementRef} className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-orange-900/20 animate-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            あなたに、伝えたいことがある。
          </h2>
          <p className="text-xl text-blue-200">
            少し、耳が痛い話かもしれない。<br />
            でも、知っておいてほしい。
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className={`bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 rounded-3xl border border-orange-500/30 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-orange-500/20 rounded-full flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 relative inline-block">
                  「円しか持っていない」のは、<br />
                  <span className="text-orange-400 relative">
                    円に全額投資している
                    <span className={`absolute bottom-0 left-0 h-1 bg-orange-400 transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '800ms' }}></span>
                  </span>
                  のと同じだ。
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  円だけを貯金しているということは、<br />
                  日本という一つの国の通貨に、資産の100%を賭けているということ。<br />
                  これは、分散していない「超ハイリスク」な状態だと気づいているだろうか。
                </p>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 rounded-3xl border border-red-500/30 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-red-500/20 rounded-full flex-shrink-0">
                <TrendingDown className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  インフレ年率2%で、<br />
                  <span className="text-red-400 relative">
                    20年後には購買力が約3割減る
                    <span className={`absolute bottom-0 left-0 h-1 bg-red-400 transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '1200ms' }}></span>
                  </span>
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed mb-4">
                  通帳の数字は100万円のまま。<br />
                  でも、その100万円で買えるものは、20年前の70万円分しかない。
                </p>
                <div className="bg-red-900/30 p-4 rounded-xl border border-red-500/30">
                  <p className="text-white font-bold">
                    預金は「減らない」が、価値は「確実に減っている」
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm p-8 rounded-3xl border-2 border-blue-400/50 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/30 rounded-full flex-shrink-0">
                <Shield className="w-8 h-8 text-blue-300" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  分散投資は「攻め」じゃない。<br />
                  <span className="text-blue-300">これは「守り」だ。</span>
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  資産を守るために、複数の通貨や資産に分けておく。<br />
                  決してギャンブルではなく、リスクを分散させる防御策。<br />
                  <span className="text-white font-bold">少額でもいい。若いうちから始めることが、何よりも大切なんだ。</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-2xl md:text-3xl text-white font-bold mb-4">
            知っているか、知らないか。
          </p>
          <p className="text-xl text-blue-200">
            それだけで、10年後の未来が変わる。
          </p>
        </div>
      </div>
    </section>
  );
};
