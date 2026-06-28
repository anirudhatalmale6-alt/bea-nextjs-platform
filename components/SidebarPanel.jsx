/**
 * <SidebarPanel /> — the "Start correctly" card next to a course detail.
 * Pattern: white info-card, dark "Take a placement test" CTA at top,
 * stacked ghost CTAs, optional skysoft note at the bottom.
 *
 * Example:
 *   <SidebarPanel
 *     title="Start correctly"
 *     description="Candidates should take the adaptive placement test before entering this pathway."
 *     primary={{ label: "Take a placement test", href: "/checkout/placement" }}
 *     secondary={[
 *       { label: "View A1 activities",   href: "/courses/a1-starter-english/activities" },
 *       { label: "Download learner pack", href: "/downloads/a1-pack" },
 *     ]}
 *     note={{ title: "Certificate pathway:", body: "A1 diagnostic report → recommended modules → end-of-level achievement certificate." }}
 *   />
 */
import React from "react";

export default function SidebarPanel({ title, description, primary, secondary = [], note }) {
  return (
    <aside className="bea-sidebar">
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}

      {primary && <a className="bea-btn bea-btn-navy" href={primary.href}>{primary.label}</a>}
      {secondary.map((b, i) => (
        <a key={i} className="bea-btn bea-btn-ghost" href={b.href}>{b.label}</a>
      ))}

      {note && (
        <div className="bea-note">
          {note.title && <strong>{note.title}</strong>}
          {note.body}
        </div>
      )}
    </aside>
  );
}
