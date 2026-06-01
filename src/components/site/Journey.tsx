import { motion } from "framer-motion";
import { UserPlus, BookOpen, Network, Hammer, Rocket } from "lucide-react";

const steps = [
  { Icon: UserPlus, title: "Join", desc: "Step into the network." },
  { Icon: BookOpen, title: "Learn", desc: "Absorb from the brightest." },
  { Icon: Network, title: "Connect", desc: "Find your people." },
  { Icon: Hammer, title: "Build", desc: "Create what's next." },
  { Icon: Rocket, title: "Grow", desc: "Compound, together." },
];

export function Journey() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            The Journey
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            Five steps to a new <span className="text-gradient">trajectory.</span>
          </h2>
        </div>

        <div className="relative mt-20">
          {/* pathway */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
          />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-primary via-[oklch(0.78_0.16_320)] to-primary md:block"
          />

          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative grid h-24 w-24 place-items-center rounded-full glass-strong glow-ring">
                  <div className="absolute inset-2 rounded-full bg-[var(--gradient-primary)] opacity-10" />
                  <s.Icon className="relative h-8 w-8 text-primary" strokeWidth={1.6} />
                </div>
                <div className="mt-5 text-lg font-semibold tracking-tight">{s.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
