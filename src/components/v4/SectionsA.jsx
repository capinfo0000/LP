// Sections A: Header, Hero (dark), Empathy, Philosophy
import { useState, useEffect } from 'react';
import { Icon } from './Icons';
import { FadeRise } from './Motion';
import { Scene } from './Scene';
import { PurchasingChart } from './PurchasingChart';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // hero is dark; switch to light header after hero
      setOverDark(window.scrollY < 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={"site-header " + (scrolled ? "scrolled " : "") + (overDark ? "over-dark" : "")}>
      <div className="site-header-inner">
        <a href="#top" className="brand">
          <span className="brand-mark"><Icon name="circle-mark" size={22} /></span>
          <span className="brand-name">節約資産形成</span>
          <span className="brand-sub">3-MONTH PROGRAM</span>
        </a>
        <nav className="nav-links">
          <a href="#curriculum">講座内容</a>
          <a href="#story">受講生の声</a>
          <a href="#offer">参加要項</a>
          <a href="#offer" className="nav-cta">申し込む <span className="arrow">→</span></a>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="hero-dark" id="top">
    <div className="container">
      <div className="hero-grid">
        <div className="hero-left">
          <FadeRise delay={0}>
            <div className="hero-eyebrow">
              <span className="program">— 3-MONTH PROGRAM</span>
              <span className="dot">·</span>
              <span className="meta">期間限定募集 · 30名様限定</span>
            </div>
          </FadeRise>
          <FadeRise delay={120}>
            <h1 className="hero-h1 serif jp-keep">
              趣味は全力で楽しみ、<br/>
              未来に<span className="accent">希望</span>を！。
            </h1>
          </FadeRise>
          <FadeRise delay={240}>
            <p className="hero-sub">
              我慢しない節約で、好きなことを楽しみながら<br/>
              確実に資産を築く3ヶ月プログラム。
            </p>
          </FadeRise>
          <FadeRise delay={360}>
            <div className="hero-ctas">
              <a href="#offer" className="btn-primary">
                今すぐ詳細を見る <span className="arrow">→</span>
              </a>
              <a href="#curriculum" className="btn-secondary">
                講座内容を見る <span className="arrow">→</span>
              </a>
            </div>
          </FadeRise>
          <FadeRise delay={480}>
            <dl className="hero-meta">
              <div className="hero-meta-group"><dt>期間</dt><dd className="serif">3ヶ月</dd></div>
              <div className="hero-meta-group"><dt>形式</dt><dd className="serif">オンライン</dd></div>
              <div className="hero-meta-group"><dt>定員</dt><dd className="serif tabular">30名</dd></div>
              <div className="hero-meta-group"><dt>保証</dt><dd className="serif tabular">30日</dd></div>
            </dl>
          </FadeRise>
        </div>
        <div className="hero-right">
          <FadeRise delay={300}><PurchasingChart /></FadeRise>
        </div>
      </div>
    </div>
  </section>
);

const Empathy = () => {
  const quotes = [
    { body: "推しのグッズ、ライブ…諦めたくない", attr: "本音 · 01", scene: "concert" },
    { body: "友達との時間も大切にしたい", attr: "本音 · 02", scene: "cafe" },
    { body: "年に数回の旅行は外せない", attr: "本音 · 03", scene: "morning" },
    { body: "趣味は人生の彩りだから", attr: "本音 · 04", scene: "hobby" },
  ];
  return (
    <section className="section section-empathy" id="empathy">
      <div className="container">
        <div className="section-head">
          <div className="num-big tabular">01</div>
          <div className="label-stack">
            <div className="label-en">— EMPATHY · あなたの本音</div>
            <div className="label-jp">そう、今のあなたの気持ちは正しい。</div>
          </div>
          <div className="you-tag">— あなたは、ひとりじゃない。</div>
        </div>

        <div className="empathy-grid">
          <div className="empathy-h">
            <FadeRise><h2 className="serif jp-keep">あなたは、<br/>こう思っていませんか<em>？</em></h2></FadeRise>
            <FadeRise delay={120}>
              <p className="lede">
                好きなことを楽しみながら、将来も安心したい。<br/>
                でも、どうすればいいのか分からない…
              </p>
            </FadeRise>
          </div>
          <div className="quotes-with-imagery">
            {quotes.map((q, i) => (
              <FadeRise key={i} delay={i * 80} className="quote-card">
                <div className="quote-img"><Scene variant={q.scene} /></div>
                <div className="quote-text">
                  <span className="mark">"</span>
                  <div className="quote-body">{q.body}</div>
                  <div className="quote-attr">— {q.attr}</div>
                </div>
              </FadeRise>
            ))}
          </div>
        </div>

        <div className="empathy-confession">
          <div>
            <div className="conf-eyebrow">— A QUIET CONFESSION</div>
          </div>
          <FadeRise>
            <p className="conf-body">
              でも同時に、不安もある。<br/>
              このままで本当に大丈夫なのか。<br/>
              老後2000万円問題も気になる。<br/>
              何かしなきゃいけない気がするけど、<br/>
              何から始めればいいのか、わからない。
            </p>
          </FadeRise>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => (
  <section className="philosophy invert" id="philosophy">
    <div className="container">
      <div className="section-head">
        <div className="num-big tabular">02</div>
        <div className="label-stack">
          <div className="label-en">— PHILOSOPHY · 知っているか、知らないか</div>
          <div className="label-jp">少し、耳が痛い話を。</div>
        </div>
        <div className="you-tag">— 知ることから、はじまる。</div>
      </div>

      <div className="phil-intro">
        <FadeRise><h2 className="serif jp-keep">あなたに、<br/>伝えたいことがある<em>。</em></h2></FadeRise>
        <FadeRise delay={120}>
          <p className="lede">少し、耳が痛い話かもしれない。<br/>でも、知っておいてほしい。</p>
        </FadeRise>
      </div>

      <div className="phil-cards">
        <article className="phil-card">
          <div className="phil-card-num">I.</div>
          <h3 className="serif">「円しか持っていない」のは、円に全額投資しているのと同じだ。</h3>
          <p>円だけを貯金しているということは、日本という一つの国の通貨に、資産の100%を賭けているということ。これは、分散していない「超ハイリスク」な状態だと気づいているだろうか。</p>
        </article>
        <article className="phil-card">
          <div className="phil-card-num">II.</div>
          <h3 className="serif">インフレ年率2%で、20年後には購買力が約3割減る</h3>
          <p>通帳の数字は100万円のまま。でも、その100万円で買えるものは、20年前の70万円分しかない。</p>
          <p className="phil-card-pull">預金は「減らない」が、価値は「確実に減っている」</p>
        </article>
        <article className="phil-card">
          <div className="phil-card-num">III.</div>
          <h3 className="serif">分散投資は「攻め」じゃない。これは「守り」だ。</h3>
          <p>資産を守るために、複数の通貨や資産に分けておく。決してギャンブルではなく、リスクを分散させる防御策。少額でもいい。若いうちから始めることが、何よりも大切なんだ。</p>
        </article>
      </div>

      <div className="phil-conclusion">
        <FadeRise>
          <p className="serif">
            知っているか、知らないか。<br/>
            それだけで、<em>10年後の未来</em>が変わる。
          </p>
        </FadeRise>
        <div className="phil-section-cta">
          <a href="#offer" className="text-cta">
            講座の詳細を見る <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export { Header, Hero, Empathy, Philosophy };
