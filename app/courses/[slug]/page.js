import { notFound } from "next/navigation";
import { BackLink } from "@/components/Pills";
import CourseDetailCard from "@/components/CourseDetailCard";
import SidebarPanel from "@/components/SidebarPanel";
import curriculum from "@/data/cefr-curriculum.json";

const SLUG_MAP = {
  "a1-starter-english": "A1",
  "a2-everyday-english": "A2",
  "b1-independent-english": "B1",
  "b2-confident-english": "B2",
  "c1-advanced-english": "C1",
  "c2-mastery-english": "C2",
};

const LABELS = {
  A1: "Beginner",
  A2: "Elementary",
  B1: "Intermediate",
  B2: "Upper-Intermediate",
  C1: "Advanced",
  C2: "Proficiency",
};

const TONES = ["sky", "amber", "mint"];

const TAGS = [
  "Teacher-led lesson",
  "Interactive practice",
  "Game activity",
  "Worksheet",
  "Speaking task",
  "Progress check",
];

export function generateStaticParams() {
  return Object.keys(SLUG_MAP).map(slug => ({ slug }));
}

export default async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const level = SLUG_MAP[slug];
  if (!level) notFound();

  const lvl = curriculum.levels.find(l => l.cefr === level);
  if (!lvl) notFound();

  const totalLessons = lvl.modules.length * 6;
  const totalActivities = lvl.modules.length * 4;

  return (
    <div className="bea-wrap bea-course-slug">
      <BackLink href="/courses">Back to courses</BackLink>

      <div className="bea-page-grid">
        <CourseDetailCard
          levelLabel={`${level} · ${LABELS[level]}`}
          title={`${lvl.label} English (${level})`}
          description={lvl.entry_profile}
          stats={[
            { value: `${lvl.modules.length * 2} weeks`, label: "course duration", tone: TONES[0] },
            { value: `${totalLessons}`, label: "lessons", tone: TONES[1] },
            { value: `${totalActivities}`, label: "activities", tone: TONES[2] },
          ]}
          modules={lvl.modules.map((m, i) => ({
            title: `Module ${i + 1}: ${m.title}`,
            description: m.can_do_outcomes[0] || "",
            tags: TAGS,
          }))}
        />

        <SidebarPanel
          title="Start correctly"
          description="Take the adaptive placement test to confirm this is the right level for you."
          primary={{ label: "Take a placement test", href: "/checkout/placement" }}
          secondary={[
            { label: `View ${level} activities`, href: `/courses/${slug}` },
          ]}
          note={{
            title: "Certificate pathway:",
            body: `${level} diagnostic report → recommended modules → end-of-level achievement certificate.`,
          }}
        />
      </div>
    </div>
  );
}
