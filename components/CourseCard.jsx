/**
 * <CourseCard /> — the big course preview card on the homepage.
 * Matches the live design exactly: pastel header band keyed to the CEFR level,
 * level pill + pathway pill, module mini-rows with light-icon boxes,
 * 6/36/36 stat-pill row, navy "View Course Preview" CTA.
 *
 * Example
 *   <CourseCard
 *     level="B1"
 *     emoji="💬"
 *     pathwayLabel="Intermediate pathway"
 *     title="B1 Independent English"
 *     description="Opinions, stories, work, study, travel and problem-solving."
 *     modules={[
 *       { ico: "💡", title: "Give an opinion with a reason", desc: "Explain what you think and why." },
 *       { ico: "🔀", title: "Opinion sentence builder",       desc: "Build connected answers with because and however." },
 *       { ico: "📄", title: "Speaking confidence worksheet",  desc: "Guided frames for discussion and interviews." },
 *     ]}
 *     stats={[{label:"6 modules"},{label:"36 lessons"},{label:"36 worksheets"}]}
 *     href="/courses/b1-independent-english"
 *   />
 */
import React from "react";

export default function CourseCard({
  level,
  emoji,
  pathwayLabel,
  title,
  description,
  modules = [],
  stats = [{label:"6 modules"},{label:"36 lessons"},{label:"36 worksheets"}],
  ctaLabel = "View Course Preview",
  href = "#",
}) {
  return (
    <article className={`bea-course bea-course--${level}`}>
      <header className="bea-course-head">
        <span className="emoji" aria-hidden="true">{emoji}</span>
        <div className="meta">
          <span className="bea-pill">{level}</span>
          <span className="bea-pill">{pathwayLabel}</span>
        </div>
      </header>

      <div className="bea-course-body">
        <h3>{title}</h3>
        <p>{description}</p>

        {modules.length > 0 && (
          <ul className="bea-mod-list" aria-label="Module previews">
            {modules.map((m, i) => (
              <li key={i} className="bea-mod">
                <span className="ico" aria-hidden="true">{m.ico}</span>
                <div>
                  <strong>{m.title}</strong>
                  <small>{m.desc}</small>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="bea-stat-row">
          {stats.map((s, i) => <span key={i} className="bea-pill">{s.label}</span>)}
        </div>

        <a className="bea-course-cta" href={href}>{ctaLabel}</a>
      </div>
    </article>
  );
}
