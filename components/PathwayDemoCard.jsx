/**
 * <PathwayDemoCard /> — the BLUE "A1-C2" demo card from the hero. It's a
 * non-generic sticker: rounded white panel with a sky-blue inner pane, a
 * yellow rounded "A1-C2" sticker bubble in one corner, and a green "216
 * lessons" badge in another. Use it ONCE per page (in the hero) — it's
 * the brand mark, not a repeatable card.
 *
 * Tip: use this as a hero centrepiece rather than a stock illustration.
 */
import React from "react";

export default function PathwayDemoCard({
  lessons = 216,
  modules = 36,
  levels = 6,
}) {
  return (
    <div
      style={{
        position: "relative",
        background: "var(--bea-paper)",
        border: "var(--bea-border-card)",
        borderRadius: 42,
        padding: 28,
        boxShadow: "var(--bea-shadow-xl)",
        overflow: "hidden",
      }}
    >
      {/* yellow corner sticker */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: -40, right: -40,
          width: 140, height: 140, borderRadius: "50%",
          background: "var(--bea-A1)",
          border: "var(--bea-border-card)",
          boxShadow: "var(--bea-shadow-tile)",
        }}
      />

      {/* inner sky pane */}
      <div
        style={{
          position: "relative",
          background: "#bfe6ff",
          border: "var(--bea-border-card)",
          borderRadius: 30,
          padding: 28,
          minHeight: 280,
        }}
      >
        {/* A1-C2 sticker */}
        <div
          style={{
            background: "var(--bea-A1)",
            border: "var(--bea-border-card)",
            borderRadius: 24,
            boxShadow: "var(--bea-shadow-tile)",
            padding: "18px 22px",
            display: "inline-flex",
            fontFamily: "var(--bea-font)",
            fontWeight: 900,
            fontSize: "1.6rem",
            color: "var(--bea-text)",
          }}
        >
          A1–C2
        </div>

        {/* white inner — GB pill */}
        <div
          style={{
            marginTop: 22,
            background: "var(--bea-paper)",
            border: "var(--bea-border-card)",
            borderRadius: 24,
            padding: 22,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              background: "var(--bea-mint)",
              borderRadius: 999,
              padding: "10px 16px",
              fontWeight: 900,
              color: "var(--bea-text)",
              border: "2px solid var(--bea-stroke)",
            }}
          >
            🇬🇧 GB
          </span>
          <strong style={{ fontSize: ".95rem", color: "var(--bea-text)" }}>
            British English
          </strong>
        </div>

        {/* mint corner badge */}
        <div
          style={{
            position: "absolute", bottom: 16, right: 16,
            background: "var(--bea-B1)",
            border: "var(--bea-border-card)",
            borderRadius: 18,
            padding: "10px 14px",
            textAlign: "center",
            boxShadow: "var(--bea-shadow-tile)",
            fontFamily: "var(--bea-font)",
          }}
        >
          <div style={{ fontWeight: 900, fontSize: "1.3rem", color: "var(--bea-text)", lineHeight: 1 }}>
            {lessons}
          </div>
          <small style={{ color: "var(--bea-text)" }}>lessons</small>
        </div>
      </div>

      {/* tiny stat strip below */}
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 18 }}>
        <span className="bea-pill"><strong>{lessons}</strong>&nbsp;lessons</span>
        <span className="bea-pill"><strong>{modules}</strong>&nbsp;modules</span>
        <span className="bea-pill"><strong>{levels}</strong>&nbsp;levels</span>
      </div>
    </div>
  );
}
