"use client";
/**
 * <FilterPills /> — the white pill row used at the top of /courses.
 * "A1 · A2 · B1 · B2 · C1 · C2 · Speaking · Listening · …"
 *
 * Controlled component — pass `value` and `onChange`.
 */
import React from "react";

const DEFAULT_FILTERS = [
  "A1", "A2", "B1", "B2", "C1", "C2",
  "Speaking", "Listening", "Reading", "Writing", "Grammar", "Vocabulary",
];

export default function FilterPills({ filters = DEFAULT_FILTERS, value, onChange }) {
  return (
    <div className="bea-filter-row" role="group" aria-label="Filter courses">
      {filters.map(f => (
        <button
          key={f}
          type="button"
          className={"bea-filter" + (value === f ? " bea-filter--active" : "")}
          aria-pressed={value === f}
          onClick={() => onChange?.(value === f ? null : f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
