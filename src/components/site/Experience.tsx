import { motion } from "framer-motion";

export function Experience() {
  return (
    <section className="relative overflow-hidden py-28">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-48 bg-linear-to-b from-background to-transparent"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            What we do
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            We help students find direction, courage, and a path they can trust.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            Luminar is built for students who need more than information. They need guidance,
            structure, encouragement, and someone who believes their future is still becoming.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mt-16 overflow-hidden rounded-4xl border border-white/70 bg-white/58 p-3 shadow-[0_30px_100px_-60px_rgba(97,57,35,0.65)] backdrop-blur-xl"
        >
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.4fr] lg:items-stretch">
            <div className="flex flex-col justify-between rounded-[1.5rem] bg-[#2a1812] p-7 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  Watch and reflect
                </p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight">
                  A reminder that the right words can change a student's future.
                </h3>
              </div>
              <p className="mt-8 text-sm leading-7 text-white/68">
                This talk is selected to help students see how encouragement, identity, and support
                can shape the choices they make next.
              </p>
            </div>

            <div className="aspect-video overflow-hidden rounded-[1.5rem] bg-[#1f140f]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/RLESBHduKBs"
                title="How Everyday Interactions Shape Your Future | Mesmin Destin | TED"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
