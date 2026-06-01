import { motion } from "framer-motion";
import { Aperture, ArrowUpRight, Code2, Mail, Play } from "lucide-react";
import footerImage from "../../assets/image.png";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", Icon: Aperture },
  { label: "YouTube", href: "https://youtube.com", Icon: Play },
  { label: "GitHub", href: "https://github.com", Icon: Code2 },
];


export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-black text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${footerImage})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.36),rgba(0,0,0,0.9)_54%,#000_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.14),transparent_32%)]"
      />

      <div className="mx-auto flex min-h-96 max-w-7xl flex-col justify-between px-6 py-9 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"
        >
          <a
            href="/"
            className="text-base font-semibold uppercase tracking-[0.2em] text-white"
          >
            Luminar
          </a>

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="py-10 md:py-14"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/45">
            Next-generation digital intelligence
          </p>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Make your product feel alive.
            </h2>

            <a
              href="mailto:hello@luminar.ai"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-[0_20px_80px_rgba(255,255,255,0.18)] transition-transform hover:-translate-y-1"
            >
              <Mail className="h-4 w-4" />
              Contact us
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-5 border-t border-white/12 pt-6 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-xs text-white/45">
            &copy; 2026 Luminar AI. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-white/8 text-white/60 backdrop-blur-md transition-colors hover:border-white/30 hover:bg-white/16 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
