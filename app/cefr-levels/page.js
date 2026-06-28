import PageHeader from "@/components/PageHeader";
import CefrCard from "@/components/CefrCard";
import canDoMap from "@/data/can-do-map.json";
import curriculum from "@/data/cefr-curriculum.json";

const SLUGS = {
  A1: "a1-starter-english",
  A2: "a2-everyday-english",
  B1: "b1-independent-english",
  B2: "b2-confident-english",
  C1: "c1-advanced-english",
  C2: "c2-mastery-english",
};

export default function CefrLevelsPage() {
  const levels = curriculum.levels.map(lvl => {
    const descriptors = canDoMap
      .filter(d => d.cefr === lvl.cefr)
      .map(d => d.descriptor);

    return {
      level: lvl.cefr,
      title: `CEFR ${lvl.cefr} — ${lvl.label}`,
      description: lvl.entry_profile,
      canDo: descriptors.slice(0, 5),
      href: `/courses/${SLUGS[lvl.cefr]}`,
    };
  });

  return (
    <div className="bea-wrap">
      <PageHeader
        eyebrow="CEFR Framework"
        title="Understand the levels"
        description="The Common European Framework of Reference for Languages (CEFR) defines six levels from A1 (beginner) to C2 (mastery). Each BEA course maps directly to one CEFR level."
      />

      <div className="bea-grid-3" style={{ marginBottom: 64 }}>
        {levels.map(lvl => (
          <CefrCard
            key={lvl.level}
            level={lvl.level}
            title={lvl.title}
            description={lvl.description}
            canDo={lvl.canDo}
            href={lvl.href}
          />
        ))}
      </div>
    </div>
  );
}
