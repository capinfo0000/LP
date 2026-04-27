import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Target, Scissors, TrendingUp, Shield } from 'lucide-react';

export const Solution = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const solutions = [
    {
      icon: Target,
      title: '設計型節約',
      description: '闇雲に切り詰めるのではなく、あなたの価値観に基づいて「削るもの」と「残すもの」を明確に設計',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-500/20',
    },
    {
      icon: Scissors,
      title: '固定費の最適化',
      description: '通信費・保険・サブスクなど、見直すだけで年間10万円以上削減できるポイントを具体的に提案',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-500/20',
    },
    {
      icon: TrendingUp,
      title: '少額インデックス投資',
      description: '月1万円から始められる、再現性の高い長期投資戦略。特別なスキルは不要',
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-500/20',
    },
    {
      icon: Shield,
      title: '通貨リスク分散',
      description: '円だけでなく、ドルなど複数の通貨・資産に分散することで、インフレリスクから資産を守る',
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-500/20',
    },
  ];

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          だから、この講座がある。
        </h2>
        <p className={`text-xl text-blue-200 text-center mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          「我慢しない節約」×「少額からの資産形成」
        </p>
        <p className={`text-lg text-blue-300 text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          推しも、旅行も、趣味も諦めない。<br />
          でも、確実に資産を築いていく。
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-3xl border-2 ${solution.borderColor}/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-${solution.borderColor}/50 hover:-translate-y-2 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className={`inline-block p-4 ${solution.bgColor} rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className={`w-10 h-10 bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`} style={{ filter: 'brightness(1.5)' }} />
                </div>
                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${solution.color} bg-clip-text text-transparent relative`}>
                  {solution.title}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${solution.color} transition-all duration-300 w-0 group-hover:w-full`}></span>
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 max-w-3xl mx-auto bg-gradient-to-r from-blue-900/40 to-cyan-900/40 backdrop-blur-sm p-8 rounded-3xl border-2 border-blue-400/50 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <p className="text-2xl md:text-3xl text-white font-bold text-center mb-4">
            これは、我慢の節約術じゃない。
          </p>
          <p className="text-xl text-blue-100 text-center">
            あなたらしく生きながら、<br />
            未来への備えをつくる。<br />
            <span className="text-blue-300 font-bold">それが、この講座の本質だ。</span>
          </p>
        </div>
      </div>
    </section>
  );
};
