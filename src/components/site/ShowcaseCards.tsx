import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Users,
  FlaskConical,
  Compass,
  Sparkles,
  GitBranch,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  { to: "/community", title: "Community", desc: "A living network of curious minds.", Icon: Users },
  {
    to: "/research",
    title: "Research & Analysis",
    desc: "Insight at the edge of intelligence.",
    Icon: FlaskConical,
  },
  { to: "/career", title: "Career Guidance", desc: "Your path, illuminated.", Icon: Compass },
  {
    to: "/services",
    title: "AI Services",
    desc: "Tools built for the next decade.",
    Icon: Sparkles,
  },
  { to: "/collaboration", title: "Collaboration", desc: "Build, side by side.", Icon: GitBranch },
  { to: "/mentorship", title: "Mentorship", desc: "Learn from those ahead.", Icon: GraduationCap },
] as const;

export function ShowcaseCards() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              A new ecosystem
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
              Six worlds. <span className="text-gradient">One movement.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Each space is a portal. Step inside to explore the people, ideas, and tools shaping it.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.to}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Link
                to={c.to}
                className="group relative block h-full overflow-hidden rounded-3xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.78_0.16_300/0.5),transparent_70%)] opacity-70 blur-2xl transition-opacity group-hover:opacity-100" />

                <div className="relative flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/80 text-primary shadow-sm ring-1 ring-white">
                    <c.Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>

                <h3 className="relative mt-10 text-xl font-semibold tracking-tight">{c.title}</h3>
                <p className="relative mt-2 text-sm text-muted-foreground">{c.desc}</p>

                <div className="relative mt-8 h-px w-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
                <div className="relative mt-4 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Enter portal
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
