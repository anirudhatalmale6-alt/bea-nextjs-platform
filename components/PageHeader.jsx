/**
 * <PageHeader /> — the white panel with skysoft eyebrow + giant heading at
 * the top of every catalogue / reference page (/cefr-levels, /courses, etc).
 */
import React from "react";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="bea-page-header">
      {eyebrow && <span className="bea-badge bea-badge--lg">{eyebrow}</span>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}
