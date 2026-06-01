import { motion } from "framer-motion";

export function HomeAbout() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="rounded-[2rem] border border-white/70 bg-white/64 p-8 shadow-[0_30px_90px_-62px_rgba(97,57,35,0.68)] backdrop-blur-xl md:p-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            About Luminar
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-[#251812] md:text-5xl">
              We stand beside students while they discover what they are capable of becoming.
            </h2>

            <div className="space-y-5 text-base leading-8 text-muted-foreground">
              <p>
                Luminar is a guidance space for students who are searching for direction, preparing
                for government exams, or trying to understand which career path truly belongs to
                them. We help turn confusion into a plan, pressure into discipline, and hidden
                potential into visible confidence.
              </p>
              <p>
                Through career guidance, exam preparation support, mentoring conversations, and
                inspiring talks, we encourage students to keep going with purpose. Our goal is not
                only to help them pass an exam or choose a course, but to help them bring out who
                they really are.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
