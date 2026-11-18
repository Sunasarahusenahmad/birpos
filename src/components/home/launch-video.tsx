"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { launchVideo } from "@/data/launch-video";

/**
 * Click-to-play launch film. Until the visitor presses play, the page only
 * loads a ~30 KB lazy poster image: the 19 MB video is never fetched on page
 * load, so it cannot hurt LCP, page weight or Core Web Vitals. Sound plays
 * only after the click (browsers block autoplay with sound anyway).
 */
export function LaunchVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="launch-video" className="py-20 sm:py-24" aria-labelledby="launch-video-title">
      <Container>
        <SectionHeading
          eyebrow="Watch the launch"
          title={<span id="launch-video-title">See BirStock in 60 seconds</span>}
          description="Scan, bill, print and back up. Watch how a shop runs on BirStock, from the first scan to the printed bill."
        />

        <Reveal delay={0.1}>
          <div className="relative mx-auto mt-12 aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-foreground/5 shadow-2xl shadow-primary/10">
            {playing ? (
              <video
                className="h-full w-full"
                src={launchVideo.src}
                poster={launchVideo.poster}
                controls
                autoPlay
                playsInline
                preload="none"
                width={launchVideo.width}
                height={launchVideo.height}
                aria-label={launchVideo.title}
              >
                Your browser does not support HTML5 video.{" "}
                <a href={launchVideo.src}>Download the BirStock launch video</a>.
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 h-full w-full cursor-pointer"
                aria-label={`Play video: ${launchVideo.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, already optimised webp */}
                <img
                  src={launchVideo.poster}
                  alt="BirStock launch film: a GST bill printed from Quick POS"
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-foreground/10 transition-colors group-hover:bg-foreground/20" />
                <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-primary/40 transition-transform group-hover:scale-110 sm:h-24 sm:w-24">
                  <Play className="ml-1 h-9 w-9 fill-current sm:h-10 sm:w-10" />
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-foreground/80 px-3 py-1 text-xs font-semibold text-background">
                  1:00
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
