// src/components/Nav.jsx
import { useState, useEffect } from "react";

const LINKS = [
  { label: "App", page: "app" },
  { label: "Publication", page: "publication"},
  { label: "SJAC", page: "sjac"},
  { label: "J'Adore", page: "jadore"},
  { labe:  "ADDIE+", page: "addie"},
  { label: "About", page: "about" },
  { label: "Skills", page: "skills" },
  { label: "Contact", page: "contact" },
  
];

export default function Nav({ page, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { overflow-x: hidden; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn  { display: block !important; }
        }
      `}</style>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 40px",
        background: scrolled ? "rgba(250,250,248,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        transition: "all 0.4s",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => navigate("home")} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
            <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: "#1a1a1a", letterSpacing: 3, textTransform: "uppercase" }}>
              Oxalis <span style={{ fontWeight: 700 }}>Studio</span>
            </div>
            <div style={{ fontFamily: sans, fontSize: 10, color: "#a0a0a0", letterSpacing: 3, textTransform: "uppercase", marginTop: 2 }}>
              C r e a t i v e
            </div>
          </button>

          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 40 }}>
            {LINKS.map(l => (
              <button key={l.page} onClick={() => navigate(l.page)}
                style={{ background: "none", border: "none", cursor: "pointer", fontFamily: sans, fontSize: 13, fontWeight: 400, letterSpacing: 2, textTransform: "uppercase", color: page === l.page ? "#1a1a1a" : "#888", borderBottom: page === l.page ? "1px solid #1a1a1a" : "1px solid transparent", paddingBottom: 2, transition: "all 0.2s" }}>
                {l.label}
              </button>
            ))}
            <button onClick={() => navigate("contact")}
              style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", background: "#1a1a1a", color: "#fff", border: "none", padding: "12px 28px", cursor: "pointer", transition: "opacity 0.2s" }}
              onMouseEnter={e => e.target.style.opacity = 0.8}
              onMouseLeave={e => e.target.style.opacity = 1}>
              Hire Us
            </button>
          </div>

          <button className="mobile-btn" onClick={() => setMenuOpen(!menuOpen)}
            style={{ display: "none", background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#1a1a1a" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, background: "#fafaf8", zIndex: 99, padding: "100px 40px 40px", display: "flex", flexDirection: "column", gap: 8 }}>
          {LINKS.map(l => (
            <button key={l.page} onClick={() => { navigate(l.page); setMenuOpen(false); }}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: serif, fontSize: 40, fontWeight: 300, color: "#1a1a1a", textAlign: "left", padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.06)", letterSpacing: 2 }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => { navigate("contact"); setMenuOpen(false); }}
            style={{ marginTop: 24, padding: "16px", background: "#1a1a1a", color: "#fff", fontFamily: sans, fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: "uppercase", border: "none", cursor: "pointer" }}>
            Hire Us
          </button>
        </div>
      )}
    </>
  );
}
