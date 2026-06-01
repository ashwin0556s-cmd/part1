import { motion } from "framer-motion";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import communityImg from "@/assets/Community.jpg";
import researchImg from "@/assets/Reasearch.jpg";
import careerImg from "@/assets/Carrer.jpg";
import servicesImg from "@/assets/services.jpg";

const sections = [
  {
    title: "Community",
    eyebrow: "Community",
    subtitle: "Spaces for thinkers, makers, and dreamers to find one another.",
    description:
      "Connect, share, and grow with people who care about creative beauty and meaningful collaboration.",
    highlights: [
      { title: "Circles", desc: "Small groups around shared obsessions." },
      { title: "Live rooms", desc: "Drop in. Speak. Listen. Build." },
      { title: "Local nodes", desc: "Meet in cities around the world." },
    ],
    image: communityImg,
    badge: "Live now",
    route: "/community",
  },
  {
    title: "Research",
    eyebrow: "Research & Analysis",
    subtitle: "Open studies, datasets, and frontier reports — co-authored by the community.",
    description:
      "Explore insights, reports, and product innovation designed for modern makeup storytelling.",
    highlights: [
      { title: "Open studies", desc: "Reproducible research, in public." },
      { title: "Signal reports", desc: "What's shifting, week by week." },
      { title: "Working groups", desc: "Deep dives with peers and experts." },
    ],
    image: researchImg,
    badge: "Insights",
    route: "/research",
  },
  {
    title: "Career",
    eyebrow: "Career",
    subtitle: "Personalised guidance from people who've walked it before.",
    description: "Upcoming career opportunities for creators, stylists, and platform builders.",
    highlights: [
      { title: "1:1 sessions", desc: "Talk with senior practitioners." },
      { title: "Roadmaps", desc: "Frameworks tailored to you." },
      { title: "Opportunities", desc: "Roles surfaced by the network." },
    ],
    image: careerImg,
    badge: "Coming soon",
    route: "/career",
  },
  {
    title: "Services",
    eyebrow: "Services",
    subtitle: "Composable AI building blocks, designed to feel calm and capable.",
    description: "Premium tools, curated support, and creative services to elevate every launch.",
    highlights: [
      { title: "Studio", desc: "A canvas for intelligent workflows." },
      { title: "API", desc: "Modular endpoints, beautifully typed." },
      { title: "Agents", desc: "Long-running collaborators." },
    ],
    image: servicesImg,
    badge: "Featured",
    route: "/services",
  },
] as const;

export const Route = createFileRoute("/explore")({
  component: Explore,
  head: () => ({
    meta: [
      { title: "Explore Platform — Makeup Hub" },
      {
        name: "description",
        content: "Discover platform sections through an interactive card-based explorer.",
      },
    ],
  }),
});

function Explore() {
  return (
    <div className="min-h-screen bg-[#faf8f4] text-[#111]">
      <Header />
      <main className="relative overflow-hidden px-4 pt-28 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#8c6a4d]">Explore Platform</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl">
              Discover all platform sections in one elegant experience.
            </h1>
            <p className="mt-5 text-base leading-8 text-[#5d5446] sm:text-lg">
              Each card is your gateway to community, research, career growth, and services —
              beautifully presented with image-driven previews and premium motion.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
            {sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_20px_80px_-50px_rgba(0,0,0,0.18)] transition-all duration-500"
              >
                <Link
                  to={section.route}
                  aria-label={`Open ${section.title}`}
                  className="absolute inset-0 z-20"
                />
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${section.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="relative flex min-h-[320px] flex-col justify-between p-6 xl:p-8">
                  <div>
                    <span className="inline-flex rounded-full bg-black/45 px-3 py-1 text-xs uppercase tracking-[0.35em] text-white/85 shadow-sm shadow-black/20">
                      {section.badge}
                    </span>
                    <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-sm text-white/85">{section.subtitle}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="max-w-xl text-sm leading-7 text-white/75 transition-opacity duration-300 group-hover:text-white/90 lg:text-base">
                      {section.description}
                    </p>

                    <div className="pointer-events-none opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <div className="mb-3 text-sm text-white/85">Details</div>
                      <ul className="space-y-2">
                        {section.highlights.map((h) => (
                          <li key={h.title} className="flex items-start gap-3">
                            <div className="min-w-[56px] text-sm font-semibold text-white/95">
                              {h.title}
                            </div>
                            <div className="text-sm text-white/80">{h.desc}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm uppercase tracking-[0.3em] text-white/70 transition-all duration-300 group-hover:text-white">
                        Open page
                      </span>
                      <div className="h-1 w-16 rounded-full bg-white/30 transition-all duration-300 group-hover:bg-white" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
