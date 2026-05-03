// Sections B: Data, Risk (crimson), Solution
import { useState } from 'react';
import { CountUp, FadeRise } from './Motion';
import { LossBar } from './LossBar';
import { SpotIllustration } from './SpotIllustration';
import { Icon } from './Icons';

const Data = () => (
  <section className="section section-data" id="data">
    <div className="container">
      <div className="section-head">
        <div className="num-big tabular">03</div>
        <div className="label-stack">
          <div className="label-en">— DATA · 厳しい現実</div>
          <div className="label-jp">事実だけが、未来を変える。</div>
        </div>
        <div className="you-tag">— これは、あなたの話だ。</div>
      </div>

      <div className="data-h">
        <FadeRise><h2 className="serif jp-keep">データが語る、<br/>厳しい現実<em>。</em></h2></FadeRise>
        <FadeRise delay={100}><p>感覚ではなく、事実として知っておいてほしい。<br/>数字は、嘘をつかない。</p></FadeRise>
      </div>

      <div className="stat-row">
        <div className="stat-card">
          <div className="stat-eyebrow">FIG.01 · SAVINGS</div>
          <div className="stat-value tabular">
            <CountUp to={36} duration={1800} /><span className="unit">%</span>
          </div>
          <div className="stat-label">20代の貯蓄ゼロ世帯割合</div>
          <div className="stat-source">出典：金融広報中央委員会「家計の金融行動に関する世論調査」2024年</div>
        </div>
        <div className="stat-card">
          <div className="stat-eyebrow">FIG.02 · AVERAGE</div>
          <div className="stat-value tabular">
            <span className="yen">¥</span><CountUp to={184} duration={1800} /><span className="unit">万</span>
          </div>
          <div className="stat-label">20代単身世帯の平均貯蓄額</div>
          <div className="stat-source">出典：総務省「家計調査報告」2024年</div>
        </div>
        <div className="stat-card">
          <div className="stat-eyebrow">FIG.03 · INFLATION</div>
          <div className="stat-value tabular">
            <CountUp to={2} duration={1800} /><span className="unit">%</span>
          </div>
          <div className="stat-label">日銀の目標インフレ率</div>
          <div className="stat-source">出典：日本銀行「物価安定の目標」</div>
        </div>
      </div>

      <LossBar />

      <div className="sim-mega">
        <div className="mega-line">預金通帳の数字は100万円のまま。</div>
        <div className="mega-line">でも、買えるものは</div>
        <div className="mega-emph serif">3割<span className="accent-text">減っている</span>。</div>
      </div>

      <div className="sim-jab">
        <FadeRise>
          <p className="sim-jab-line serif">つまり、<span className="accent-text">330,000円</span>が消えた。</p>
        </FadeRise>
        <FadeRise delay={150}>
          <p className="sim-jab-sub">あなたの貯金は、寝ている間にも目減りしている。</p>
        </FadeRise>
      </div>

      <div className="section-end-cta">
        <a href="#offer" className="text-cta">
          講座の詳細を見る <span className="arrow">→</span>
        </a>
      </div>
    </div>
  </section>
);

