/**
 * <PathwayPills /> — the dashed-gold pill strip ("👀 Preview · 📝 Level test · 🧭 Pathway · 🎮 Short trial · 🚀 Full course").
 * Reuses the exact .bea-pill--gold style from production.
 */
import React from "react";

const DEFAULT = [
  { emoji: "👀", label: "Preview" },
  { emoji: "📝", label: "Level test" },
  { emoji: "🧭", label: "Pathway" },
  { emoji: "🎮", label: "Short trial" },
  { emoji: "🚀", label: "Full course" },
];

export default function PathwayPills({ steps = DEFAULT }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {steps.map((s, i) => (
        <span key={i} className="bea-pill bea-pill--gold">
          <span aria-hidden="true">{s.emoji}</span> {s.label}
        </span>
      ))}
    </div>
  );
}
