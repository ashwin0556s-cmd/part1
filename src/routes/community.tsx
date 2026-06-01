import { createFileRoute } from "@tanstack/react-router";
import { SubPageLayout } from "@/components/site/SubPageLayout";

export const Route = createFileRoute("/community")({
  component: Community,
  head: () => ({
    meta: [
      { title: "Community | Luminar AI" },
      {
        name: "description",
        content: "A placeholder community page for Luminar AI.",
      },
    ],
  }),
});

function Community() {
  return (
    <SubPageLayout videoSrc="https://player.vimeo.com/progressive_redirect/playback/949690208/rendition/540p/file.mp4?loc=external&log_user=0&signature=32676ebb1b9e4e181ef989f48abc7b008eb461468c71db7129975f815a3a30ca" />
  );
}
