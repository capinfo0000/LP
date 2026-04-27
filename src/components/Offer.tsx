import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Check, Clock, Users, ShieldCheck, Video, Headphones, MessageCircle } from 'lucide-react';

export const Offer = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const includes = [
    { icon: Video, text: '3ヶ月間の動画講座（見放題）' },
    { icon: MessageCircle, text: '個別Zoomヒアリング＆固定費削減提案' },
    { icon: Headphones, text: 'オンライン授業（月2回）' },
    { icon: Users, text: '専用コミュニティ参加権' },
    { icon: ShieldCheck, text: '30日間返金保証' },
  ];

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          今すぐ、一歩を踏み出す
        </h2>
        <p className={`text-xl text-blue-200 text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          人生を変える3ヶ月間の投資
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">プログラムに含まれるもの</h3>
              <div className="space-y-4">
                {includes.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-start gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="p-2 bg-blue-500/20 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <p className="text-lg text-blue-100 pt-1">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-blue-500/20">
                <div className="flex items-start gap-3 mb-4">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-green-200">受講生同士の交流で、モチベーション維持</p>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-green-200">質問し放題（コミュニティ内）</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-green-200">卒業後も見返せる動画講座</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-gradient-to-br from-orange-900/40 to-red-900/40 backdrop-blur-sm p-8 rounded-3xl border-2 border-orange-500/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 px-6 py-2 bg-red-500 text-white font-bold text-sm rounded-bl-2xl animate-pulse-slow">
                期間限定
              </div>

              <div className="mt-8">
                <p className="text-blue-200 text-lg mb-2">通常価格</p>
                <p className="text-3xl text-blue-300 line-through mb-4">150,000円</p>
                <p className="text-blue-200 text-xl mb-2">今回限りの特別価格</p>
                <div className={`transition-all duration-1000 ${isVisible ? 'scale-100' : 'scale-75'}`} style={{ transitionDelay: '800ms' }}>
                  <p className="text-6xl md:text-7xl font-bold text-white mb-2">
                    ¥100,000
                  </p>
                  <p className="text-xl text-orange-200">（税込・買い切り）</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-slate-900/50 rounded-2xl border border-orange-500/30">
                <p className="text-white text-lg font-bold mb-3">1日あたり、たった約1,100円</p>
                <p className="text-orange-100 leading-relaxed">
                  コーヒー1杯分の投資で、一生使える知識と、将来への安心が手に入ります。
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 p-4 bg-green-900/30 rounded-xl border border-green-500/30">
                <ShieldCheck className="w-8 h-8 text-green-400 flex-shrink-0 animate-pulse-slow" />
                <div>
                  <p className="text-white font-bold text-lg">30日間返金保証</p>
                  <p className="text-green-200 text-sm">満足できなければ全額返金いたします</p>
                </div>
              </div>
            </div>

            <div className={`mt-6 grid grid-cols-2 gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="bg-gradient-to-br from-red-900/40 to-red-800/40 backdrop-blur-sm p-4 rounded-2xl border border-red-500/30 text-center animate-pulse-slow">
                <Clock className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-white font-bold text-lg">期間限定</p>
                <p className="text-red-200 text-sm">募集は今回のみ</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 backdrop-blur-sm p-4 rounded-2xl border border-purple-500/30 text-center animate-pulse-slow" style={{ animationDelay: '500ms' }}>
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-bold text-lg">30名限定</p>
                <p className="text-purple-200 text-sm">少人数制で丁寧に</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
