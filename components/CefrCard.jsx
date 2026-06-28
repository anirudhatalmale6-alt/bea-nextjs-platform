/**
 * <CefrCard /> — the info-card used on /cefr-levels.
 * Pattern: white card, thin slate border, 32px radius, no shadow,
 * skysoft level badge, big black heading, description, can-do list.
 *
 * Example:
 *   <CefrCard
 *     level="A1"
 *     title="CEFR A1"
 *     description="Basic breakthrough user: can manage simple familiar exchanges with support."
 *     canDo={[
 *       "Introduce themselves and ask basic personal questions.",
 *       "Understand short signs and instructions.",
 *       "Order food, ask for directions, complete forms.",
 *     ]}
 *     href="/courses/a1-starter-english"
 *   />
 */
import React from "react";

export default function CefrCard({ level, title, description, canDo = [], href = "#" }) {
  return (
    <a className="bea-app-card bea-cefr-card" href={href}>
      <span className="bea-badge">{level}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {canDo.length > 0 && (
        <ul className="can-do">
          {canDo.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      )}
    </a>
  );
}
