import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout } from "@/components/site/SubPageLayout";

export const Route = createFileRoute("/collaboration")({
  component: CollaborationPage,
  head: () => ({
    meta: [
      { title: "Collaboration — Luminar·AI" },
      { name: "description", content: "Build, side by side." },
    ],
  }),
});

function CollaborationPage() {
  return (
    <SubPageLayout
      eyebrow="Collaboration"
      title={
        <>
          Build, <span className="text-gradient">side by side.</span>
        </>
      }
      subtitle="Shared spaces for projects, prototypes, and the impossible."
      highlights={[
        { title: "Project rooms", desc: "Everything for a team in one place." },
        { title: "Co-builds", desc: "Pair with others on real work." },
        { title: "Showcases", desc: "Ship in front of the community." },
      ]}
    />
  );
}