const Risk = () => {
  const [tab, setTab] = useState("none");
  const noneItems = [
    { h: "資産は増えていない", b: "むしろ、インフレで実質的には目減りしている" },
    { h: "不安は10年前と変わらない", b: "いや、年齢を重ねた分、もっと焦っているかもしれない" },
    { h: "夜、ふと考える", b: "「あの時、始めていれば…」という後悔" },
    { h: "でも、もう遅い？", b: "時間は巻き戻せない。複利の力を活かせる期間も短くなっている" },
  ];
  const actedItems = [
    { h: "資産が着実に増えている", b: "月3万円の積立でも、10年で400万円以上（年利5%想定）" },
    { h: "精神的な余裕がある", b: "将来への不安が減り、今を楽しめている" },
    { h: "選択肢が増えた", b: "転職、独立、留学…やりたいことに挑戦できる自由" },
    { h: "周りから頼られる存在に", b: "お金の知識を持つことで、友人や家族にもアドバイスできる" },
  ];
  const items = tab === "none" ? noneItems : actedItems;

  return (
    <section className="risk-section crimson-section" id="risk">
      <div className="container">
        <div className="section-head">
          <div className="num-big tabular">04</div>
          <div className="label-stack">
            <div className="label-en">— SCENARIO · 10年後の分岐</div>
            <div className="label-jp">未来は、二つに分かれる。</div>
          </div>
          <div className="you-tag">— これは、あなたの話だ。</div>
        </div>

        <div className="risk-banner">
          <h2 className="serif risk-banner-h2 jp-keep">
            何もしなければ、<br/>
            <em>どうなるのか？</em>
          </h2>
          <p className="risk-banner-sub">10年後の、あなたの姿。</p>
        </div>

        <div className="risk-tabs-guide">← タブを切り替えて、二つの未来を比較する</div>
        <div className="risk-tabs">
          <button className={"risk-tab " + (tab === "none" ? "active" : "")} onClick={() => setTab("none")}>
            <span className="risk-tab-num">A</span>
            <span className="risk-tab-label">何もしない場合</span>
          </button>
          <button className={"risk-tab " + (tab === "acted" ? "active" : "")} onClick={() => setTab("acted")}>
            <span className="risk-tab-num">B</span>
            <span className="risk-tab-label">行動した場合</span>
          </button>
        </div>

        <div className="risk-panel">
          <div className="risk-spot">
            <SpotIllustration variant={tab === "acted" ? "ascent" : "decline"} />
          </div>
          <div className="risk-list">
            {items.map((it, i) => (
              <div className="risk-row" key={i}>
                <div className="risk-row-num tabular">{String(i + 1).padStart(2, "0")}</div>
                <div className="risk-row-body">
                  <h4 className="serif">{it.h}</h4>
                  <p>{it.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="risk-mega">
          <FadeRise>
            <p className="serif risk-mega-h">
              変わるのは、<em>今しかない</em>。
            </p>
          </FadeRise>
          <FadeRise delay={150}>
            <p className="risk-mega-sub">
              10年後に後悔しないために、<br/>今日から、一歩を踏み出そう。
            </p>
          </FadeRise>
          <div className="risk-section-cta">
            <a href="#offer" className="text-cta">
              講座の詳細を見る <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Solution = () => {
  const pillars = [
    { num: "01", icon: "compass", title: "設計型節約",
      body: "闇雲に切り詰めるのではなく、あなたの価値観に基づいて「削るもの」と「残すもの」を明確に設計。" },
    { num: "02", icon: "scale", title: "固定費の最適化",
      body: "通信費・保険・サブスクなど、見直すだけで年間10万円以上削減できるポイントを具体的に提案。" },
    { num: "03", icon: "seed", title: "少額インデックス投資",
      body: "月1万円から始められる、再現性の高い長期投資戦略。特別なスキルは不要。" },
    { num: "04", icon: "shield", title: "通貨リスク分散",
      body: "円だけでなく、ドルなど複数の通貨・資産に分散することで、インフレリスクから資産を守る。" },
  ];
  return (
    <section className="section section-solution" id="solution">
      <div className="container">
        <div className="section-head">
          <div className="num-big tabular">05</div>
          <div className="label-stack">
            <div className="label-en">— SOLUTION · 4本柱</div>
            <div className="label-jp">だから、この講座がある。</div>
          </div>
          <div className="you-tag">— これは、あなたの話だ。</div>
        </div>

        <div className="sol-h">
          <FadeRise><h2 className="serif jp-keep">だから、<br/>この講座がある<em>。</em></h2></FadeRise>
          <FadeRise delay={100}>
            <p>
              「我慢しない節約」×「少額からの資産形成」。<br/>
              推しも、旅行も、趣味も諦めない。<br/>
              でも、確実に資産を築いていく。
            </p>
          </FadeRise>
        </div>

        <div className="pillars">
          {pillars.map((p, i) => (
            <FadeRise key={p.num} delay={i * 80} className="pillar">
              <div className="pillar-num">PILLAR {p.num}</div>
              <div className="pillar-icon"><Icon name={p.icon} size={36} stroke={1.25} /></div>
              <h3 className="serif">{p.title}</h3>
              <p>{p.body}</p>
            </FadeRise>
          ))}
        </div>

        <div className="sol-conclusion">
          <FadeRise>
            <p>
              これは、<em>我慢の節約術</em>じゃない。<br/>
              あなたらしく生きながら、未来への備えをつくる。<br/>
              それが、この講座の本質だ。
            </p>
          </FadeRise>
          <div className="section-end-cta">
            <a href="#offer" className="text-cta">
              講座の詳細を見る <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Data, Risk, Solution };
