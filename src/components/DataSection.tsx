import { useIntersectionObserver, useCountUp } from '../hooks/useIntersectionObserver';
import { BarChart3, PieChart, TrendingUp } from 'lucide-react';

export const DataSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const count1 = useCountUp(36, 2000, isVisible);
  const count2 = useCountUp(184, 2000, isVisible);

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          データが語る、厳しい現実
        </h2>
        <p className={`text-xl text-blue-200 text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          感覚ではなく、事実として知っておいてほしい
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className={`bg-gradient-to-br from-red-900/40 to-red-800/40 backdrop-blur-sm p-6 rounded-2xl border border-red-500/30 transition-all duration-1000 delay-300 hover:scale-105 hover:rotate-y-5 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-red-500/20 rounded-full">
                <PieChart className="w-10 h-10 text-red-400" />
              </div>
            </div>
            <p className="text-5xl font-bold text-white text-center mb-2">
              {count1}%
            </p>
            <p className="text-lg text-red-200 text-center font-medium mb-3">
              20代の貯蓄ゼロ世帯割合
            </p>
            <p className="text-sm text-red-100/80 text-center">
              出典：金融広報中央委員会「家計の金融行動に関する世論調査」2024年
            </p>
          </div>

          <div className={`bg-gradient-to-br from-orange-900/40 to-orange-800/40 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/30 transition-all duration-1000 delay-500 hover:scale-105 hover:rotate-y-5 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-orange-500/20 rounded-full">
                <BarChart3 className="w-10 h-10 text-orange-400" />
              </div>
            </div>
            <p className="text-5xl font-bold text-white text-center mb-2">
              {count2}万円
            </p>
            <p className="text-lg text-orange-200 text-center font-medium mb-3">
              20代単身世帯の平均貯蓄額
            </p>
            <p className="text-sm text-orange-100/80 text-center">
              出典：総務省「家計調査報告」2024年
            </p>
          </div>

          <div className={`bg-gradient-to-br from-blue-900/40 to-cyan-800/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 transition-all duration-1000 delay-700 hover:scale-105 hover:rotate-y-5 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-blue-500/20 rounded-full">
                <TrendingUp className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <p className="text-5xl font-bold text-white text-center mb-2">
              2%
            </p>
            <p className="text-lg text-blue-200 text-center font-medium mb-3">
              日銀の目標インフレ率
            </p>
            <p className="text-sm text-blue-100/80 text-center">
              出典：日本銀行「物価安定の目標」
            </p>
          </div>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              インフレ2%が続くと、どうなるのか？
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-blue-200">現在</span>
                  <span className="text-2xl font-bold text-white">100万円</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-blue-200">10年後</span>
                  <span className="text-2xl font-bold text-orange-400">約82万円分</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <span className="text-blue-200">20年後</span>
                  <span className="text-2xl font-bold text-red-400">約67万円分</span>
                </div>
              </div>

              <div className="relative">
                <div className={`h-full flex flex-col justify-center transition-all duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="bg-green-500/20 rounded-lg mb-2 relative overflow-hidden" style={{ height: '33.33%' }}>
                    <div className={`absolute inset-0 bg-green-500/40 transition-all duration-2000 ${isVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '1000ms' }}></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <span className="text-white font-bold">現在</span>
                    </div>
                  </div>
                  <div className="bg-orange-500/20 rounded-lg mb-2 relative overflow-hidden" style={{ height: '33.33%' }}>
                    <div className={`absolute inset-0 bg-orange-500/40 transition-all duration-2000 ${isVisible ? 'w-[82%]' : 'w-0'}`} style={{ transitionDelay: '1500ms' }}></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <span className="text-white font-bold">10年後</span>
                    </div>
                  </div>
                  <div className="bg-red-500/20 rounded-lg relative overflow-hidden" style={{ height: '33.33%' }}>
                    <div className={`absolute inset-0 bg-red-500/40 transition-all duration-2000 ${isVisible ? 'w-[67%]' : 'w-0'}`} style={{ transitionDelay: '2000ms' }}></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <span className="text-white font-bold">20年後</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-900/30 p-6 rounded-xl border border-red-500/30">
              <p className="text-xl text-white font-bold text-center">
                預金通帳の数字は100万円のまま。<br />
                でも、<span className="text-red-400">買えるものは3割減っている。</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
