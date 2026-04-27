import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Sunrise, Coffee, Smile, Star } from 'lucide-react';

export const FutureStory = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const stories = [
    {
      icon: Sunrise,
      time: '3ヶ月後',
      title: '朝、通帳を見るのが楽しみになった',
      description: '少しずつ増えていく資産。推しのグッズを買った日も、罪悪感がない。だって、ちゃんと積み立ても続けているから。',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'from-orange-900/30 to-yellow-900/30',
    },
    {
      icon: Coffee,
      time: '6ヶ月後',
      title: '友達に相談される存在に',
      description: '「お金のこと、どうしてる？」と聞かれるようになった。自分の経験を伝えると、みんな真剣に聞いてくれる。',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-900/30 to-cyan-900/30',
    },
    {
      icon: Smile,
      time: '1年後',
      title: '将来への不安が、確信に変わった',
      description: '資産は30万円以上に。このペースなら、10年後には本当に達成できる。未来が、楽しみになってきた。',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/30 to-pink-900/30',
    },
    {
      icon: Star,
      time: '3年後',
      title: '選択肢が、圧倒的に増えた',
      description: '転職も、独立も、留学も。やりたいことを選べる自由がある。お金が全てじゃない。でも、お金があると人生の自由度が上がる。',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-900/30 to-emerald-900/30',
    },
  ];

  return (
    <section ref={elementRef} className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 animate-gradient-slow"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          あなたの、これからの物語
        </h2>
        <p className={`text-xl text-blue-200 text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          受講生たちが歩んだ、未来への道のり
        </p>

        <div className="max-w-5xl mx-auto space-y-12">
          {stories.map((story, index) => {
            const Icon = story.icon;
            const isEven = index % 2 === 0;
            const delay = `${400 + index * 200}ms`;

            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: isVisible ? delay : '0ms' }}
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className="md:w-1/3 text-center">
                    <div className={`inline-block relative transition-all duration-1000 ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'}`} style={{ transitionDelay: delay }}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${story.color} rounded-full blur-2xl opacity-50`}></div>
                      <div className={`relative p-8 bg-gradient-to-br ${story.bgColor} backdrop-blur-sm rounded-full border-2 border-white/20`}>
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                    </div>
                    <p className={`mt-4 text-2xl font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}>
                      {story.time}
                    </p>
                  </div>

                  <div className="md:w-2/3">
                    <div className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                        {story.title}
                      </h3>
                      <p className="text-lg text-blue-100 leading-relaxed">
                        {story.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-16 max-w-3xl mx-auto text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm p-8 rounded-3xl border-2 border-blue-400/50">
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
              これは、特別な人の話じゃない。
            </p>
            <p className="text-xl text-blue-100 mb-2">
              ただ、「今日から始めた」人の話だ。
            </p>
            <p className="text-lg text-blue-200">
              次は、あなたの番。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
