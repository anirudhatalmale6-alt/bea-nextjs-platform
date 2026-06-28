import PageHeader from "@/components/PageHeader";
import LevelStrip from "@/components/LevelTile";

export default function PlacementPage() {
  return (
    <div className="bea-wrap">
      <PageHeader
        eyebrow="Placement Test"
        title="Check your English level"
        description="Our adaptive placement test uses calibrated items to accurately place you on the CEFR A1-C2 scale. It takes about 15 minutes."
      />

      <section className="bea-section">
        <article className="bea-app-card" style={{ maxWidth: 640, margin: "0 auto 48px" }}>
          <h3>What you will get</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 10, marginTop: 16 }}>
            <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: "1.3rem" }}>📊</span>
              <span>Accurate CEFR level placement (A1–C2)</span>
            </li>
            <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: "1.3rem" }}>📝</span>
              <span>Detailed diagnostic report with skill breakdowns</span>
            </li>
            <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: "1.3rem" }}>🧭</span>
              <span>Personalised pathway recommendation</span>
            </li>
            <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ fontSize: "1.3rem" }}>🎮</span>
              <span>Free short trial lesson at your level</span>
            </li>
          </ul>
          <div style={{ marginTop: 28, textAlign: "center" }}>
            <a className="bea-btn bea-btn-orange" href="#" style={{ fontSize: "1.05rem" }}>
              Start Level Test
            </a>
            <p style={{ marginTop: 12, fontSize: ".85rem" }}>
              One-time payment. Results available instantly.
            </p>
          </div>
        </article>

        <div>
          <div className="bea-section-head">
            <div>
              <span className="bea-eyebrow">ALL LEVELS</span>
              <h2>Where will you land?</h2>
            </div>
          </div>
          <LevelStrip />
        </div>
      </section>
    </div>
  );
}
