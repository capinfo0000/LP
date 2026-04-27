import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Sparkles, Calculator, Users, Video, MessageCircle, ShieldCheck } from 'lucide-react';

export const Benefits = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const benefits = [
    {
      icon: Calculator,
      title: '年間10〜30万円の固定費削減',
      description: '通信費、保険、サブスクの見直しで実現。推しへの投資は減らさずに。',
      direction: 'left',
      delay: '200ms',
    },
    {
      icon: TrendingUp,
      title: '月3万円の積立で10年後に400万円以上',
      description: '年利5%想定。少額でも時間を味方につければ、大きく育つ。',
      direction: 'right',
      delay: '400ms',
    },
    {
      icon: Sparkles,
      title: '推しも旅行も諦めない、罪悪感ゼロの生活',
      description: '設計型節約で、使っていい場所と削る場所が明確になる。',
      direction: 'left',
      delay: '600ms',
    },
    {
      icon: ShieldCheck,
      title: 'インフレに負けない資産防衛力',
      description: '円だけに依存しない、分散投資の基礎が身につく。',
      direction: 'right',
      delay: '800ms',
    },
  ];

  return (
    <section ref={elementRef} className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          この講座で、あなたが得られるもの
        </h2>
        <p className={`text-xl text-blue-200 text-center mb-16 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          具体的な成果と、一生使える知識
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLeft = benefit.direction === 'left';
            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isLeft ? '-translate-x-20' : 'translate-x-20'}`}`}
                style={{ transitionDelay: isVisible ? benefit.delay : '0ms' }}
              >
                <div className="group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="relative p-4 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-blue-300" />
                      </div>
                      <div className={`absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full ${isVisible ? 'animate-ping-slow' : ''}`} style={{ animationDelay: benefit.delay }}></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-lg text-blue-100 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 text-center hover:scale-105 transition-transform duration-300">
            <Video className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">動画講座見放題</h4>
            <p className="text-purple-200">いつでも復習可能</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 text-center hover:scale-105 transition-transform duration-300">
            <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">個別Zoom相談</h4>
            <p className="text-blue-200">あなた専用の提案</p>
          </div>
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 text-center hover:scale-105 transition-transform duration-300">
            <Users className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">専用コミュニティ</h4>
            <p className="text-green-200">仲間と一緒に成長</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrendingUp = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);
