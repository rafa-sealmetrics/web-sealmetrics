"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ===========================================
   Video data
   =========================================== */

interface Video {
  title: string;
  description: string;
  duration: string;
  embedUrl: string;
  ctaHeadline: string;
  ctaText: string;
}

const productDemos: Video[] = [
  {
    title: "Platform Overview",
    description:
      "A complete tour of the SealMetrics dashboard, from traffic overview to AI insights.",
    duration: "3:24",
    embedUrl:
      "https://iframe.mediadelivery.net/embed/609541/e616aab7-d8cf-47d1-b250-517df6a8c593",
    ctaHeadline: "Ready to see your own data?",
    ctaText:
      "Start tracking your website in under 5 minutes. No cookies, no consent banners, just clean analytics.",
  },
  {
    title: "Getting Started",
    description:
      "How to create your account, add your site, and install the tracking script.",
    duration: "2:15",
    embedUrl:
      "https://iframe.mediadelivery.net/embed/609541/c39d3844-8ef3-4362-8579-d71a6b832b0f",
    ctaHeadline: "Get started in minutes",
    ctaText:
      "Create your account, install the tracker, and start seeing real-time data from your first visitor.",
  },
  {
    title: "Conversion Tracking",
    description:
      "Learn how to track purchases, signups, and custom conversions with SealMetrics.",
    duration: "4:10",
    embedUrl: "",
    ctaHeadline: "Track what matters most",
    ctaText:
      "Set up conversion and micro-conversion tracking to measure the real impact of your marketing efforts.",
  },
  {
    title: "Traffic Sources & UTMs",
    description:
      "Deep dive into source attribution, UTM parameters, and channel analysis.",
    duration: "3:45",
    embedUrl: "",
    ctaHeadline: "Know where your traffic comes from",
    ctaText:
      "Understand every channel, campaign, and referrer driving visitors to your site.",
  },
  {
    title: "AI Insights with LENS",
    description:
      "See how LENS detects anomalies, broken checkouts, and revenue opportunities.",
    duration: "5:02",
    embedUrl: "",
    ctaHeadline: "Let AI work for you",
    ctaText:
      "LENS automatically detects anomalies, revenue opportunities, and broken checkouts so you never miss an insight.",
  },
  {
    title: "Funnel Analysis",
    description:
      "Build and analyze conversion funnels to identify drop-off points in your user journey.",
    duration: "3:58",
    embedUrl: "",
    ctaHeadline: "Optimize your conversion path",
    ctaText:
      "Build custom funnels to visualize your customer journey and identify exactly where visitors drop off.",
  },
];

const tutorials: Video[] = [
  {
    title: "WordPress Integration",
    description:
      "Install the SealMetrics plugin on your WordPress site in one click.",
    duration: "1:48",
    embedUrl: "",
    ctaHeadline: "WordPress in one click",
    ctaText:
      "Install our WordPress plugin and start tracking in under a minute. No code required.",
  },
  {
    title: "WooCommerce Setup",
    description:
      "Set up automatic e-commerce conversion tracking for your WooCommerce store.",
    duration: "2:35",
    embedUrl: "",
    ctaHeadline: "Track every sale",
    ctaText:
      "Automatically track WooCommerce purchases, revenue, and product conversions.",
  },
  {
    title: "BigQuery Export",
    description:
      "Connect your SealMetrics account to Google BigQuery for raw data analysis.",
    duration: "4:22",
    embedUrl: "",
    ctaHeadline: "Own your raw data",
    ctaText:
      "Push all your analytics data to Google BigQuery for advanced analysis and custom reporting.",
  },
  {
    title: "Team & Permissions",
    description:
      "Invite team members, assign roles, and manage per-site access controls.",
    duration: "2:10",
    embedUrl: "",
    ctaHeadline: "Built for teams",
    ctaText:
      "Invite your team, assign roles, and control who sees what across all your sites.",
  },
  {
    title: "Custom Micro-Conversions",
    description:
      "Track scroll depth, button clicks, form submissions, and custom events.",
    duration: "3:15",
    embedUrl: "",
    ctaHeadline: "Track every interaction",
    ctaText:
      "Set up scroll tracking, button clicks, form submissions, and any custom event you need.",
  },
  {
    title: "Shopify Integration",
    description:
      "Add SealMetrics tracking to your Shopify store with automatic conversion tracking.",
    duration: "2:50",
    embedUrl: "",
    ctaHeadline: "Shopify made easy",
    ctaText:
      "Install SealMetrics on your Shopify store and automatically track purchases and customer journeys.",
  },
];

/* ===========================================
   Video card
   =========================================== */

