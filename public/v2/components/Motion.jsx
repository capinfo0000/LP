// Scroll & motion utilities — drumming pulse, count-up, gold-line draw, fade-rise
const { useState: useState_m, useEffect: useEffect_m, useRef: useRef_m } = React;

// useInView — IntersectionObserver hook
const useInView = (options = {}) => {
  const ref = useRef_m(null);
  const [inView, setInView] = useState_m(false);
  useEffect_m(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: options.threshold ?? 0.2, rootMargin: options.rootMargin ?? "0px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
};

// CountUp — easing count from 0 to target on enter view
const CountUp = ({ to, duration = 1800, decimals = 0, prefix = "", suffix = "", className = "" }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const [val, setVal] = useState_m(0);
  useEffect_m(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  const formatted = val.toLocaleString(undefined, {
    minimumFractionDigits: decimals, maximumFractionDigits: decimals,
  });
  return <span ref={ref} className={"tabular " + className}>{prefix}{formatted}{suffix}</span>;
};

// FadeRise — content rises from below + fades on view
const FadeRise = ({ children, delay = 0, className = "", as: Tag = "div" }) => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const style = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms, transform 700ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
  };
  return <Tag ref={ref} className={className} style={style}>{children}</Tag>;
};

// GoldRule — horizontal gold line that draws on scroll into view
const GoldRule = ({ width = "100%", height = 1, delay = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.4 });
  return (
    <div ref={ref} style={{
      width, height, background: "var(--accent)",
      transformOrigin: "left center",
      transform: inView ? "scaleX(1)" : "scaleX(0)",
      transition: `transform 1100ms cubic-bezier(.2,.7,.2,1) ${delay}ms`,
    }} />
  );
};

// FixedCTA — small persistent button bottom-right after hero scrolls past
const FixedCTA = () => {
  const [show, setShow] = useState_m(false);
  useEffect_m(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a href="#offer" className="fixed-cta" style={{
      opacity: show ? 1 : 0,
      pointerEvents: show ? "auto" : "none",
      transform: show ? "translateY(0)" : "translateY(20px)",
    }}>
      申し込む <span className="arrow">→</span>
    </a>
  );
};

window.useInView = useInView;
window.CountUp = CountUp;
window.FadeRise = FadeRise;
window.GoldRule = GoldRule;
window.FixedCTA = FixedCTA;
