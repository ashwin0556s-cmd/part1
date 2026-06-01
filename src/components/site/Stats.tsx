import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { v: 24800, s: "+", label: "Members" },
  { v: 96, s: "%", label: "Feel inspired" },
  { v: 1200, s: "+", label: "Projects shipped" },
  { v: 64, s: "", label: "Countries" },
];

const testimonials = [
  {
    name: "Ava Chen",
    role: "Researcher",
    quote: "Luminar feels less like a platform and more like a horizon.",
  },
  { name: "Noah Mehta", role: "Founder", quote: "I found my collaborators here within a week." },
  {
    name: "Sora Ito",
    role: "Designer",
    quote: "It's the calmest, most alive interface I've used.",
  },
];

export function Stats() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Why join</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            A community already in motion.
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-3xl glass p-7"
            >
              <div className="text-4xl font-semibold tracking-tight text-gradient md:text-5xl">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl glass p-10">
            <div className="absolute inset-0 bg-linear-to-br from-amber-300/10 via-rose-300/10 to-slate-950/10" />
            <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,162,97,0.12),transparent_30%)]" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                This week
              </div>
              <div className="mt-4 text-xl font-semibold tracking-tight">
                412 new projects, 38 live sessions, infinite conversations.
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl glass p-5"
              >
                <p className="text-[15px] leading-relaxed text-foreground/85">"{t.quote}"</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-(--gradient-primary)" />
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
