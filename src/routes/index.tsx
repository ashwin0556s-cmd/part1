import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Experience } from "@/components/site/Experience";
import { HomeAbout } from "@/components/site/HomeAbout";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Luminar·AI — A futuristic community for the next era of intelligence" },
      {
        name: "description",
        content:
          "Build, learn, and evolve together. Luminar·AI is a digital community for thinkers, researchers, and creators shaping what's next.",
      },
      { property: "og:title", content: "Luminar·AI — Future of intelligence is people" },
      {
        property: "og:description",
        content: "Join a futuristic community for research, career, mentorship and collaboration.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <Header />
      <main>
        <Hero />
        <Experience />
        <HomeAbout />
      </main>
      <Footer />
    </div>
  );
}
