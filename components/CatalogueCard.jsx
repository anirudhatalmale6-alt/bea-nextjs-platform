/**
 * <CatalogueCard /> — the marketplace card on /courses.
 * Same info-card chassis (white, slate border, 32px radius) but with
 * badge + lesson-count on the top row, big title, description.
 *
 * Example:
 *   <CatalogueCard
 *     level="A1"
 *     count="48 lessons"
 *     title="Breakthrough English (A1)"
 *     description="A complete A1 ESL pathway focused on basic personal information."
 *     href="/courses/a1-starter-english"
 *   />
 */
import React from "react";

export default function CatalogueCard({ level, count, title, description, href = "#" }) {
  return (
    <a className="bea-catalogue-card" href={href}>
      <div className="head">
        <span className="bea-badge">{level}</span>
        {count && <span className="count">{count}</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}