function VideoCard({
  video,
  category,
  onClick,
}: {
  video: Video;
  category: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left bg-warm-white border border-warm-100 rounded-[4px] overflow-hidden cursor-pointer transition-all hover:border-warm-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
    >
      {/* Corporate thumbnail */}
      <div className="relative aspect-video bg-warm-900 flex items-center justify-center overflow-hidden">
        {/* Category label */}
        <span className="absolute top-3 left-3 text-[0.6rem] font-medium tracking-[0.08em] uppercase text-warm-400">
          {category}
        </span>
        {/* Play button */}
        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white/20">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="white"
            stroke="none"
          >
            <polygon points="8,5 20,12 8,19" />
          </svg>
        </div>
        {/* Logo watermark */}
        <Image
          src="/logos/logo-sealmetrics-blanco.png"
          alt=""
          width={90}
          height={24}
          unoptimized
          className="absolute bottom-3 left-3 h-4 w-auto opacity-25"
        />
        {/* Duration */}
        <span className="absolute bottom-3 right-3 text-[0.65rem] font-mono font-medium text-warm-300 bg-white/10 rounded-[2px] px-1.5 py-0.5">
          {video.duration}
        </span>
      </div>
      {/* Info */}
      <div className="p-5">
        <h3 className="text-[0.9rem] font-medium text-text-primary mb-1.5 leading-snug">
          {video.title}
        </h3>
        <p className="text-[0.8rem] text-text-secondary leading-relaxed">
          {video.description}
        </p>
      </div>
    </button>
  );
}

/* ===========================================
   Video modal
   =========================================== */

function VideoModal({
  video,
  onClose,
}: {
  video: Video;
  onClose: () => void;
}) {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-[900px] max-h-[90vh] bg-white border border-warm-100 rounded-[4px] overflow-hidden shadow-2xl grid grid-rows-[auto_1fr] sm:grid-rows-[1fr_auto]">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-[210] w-9 h-9 rounded-full bg-black/50 border border-white/10 text-white/70 flex items-center justify-center cursor-pointer hover:bg-black/70 hover:text-white transition-colors"
          aria-label="Close video"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Video player */}
        <div className="relative bg-warm-900 aspect-video">
          {video.embedUrl ? (
            <iframe
              src={`${video.embedUrl}?autoplay=true&preload=true&responsive=true`}
              loading="lazy"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-none"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-warm-400 gap-3">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="opacity-40"
              >
                <polygon points="8,5 20,12 8,19" />
              </svg>
              <span className="text-[0.85rem]">{video.title}</span>
              <span className="text-[0.7rem] text-warm-300">
                Video embed URL not configured yet
              </span>
            </div>
          )}
        </div>

        {/* CTA section */}
        <div className="p-8 sm:p-10 border-t border-warm-100">
          <h3 className="font-serif text-[1.3rem] sm:text-[1.5rem] text-text-primary mb-3 leading-tight">
            {video.ctaHeadline}
          </h3>
          <p className="text-[0.9rem] text-text-secondary leading-relaxed mb-6 max-w-[480px]">
            {video.ctaText}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://my.sealmetrics.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 text-[0.9rem] font-medium text-white bg-text-primary rounded-[4px] no-underline hover:bg-[#333] transition-colors"
            >
              Start Now
            </a>
            <Link
              href="/demo"
              className="inline-flex items-center px-7 py-3 text-[0.9rem] font-medium text-text-primary border border-warm-200 rounded-[4px] no-underline hover:bg-warm-50 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===========================================
   Section component
   =========================================== */

function VideoSection({
  label,
  title,
  subtitle,
  videos,
  onSelect,
}: {
  label: string;
  title: string;
  subtitle: string;
  videos: Video[];
  onSelect: (video: Video) => void;
}) {
  return (
    <section className="py-20 bg-white border-t border-warm-100 first:border-t-0">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="max-w-[640px] mb-12">
          <span className="inline-block text-[0.75rem] font-medium tracking-[0.08em] uppercase text-text-tertiary mb-4">
            {label}
          </span>
          <h2 className="headline-section mb-4">{title}</h2>
          <p className="text-[1rem] text-text-secondary leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {videos.map((video) => (
            <VideoCard
              key={video.title}
              video={video}
              category={label}
              onClick={() => onSelect(video)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===========================================
   Main export
   =========================================== */

export function VideoGrid() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const handleClose = useCallback(() => setActiveVideo(null), []);

  // Fire micro-conversion on video play
  const handleSelect = useCallback((video: Video) => {
    setActiveVideo(video);
    if (typeof window !== "undefined" && window.sealmetrics) {
      window.sealmetrics.micro("video_play", { title: video.title });
    }
  }, []);

  return (
    <>
      <VideoSection
        label="Product Demos"
        title="See SealMetrics in action"
        subtitle="Short walkthroughs of core features. See how SealMetrics helps you understand your traffic, conversions, and audience."
        videos={productDemos}
        onSelect={handleSelect}
      />

      <VideoSection
        label="Tutorials"
        title="Step-by-step guides"
        subtitle="Learn how to set up integrations, configure advanced features, and make the most of your analytics."
        videos={tutorials}
        onSelect={handleSelect}
      />

      {activeVideo && (
        <VideoModal video={activeVideo} onClose={handleClose} />
      )}
    </>
  );
}
