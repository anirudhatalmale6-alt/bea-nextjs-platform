/**
 * <ModuleBlock /> — a single module inside a CourseDetailCard.
 * White block, thin slate border, 20px radius, title, description,
 * and a row of slate-100 chip tags ("Teacher-led lesson", "Worksheet", …).
 */
import React from "react";

export default function ModuleBlock({ title, description, tags = [] }) {
  return (
    <div className="bea-module-block">
      <h4>{title}</h4>
      <p>{description}</p>
      {tags.length > 0 && (
        <div className="bea-chip-row">
          {tags.map((t, i) => <span key={i} className="bea-chip">{t}</span>)}
        </div>
      )}
    </div>
  );
}
