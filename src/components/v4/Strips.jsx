// Social-proof strip —卒業生 / 修了率 / 満足度 / メディア掲載
import { CountUp, FadeRise } from './Motion';

const SocialProof = () => (
  <section className="social-proof">
    <div className="container">
      <div className="social-proof-eyebrow">— TRUSTED · 講座の歩み</div>
      <div className="social-proof-grid">
        <div className="social-stat">
          <div className="social-stat-num tabular">
            <CountUp to={2847} duration={2000} />
          </div>
          <div className="social-stat-label">卒業生</div>
          <div className="social-stat-sub">GRADUATES · 累計</div>
        </div>
        <div className="social-stat">
          <div className="social-stat-num tabular">
            <CountUp to={93} duration={1800} /><span className="unit">%</span>
          </div>
          <div className="social-stat-label">修了率</div>
          <div className="social-stat-sub">COMPLETION</div>
        </div>
        <div className="social-stat">
          <div className="social-stat-num tabular">
            <CountUp to={96} duration={1800} /><span className="unit">%</span>
          </div>
          <div className="social-stat-label">満足度</div>
          <div className="social-stat-sub">SATISFACTION</div>
        </div>
        <div className="social-stat">
          <div className="social-stat-num tabular">
            <CountUp to={12} duration={1500} /><span className="unit">誌</span>
          </div>
          <div className="social-stat-label">メディア掲載</div>
          <div className="social-stat-sub">FEATURED IN</div>
        </div>
      </div>
    </div>
  </section>
);

// Three Futures — 章扉感の黒反転3カードブロック
const ThreeFutures = () => {
  const futures = [
    {
      n: "01",
      title: "罪悪感ゼロの生活",
      body: "推しも趣味も、堂々と楽しめる。\n設計型節約で、使っていい場所と削る場所が明確になる。",
    },
    {
      n: "02",
      title: "月3万円の積立習慣",
      body: "10年で400万円超。\n少額でも時間を味方につければ、複利の力で大きく育っていく。",
    },
    {
      n: "03",
      title: "インフレに負けない資産防衛力",
      body: "一生使える知識。\n円だけに依存しない、分散投資の基礎が、あなたの一部になる。",
    },
  ];
  return (
    <section className="three-futures">
      <div className="container">
        <div className="section-head">
          <div className="num-big tabular">11</div>
          <div className="label-stack">
            <div className="label-en">— FUTURES · 3つの未来</div>
            <div className="label-jp">あなたが、3ヶ月で手に入れるもの</div>
          </div>
          <div className="you-tag">— これは、あなたの話だ。</div>
        </div>

        <div className="tf-h">
          <FadeRise>
            <h2 className="serif">
              あなたが、<br/>3ヶ月で手に入れるもの。
            </h2>
          </FadeRise>
          <FadeRise delay={120}>
            <p className="sub">
              これは、知識じゃない。<br/>
              一生、あなたを支える構造。
            </p>
          </FadeRise>
        </div>

        <div className="tf-grid">
          {futures.map((f, i) => (
            <FadeRise key={f.n} delay={i * 100} className="tf-card">
              <div className="tf-num tabular">#{f.n}</div>
              <h3 className="serif">{f.title}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{f.body}</p>
            </FadeRise>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SocialProof, ThreeFutures };
