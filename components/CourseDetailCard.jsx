/**
 * <CourseDetailCard /> — the big main panel on /courses/{slug}.
 * Pattern: white info-card, sky badge "A1 · Beginner", giant black h1,
 * description, three pastel stat boxes (12 weeks / 48 lessons / 96 activities),
 * Modules heading with stacked <ModuleBlock />s.
 *
 * Example:
 *   <CourseDetailCard
 *     levelLabel="A1 · Beginner"
 *     title="Breakthrough English (A1)"
 *     description="A complete A1 ESL pathway focused on basic personal information, classroom English, simple messages."
 *     stats={[
 *       { value: "12 weeks", label: "course duration", tone: "sky" },
 *       { value: "48",       label: "lessons",         tone: "amber" },
 *       { value: "96",       label: "activities",      tone: "mint" },
 *     ]}
 *     modules={[
 *       {
 *         title: "Module 1: Introductions",
 *         description: "Learners can use A1 language to communicate about introductions with appropriate accuracy and support.",
 *         tags: ["Teacher-led lesson","Interactive practice","Game activity","Worksheet","Speaking task","Progress check"],
 *       },
 *     ]}
 *   />
 */
import React from "react";
import ModuleBlock from "./ModuleBlock";

export default function CourseDetailCard({ levelLabel, title, description, stats = [], modules = [] }) {
  return (
    <article className="bea-app-card">
      <span className="bea-badge">{levelLabel}</span>
      <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginTop: 16 }}>{title}</h2>
      <p style={{ fontSize: "1.05rem", marginTop: 12 }}>{description}</p>

      {stats.length > 0 && (
        <div className="bea-stat-grid">
          {stats.map((s, i) => (
            <div key={i} className={`bea-stat-box bea-stat-box--${s.tone || "sky"}`}>
              <b>{s.value}</b>
              <p>{s.label}</p>
            </div>
          ))}
        </div>
      )}

      {modules.length > 0 && (
        <>
          <h3 style={{ fontSize: "1.5rem", marginTop: 32 }}>Modules</h3>
          <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
            {modules.map((m, i) => <ModuleBlock key={i} {...m} />)}
          </div>
        </>
      )}
    </article>
  );
}
