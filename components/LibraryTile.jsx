/**
 * <LibraryTile /> — the pastel emoji tile (Games, Worksheets, Speaking, etc.)
 * Matches the live `.beaLibraryTile` pattern exactly:
 *   pastel fill · 4px navy outline · 8px navy offset shadow · 3D emoji · title · subtitle
 *
 * Usage:
 *   <LibraryTile variant="games"  emoji="🎮" title="English Games"  description="Sentence builders, matching and word order" href="/courses?type=games" />
 *   <LibraryTile variant="sheets" emoji="📝" title="Worksheets"     description="Printable practice for every level"        href="/downloads" />
 *
 * Variants: games | sheets | speak | write | teach | test
 */
import React from "react";

export default function LibraryTile({
  variant = "games",
  emoji,
  title,
  description,
  href = "#",
}) {
  return (
    <a className={`bea-tile bea-tile--${variant}`} href={href}>
      <span className="emoji" aria-hidden="true">{emoji}</span>
      <strong>{title}</strong>
      <small>{description}</small>
    </a>
  );
}
