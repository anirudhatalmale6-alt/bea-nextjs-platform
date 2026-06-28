import LevelStrip from "@/components/LevelTile";
import LibraryTile from "@/components/LibraryTile";
import CourseCard from "@/components/CourseCard";
import PathwayPills from "@/components/PathwayPills";
import PathwayDemoCard from "@/components/PathwayDemoCard";
import TrialCard from "@/components/TrialCard";
import curriculum from "@/data/cefr-curriculum.json";

const COURSE_DATA = [
  {
    level: "A1", emoji: "🌞", pathwayLabel: "Starter pathway",
    title: "A1 Breakthrough English",
    description: "Simple greetings, personal information, classroom language and everyday needs.",
    href: "/courses/a1-starter-english",
  },
  {
    level: "A2", emoji: "🛒", pathwayLabel: "Everyday pathway",
    title: "A2 Everyday English",
    description: "Shopping, directions, daily routines, simple past events and polite requests.",
    href: "/courses/a2-everyday-english",
  },
  {
    level: "B1", emoji: "💬", pathwayLabel: "Independent pathway",
    title: "B1 Independent English",
    description: "Opinions, stories, work, study, travel and problem-solving.",
    href: "/courses/b1-independent-english",
  },
  {
    level: "B2", emoji: "🚀", pathwayLabel: "Confident pathway",
    title: "B2 Confident English",
    description: "Complex arguments, nuanced discussion, professional writing and academic skills.",
    href: "/courses/b2-confident-english",
  },
  {
    level: "C1", emoji: "🎓", pathwayLabel: "Advanced pathway",
    title: "C1 Advanced English",
    description: "Hedging, register control, academic synthesis and workplace diplomacy.",
    href: "/courses/c1-advanced-english",
  },
  {
    level: "C2", emoji: "🏆", pathwayLabel: "Mastery pathway",
    title: "C2 Mastery English",
    description: "Native-level idiom, critical synthesis, persuasive nuance and cultural fluency.",
    href: "/courses/c2-mastery-english",
  },
];

function getModulesForLevel(level) {
  const lvl = curriculum.levels.find(l => l.cefr === level);
  if (!lvl) return [];
  return lvl.modules.slice(0, 3).map(m => ({
    ico: "📘",
    title: m.title,
    desc: m.grammar_focus ? `Grammar: ${m.grammar_focus}` : `${m.duration_hours}h of learning`,
  }));
}

export default function Home() {
  return (
    <>
      <section className="bea-hero">
        <div className="bea-wrap">
          <h1>Learn British English the right way</h1>
          <p>
            Original CEFR-benchmarked courses from A1 to C2.
            Adaptive placement, structured pathways, certified outcomes.
          </p>
          <div className="bea-hero-actions">
            <a className="bea-btn bea-btn-orange" href="/checkout/placement">
              Check your English Level
            </a>
            <a className="bea-btn bea-btn-ghost" href="/courses">
              Browse Courses
            </a>
          </div>
          <div className="bea-hero-visual">
            <PathwayDemoCard lessons={216} modules={36} levels={6} />
          </div>
        </div>
      </section>

      <section className="bea-section">
        <div className="bea-wrap">
          <div className="bea-section-head">
            <div>
              <span className="bea-eyebrow">YOUR PATHWAY</span>
              <h2>How it works</h2>
            </div>
          </div>
          <PathwayPills />
        </div>
      </section>

      <section className="bea-section">
        <div className="bea-wrap">
          <div className="bea-section-head">
            <div>
              <span className="bea-eyebrow">CHOOSE YOUR LEVEL</span>
              <h2>CEFR A1 to C2</h2>
            </div>
            <a className="bea-btn bea-btn-ghost" href="/cefr-levels">View all levels</a>
          </div>
          <LevelStrip />
        </div>
      </section>

      <section className="bea-section" style={{ background: "var(--bea-skysoft)", padding: "64px 0" }}>
        <div className="bea-wrap">
          <div className="bea-section-head">
            <div>
              <span className="bea-eyebrow">EXPLORE THE LIBRARY</span>
              <h2>Resources for every skill</h2>
            </div>
          </div>
          <div className="bea-grid-6">
            <LibraryTile variant="games"  emoji="🎮" title="English Games"      description="Sentence builders, matching and word order" href="/courses?type=games" />
            <LibraryTile variant="sheets" emoji="📝" title="Worksheets"         description="Printable practice for every level"        href="/courses?type=worksheets" />
            <LibraryTile variant="speak"  emoji="🎤" title="Speaking Tasks"     description="Guided conversation and fluency drills"    href="/courses?type=speaking" />
            <LibraryTile variant="write"  emoji="✍️"  title="Writing Practice"   description="Structured writing from sentence to essay" href="/courses?type=writing" />
            <LibraryTile variant="teach"  emoji="👩‍🏫" title="Teacher Resources" description="Lesson plans, feedback codes and support"  href="/courses?type=teacher" />
            <LibraryTile variant="test"   emoji="📊" title="Level Tests"        description="Adaptive placement and progress checks"    href="/checkout/placement" />
          </div>
        </div>
      </section>

      <section className="bea-section">
        <div className="bea-wrap">
          <div className="bea-section-head">
            <div>
              <span className="bea-eyebrow">COURSE CATALOGUE</span>
              <h2>Six complete pathways</h2>
            </div>
            <a className="bea-btn bea-btn-ghost" href="/courses">View all courses</a>
          </div>
          <div className="bea-grid-3">
            {COURSE_DATA.map(c => (
              <CourseCard
                key={c.level}
                level={c.level}
                emoji={c.emoji}
                pathwayLabel={c.pathwayLabel}
                title={c.title}
                description={c.description}
                modules={getModulesForLevel(c.level)}
                href={c.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bea-section">
        <div className="bea-wrap" style={{ display: "flex", justifyContent: "center" }}>
          <TrialCard
            level="B1"
            title="Give an opinion"
            minutes={9}
            goal="Give a clear opinion and support it with one reason."
            unlockHref="/checkout/placement"
            fullCourseHref="/courses/b1-independent-english"
          />
        </div>
      </section>
    </>
  );
}
