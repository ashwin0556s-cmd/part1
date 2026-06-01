import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout } from "@/components/site/SubPageLayout";

export const Route = createFileRoute("/mentorship")({
  component: MentorshipPage,
  head: () => ({
    meta: [
      { title: "Mentorship — Luminar·AI" },
      { name: "description", content: "Learn from those ahead." },
    ],
  }),
});

function MentorshipPage() {
  return (
    <SubPageLayout
      eyebrow="Mentorship"
      title={
        <>
          Learn from those <span className="text-gradient">ahead.</span>
        </>
      }
      subtitle="A culture of generosity — guidance you can actually feel."
      highlights={[
        { title: "Mentor matching", desc: "Paired by trajectory, not title." },
        { title: "Office hours", desc: "Recurring time with seniors." },
        { title: "Cohorts", desc: "Grow together with peers." },
      ]}
    />
  );
}
