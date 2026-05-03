import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CloudRain, Sun } from 'lucide-react';

export const RiskSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section ref={elementRef} className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          何もしなければ、どうなるのか？
        </h2>
        <p className={`text-xl text-blue-200 text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          10年後の、あなたの姿
        </p>

        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${!showAfter ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              何もしない場合
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${showAfter ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              行動した場合
            </button>
          </div>

          <div className="relative min-h-[720px] sm:min-h-[600px] md:min-h-[500px] perspective-1000">
            <div className={`absolute inset-0 transition-all duration-700 ${!showAfter ? 'opacity-100 rotate-y-0' : 'opacity-0 rotate-y-90 pointer-events-none'}`}>
              <div className="bg-gradient-to-br from-slate-800/90 to-red-900/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-red-500/30 h-auto animate-shake">
                <div className="flex items-center gap-3 md:gap-4 mb-6">
                  <div className="p-3 md:p-4 bg-red-500/20 rounded-full shrink-0">
                    <CloudRain className="w-9 h-9 md:w-12 md:h-12 text-red-400" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-white">10年後のあなた（何もしなかった場合）</h3>
                </div>

                <div className="space-y-4">
                  <div className="bg-red-900/30 p-4 rounded-xl border-l-4 border-red-500">
                    <p className="text-lg text-white font-bold mb-2">💰 資産は増えていない</p>
                    <p className="text-red-100">むしろ、インフレで実質的には目減りしている</p>
                  </div>
                  <div className="bg-red-900/30 p-4 rounded-xl border-l-4 border-red-500">
                    <p className="text-lg text-white font-bold mb-2">😰 不安は10年前と変わらない</p>
                    <p className="text-red-100">いや、年齢を重ねた分、もっと焦っているかもしれない</p>
                  </div>
                  <div className="bg-red-900/30 p-4 rounded-xl border-l-4 border-red-500">
                    <p className="text-lg text-white font-bold mb-2">🌙 夜、ふと考える</p>
                    <p className="text-red-100">「あの時、始めていれば…」という後悔</p>
                  </div>
                  <div className="bg-red-900/30 p-4 rounded-xl border-l-4 border-red-500">
                    <p className="text-lg text-white font-bold mb-2">⏰ でも、もう遅い？</p>
                    <p className="text-red-100">時間は巻き戻せない。複利の力を活かせる期間も短くなっている</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`absolute inset-0 transition-all duration-700 ${showAfter ? 'opacity-100 rotate-y-0' : 'opacity-0 -rotate-y-90 pointer-events-none'}`}>
              <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/40 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-blue-500/30 h-auto">
                <div className="flex items-center gap-3 md:gap-4 mb-6">
                  <div className="p-3 md:p-4 bg-blue-500/20 rounded-full shrink-0">
                    <Sun className="w-9 h-9 md:w-12 md:h-12 text-blue-400" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-white">10年後のあなた（行動した場合）</h3>
                </div>

                <div className="space-y-5">
                  <div className="bg-blue-900/30 p-4 rounded-xl border-l-4 border-blue-500">
                    <p className="text-lg text-white font-bold mb-2">💎 資産が着実に増えている</p>
                    <p className="text-blue-100">月3万円の積立でも、10年で400万円以上（年利5%想定）</p>
                  </div>
                  <div className="bg-blue-900/30 p-4 rounded-xl border-l-4 border-blue-500">
                    <p className="text-lg text-white font-bold mb-2">😌 精神的な余裕がある</p>
                    <p className="text-blue-100">将来への不安が減り、今を楽しめている</p>
                  </div>
                  <div className="bg-blue-900/30 p-4 rounded-xl border-l-4 border-blue-500">
                    <p className="text-lg text-white font-bold mb-2">🎯 選択肢が増えた</p>
                    <p className="text-blue-100">転職、独立、留学…やりたいことに挑戦できる自由</p>
                  </div>
                  <div className="bg-blue-900/30 p-4 rounded-xl border-l-4 border-blue-500">
                    <p className="text-lg text-white font-bold mb-2">🌟 周りから頼られる存在に</p>
                    <p className="text-blue-100">お金の知識を持つことで、友人や家族にもアドバイスできる</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center max-w-3xl mx-auto pt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500 p-8 rounded-2xl ">
            <p className="text-2xl md:text-3xl text-white font-bold mb-4 ">
              変わるのは、今しかない。
            </p>
            <p className="text-xl text-orange-100">
              10年後に後悔しないために、<br />
              今日から、一歩を踏み出そう。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
