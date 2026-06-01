import React from "react";

export function SubPageLayout({ videoSrc, ..._rest }: { videoSrc?: string; [key: string]: any }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {videoSrc ? (
        <>
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </>
      ) : null}
    </div>
  );
}
