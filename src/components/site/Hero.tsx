import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative isolate min-h-[58svh] overflow-hidden bg-[#fff8ef] pt-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-30 bg-[linear-gradient(180deg,#fff8ef_0%,#fbf7f3_100%)]"
      />

      <motion.div
        aria-hidden
        className="absolute inset-x-[-10%] top-20 -z-20 h-72 opacity-80"
        animate={{ x: ["-4%", "4%", "-4%"], y: [0, -12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-full w-full rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(255,183,115,0.42)_0%,rgba(255,210,173,0.28)_42%,transparent_70%)] blur-2xl" />
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute inset-x-[-18%] -bottom-28 -z-20 h-80 opacity-90"
        animate={{ x: ["5%", "-5%", "5%"], y: [0, 14, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-full w-full rounded-[48%] bg-[radial-gradient(ellipse_at_center,rgba(255,154,137,0.3)_0%,rgba(255,225,184,0.34)_48%,transparent_74%)] blur-3xl" />
      </motion.div>

      <motion.svg
        aria-hidden
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 -z-10 h-48 w-full text-[#f5b67d]/45"
        animate={{ x: [0, -36, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="currentColor"
          d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,208C1120,213,1280,171,1360,149.3L1440,128L1440,320L0,320Z"
        />
      </motion.svg>

      <motion.svg
        aria-hidden
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 -z-10 h-56 w-full text-[#ef8d7a]/25"
        animate={{ x: [-28, 28, -28] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fill="currentColor"
          d="M0,224L96,202.7C192,181,384,139,576,154.7C768,171,960,245,1152,250.7C1344,256,1536,192,1728,176L1728,320L0,320Z"
        />
      </motion.svg>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-background"
      />

      <div className="mx-auto flex max-w-7xl items-center px-6 pb-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a45a34]">
            Luminar AI
          </p>

          <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-[#251812] drop-shadow-[0_10px_42px_rgba(255,255,255,0.62)] md:text-7xl lg:text-[5.8rem]">
            A bright space for ideas, people, and intelligent creation.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#6d5142] md:text-lg">
            Build, learn, collaborate, and grow inside a calm digital community
            shaped for creators, researchers, and future-focused teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
