/**
 * <TrialCard /> — the green "Short trial" appetiser card (see the live homepage,
 * "After the BEA Level Test"). Mint fill, level pill at top, headline,
 * bullet meta, and TWO buttons stacked: Unlock + Start Full Course.
 *
 * It's intentionally non-generic — different shape from the course cards —
 * so it reads as "this is the one you click after the Level Test", not a course tile.
 */
import React from "react";

export default function TrialCard({
  level = "B1",
  title = "Give an opinion",
  minutes = 9,
  goal = "Give a clear opinion and support it with one reason.",
  unlockHref = "#",
  fullCourseHref = "#",
}) {
  return (
    <article
      className="bea-card"
      style={{
        background: "var(--bea-B1)",
        borderRadius: "var(--bea-r-card-lg)",
        padding: 28,
        maxWidth: 460,
      }}
    >
      <span className="bea-pill" style={{ background: "var(--bea-paper)" }}>
        {level} trial
      </span>

      <h3 style={{ fontSize: "1.6rem", margin: "16px 0 14px", fontWeight: 400, lineHeight: 1.1 }}>
        Short trial: {title}
      </h3>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px", display: "grid", gap: 8, fontSize: ".95rem", color: "var(--bea-text)" }}>
        <li>⏱️ {minutes} minutes</li>
        <li>🎯 {goal}</li>
        <li>🔒 Unlocks only after the completed Level Test</li>
      </ul>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a className="bea-btn bea-btn-navy" href={unlockHref}>Unlock Short Trial Lesson</a>
        <a className="bea-btn bea-btn-ghost" href={fullCourseHref}>Start Full Course</a>
      </div>
    </article>
  );
}
