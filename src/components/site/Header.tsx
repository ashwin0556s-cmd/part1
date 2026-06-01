import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link to="/" className="group inline-flex items-center gap-3 rounded-full border border-white/55 bg-white/55 px-4 py-2 shadow-lg shadow-orange-950/5 backdrop-blur-xl transition-colors hover:bg-white/75">
          <img src="/favicon.svg" alt="Luminar" className="h-10 w-10 rounded-full shadow-md" />

          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2b1c15]">
            Luminar
          </span>
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-white/55 bg-white/50 p-1.5 shadow-lg shadow-orange-950/5 backdrop-blur-xl">
          <Link
            to="/explore"
            className="rounded-full px-4 py-2 text-sm font-semibold text-[#4c3328] transition-colors hover:bg-white hover:text-[#1f140f]"
          >
            Explore
          </Link>
          <button
            className="rounded-full bg-[#251812] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Enroll
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
