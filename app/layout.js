import "./design-tokens.css";
import "./components.css";
import "./app-cards.css";
import "./beatrice.css";
import "./globals.css";
import BeatriceWidget from "@/components/BeatriceWidget";

export const metadata = {
  title: "British English Academy — CEFR A1–C2 English Courses",
  description: "Original CEFR-benchmarked British English courses from A1 to C2. Adaptive placement, structured pathways, certified outcomes.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bea-nav">
          <div className="bea-wrap bea-nav-inner">
            <a href="/" className="bea-nav-logo">
              <strong>British English Academy</strong>
            </a>
            <div className="bea-nav-links">
              <a href="/courses">Courses</a>
              <a href="/cefr-levels">CEFR Levels</a>
              <a href="/checkout/placement" className="bea-btn bea-btn-orange" style={{ padding: "10px 18px", fontSize: ".9rem" }}>
                Check your Level
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bea-footer">
          <div className="bea-wrap">
            <p>&copy; {new Date().getFullYear()} British English Academy. All rights reserved.</p>
          </div>
        </footer>
        <BeatriceWidget
          userLevel="B1"
          endpoint="/api/ai-tutor"
          brandName="Beatrice"
        />
      </body>
    </html>
  );
}
