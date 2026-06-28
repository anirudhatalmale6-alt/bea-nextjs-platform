/**
 * <LevelTile /> — the CEFR level tile (A1–C2). Matches the live "yellow A1 with sun"
 * pattern exactly: saturated pastel fill, 3D emoji at top, BIG level letter, subtitle.
 *
 * Includes <LevelStrip /> as a ready-made 6-card row.
 */
import React from "react";

export function LevelTile({ level, emoji, label, href }) {
  return (
    <a className={`bea-tile bea-tile--${level}`} href={href}>
      <span className="emoji" aria-hidden="true">{emoji}</span>
      <span className="level-letter">{level}</span>
      <small>{label}</small>
    </a>
  );
}

const DEFAULT_LEVELS = [
  { level: "A1", emoji: "🌞", label: "Starter learners",     href: "/courses/a1-starter-english" },
  { level: "A2", emoji: "🛒", label: "Everyday learners",    href: "/courses/a2-everyday-english" },
  { level: "B1", emoji: "💬", label: "Independent learners", href: "/courses/b1-independent-english" },
  { level: "B2", emoji: "🚀", label: "Confident learners",   href: "/courses/b2-confident-english" },
  { level: "C1", emoji: "🎓", label: "Advanced learners",    href: "/courses/c1-advanced-english" },
  { level: "C2", emoji: "🏆", label: "Mastery learners",     href: "/courses/c2-mastery-english" },
];

export default function LevelStrip({ levels = DEFAULT_LEVELS }) {
  return (
    <div className="bea-grid-6">
      {levels.map(l => (
        <LevelTile key={l.level} {...l} />
      ))}
    </div>
  );
}
