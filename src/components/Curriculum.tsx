import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';

export const Curriculum = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [openMonth, setOpenMonth] = useState<number | null>(1);

  const curriculum = [
    {
      month: 1,
      title: '基礎構築：お金の見える化',
      topics: [
        '家計の完全把握ワーク',
        '固定費の洗い出しと削減プラン作成',
        '「削るもの」「残すもの」の価値観整理',
        'インフレ・通貨リスクの基礎知識',
        '個別Zoom相談（家計ヒアリング）',
      ],
      color: 'blue',
    },
    {
      month: 2,
      title: '実践：投資の第一歩',
      topics: [
        'インデックス投資の基礎と選び方',
        '証券口座の開設サポート',
        '月1〜3万円から始める積立設計',
        'NISAの賢い活用法',
        '分散投資の具体的なポートフォリオ作成',
      ],
      color: 'purple',
    },
    {
      month: 3,
      title: '定着：継続できる仕組み化',
      topics: [
        '自動積立の設定と運用モニタリング',
        '長期投資で成功するメンタル管理',
        'ライフイベント別の資金計画',
        '10年後のシミュレーション作成',
        '卒業後も続けられる習慣化メソッド',
      ],
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        border: 'border-blue-500',
        bg: 'bg-blue-500',
        bgLight: 'bg-blue-500/20',
        text: 'text-blue-400',
        gradient: 'from-blue-900/40 to-cyan-900/40',
      },
      purple: {
        border: 'border-purple-500',
        bg: 'bg-purple-500',
        bgLight: 'bg-purple-500/20',
        text: 'text-purple-400',
        gradient: 'from-purple-900/40 to-pink-900/40',
      },
      green: {
        border: 'border-green-500',
        bg: 'bg-green-500',
        bgLight: 'bg-green-500/20',
        text: 'text-green-400',
        gradient: 'from-green-900/40 to-emerald-900/40',
      },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section ref={elementRef} className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-4 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          3ヶ月で、人生が変わる
        </h2>
        <p className={`text-xl text-blue-200 text-center mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          段階的に学び、確実に身につく実践カリキュラム
        </p>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block"></div>

          <div className="space-y-8">
            {curriculum.map((item, index) => {
              const colors = getColorClasses(item.color);
              const isOpen = openMonth === item.month;
              const delay = `${400 + index * 200}ms`;

              return (
                <div
                  key={item.month}
                  className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: isVisible ? delay : '0ms' }}
                >
                  <div className="relative">
                    <div className={`absolute left-8 top-6 w-8 h-8 ${colors.bg} rounded-full border-4 border-slate-900 z-10 hidden md:flex items-center justify-center transition-all duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: delay }}>
                      <Calendar className="w-4 h-4 text-white" />
                    </div>

                    <div className="md:ml-24">
                      <button
                        onClick={() => setOpenMonth(isOpen ? null : item.month)}
                        className={`w-full bg-gradient-to-br ${colors.gradient} backdrop-blur-sm p-6 rounded-2xl border-2 ${colors.border}/30 hover:${colors.border}/50 transition-all duration-300 hover:scale-102`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="text-left">
                            <div className={`inline-block px-4 py-1 ${colors.bgLight} rounded-full mb-3`}>
                              <span className={`${colors.text} font-bold text-lg`}>第{item.month}ヶ月</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                          </div>
                          {isOpen ? (
                            <ChevronUp className={`w-8 h-8 ${colors.text} flex-shrink-0`} />
                          ) : (
                            <ChevronDown className={`w-8 h-8 ${colors.text} flex-shrink-0`} />
                          )}
                        </div>

                        <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 mt-6' : 'max-h-0'}`}>
                          <div className="space-y-3">
                            {item.topics.map((topic, topicIndex) => (
                              <div
                                key={topicIndex}
                                className={`flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg transition-all duration-300 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                                style={{ transitionDelay: isOpen ? `${topicIndex * 100}ms` : '0ms' }}
                              >
                                <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0`}></div>
                                <p className="text-lg text-blue-100">{topic}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-block bg-gradient-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500 px-8 py-6 rounded-2xl">
            <p className="text-2xl text-white font-bold mb-2">
              3ヶ月後、あなたは別人になっている。
            </p>
            <p className="text-lg text-orange-100">
              知識も、行動も、そして未来への確信も。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
