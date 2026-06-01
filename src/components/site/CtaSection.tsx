import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Particles } from "./Particles";

export function CtaSection() {
  return (
    <section className="relative px-6 py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] glass-strong px-8 py-24 text-center">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/2 h-144 w-xl -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.8_0.18_300/0.55),transparent_60%)] blur-3xl animate-pulse-glow" />
        </div>
        <Particles count={18} />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight md:text-7xl"
        >
          Join the next generation <br className="hidden md:block" />
          of <span className="text-gradient">digital thinkers.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-md text-base text-muted-foreground"
        >
          A few seconds. A lifetime of connections.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/community"
            className="group relative inline-flex items-center gap-2 rounded-full bg-(--gradient-primary) px-9 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            <span className="absolute -inset-1 -z-10 rounded-full bg-(--gradient-primary) opacity-50 blur-xl" />
            Enter Luminar·AI
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
