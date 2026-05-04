import type { CSSProperties, ReactNode } from "react";

interface PictureProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "sync" | "async" | "auto";
  sizes?: string;
}

/**
 * Static-export-friendly responsive image: serves AVIF → WebP → PNG/JPG fallback
 * via <picture>. Sources are pre-generated at build time by `scripts/optimize-images.mjs`.
 *
 * Pass the same `src` you'd pass to next/image (e.g. "/logos/logo.png"); this
 * component resolves the AVIF/WebP siblings automatically.
 *
 * Use this instead of <Image> in components where:
 *   - the page is statically exported (which is everything in this site), AND
 *   - the image is purely presentational/structural (logos, illustrations, OG).
 *
 * Keep <Image> for cases where Next's blur placeholder or priority preload
 * matters more than format negotiation.
 */
export function Picture({
  src,
  alt,
  width,
  height,
  className,
  style,
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
  sizes,
}: PictureProps): ReactNode {
  const ext = src.match(/\.([a-z0-9]+)$/i)?.[1]?.toLowerCase();
  const isRaster = ext === "png" || ext === "jpg" || ext === "jpeg";

  if (!isRaster) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
      />
    );
  }

  const base = src.replace(/\.(png|jpg|jpeg)$/i, "");
  const fallbackType = ext === "png" ? "image/png" : "image/jpeg";

  return (
    <picture>
      <source srcSet={`${base}.avif`} type="image/avif" sizes={sizes} />
      <source srcSet={`${base}.webp`} type="image/webp" sizes={sizes} />
      <source srcSet={src} type={fallbackType} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={style}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
      />
    </picture>
  );
}
