"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import FilterPills from "@/components/FilterPills";
import CatalogueCard from "@/components/CatalogueCard";
import curriculum from "@/data/cefr-curriculum.json";

const COURSES = curriculum.levels.map(lvl => ({
  level: lvl.cefr,
  title: `${lvl.label} English (${lvl.cefr})`,
  description: lvl.entry_profile,
  count: `${lvl.modules.length * 6} lessons`,
  slug: {
    A1: "a1-starter-english",
    A2: "a2-everyday-english",
    B1: "b1-independent-english",
    B2: "b2-confident-english",
    C1: "c1-advanced-english",
    C2: "c2-mastery-english",
  }[lvl.cefr],
}));

export default function CoursesPage() {
  const [filter, setFilter] = useState(null);

  const filtered = filter
    ? COURSES.filter(c => c.level === filter)
    : COURSES;

  return (
    <div className="bea-wrap">
      <PageHeader
        eyebrow="Course Catalogue"
        title="Browse all courses"
        description="Choose your CEFR level to find the right pathway. Every course includes lessons, activities, worksheets and progress checks."
      />

      <div style={{ marginBottom: 32 }}>
        <FilterPills
          filters={["A1", "A2", "B1", "B2", "C1", "C2"]}
          value={filter}
          onChange={setFilter}
        />
      </div>

      <div className="bea-grid-3" style={{ marginBottom: 64 }}>
        {filtered.map(c => (
          <CatalogueCard
            key={c.level}
            level={c.level}
            count={c.count}
            title={c.title}
            description={c.description}
            href={`/courses/${c.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
