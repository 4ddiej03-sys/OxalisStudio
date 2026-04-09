// src/pages/HomePage.jsx
import { useState, useEffect, useRef } from "react";

const FEATURED = [
  {
    id: 1, title: "Che AF", subtitle: "AI Recipe App",
    tags: ["App Development", "UI/UX Design", "Branding"],
    desc: "AI-powered recipe generation from fridge ingredients. Built with accessibility at its core — a world-first voice navigation system for blind users.",
    url: "https://che-af.vercel.app", page: null,
    color: "#c4622d", bg: "#fdf5f0", emoji: "🍳", year: "2026",
  },
  {
    id: 2, title: "Mix-R", subtitle: "AI Cocktail App",
    tags: ["App Development", "UI/UX Design", "Branding"],
    desc: "Global drinks discovery app covering 50+ cultures worldwide. Scan your bar shelf and AI generates cocktails, mocktails and traditional drinks instantly.",
    url: "https://mix-r.vercel.app", page: null,
    color: "#2563eb", bg: "#f0f4ff", emoji: "🍹", year: "2026",
  },
  {
    id: 3, title: "Shohei Juku Aikido Canada", subtitle: "Brand Identity",
    tags: ["Branding", "Creative Direction", "Layout Design", "Photography"],
    desc: "Elevating the visual voice of Shohei Juku Aikido Canada — from signature newsletter layouts to dynamic event photography that captures the fluid energy of the dojo.",
    url: null, page: "sjac",
    color: "#729be5", bg: "#d4dff4", emoji: "📰", year: "2014",
  },
  {
    id: 4, title: "Publication", subtitle: "Magazine & Layout Design",
    tags: ["Editorial", "Creative Direction", "Layout Design"],
    desc: "Digital creativity meets graphic discipline. Crafting a collection of enduring, transcendent narratives through signature layout and design.",
    url: null, page: "publication",
    color: "#2d6a4f", bg: "#f0f8f4", emoji: "📚", year: "2009",
  },
  {
    id: 5, title: "J'Adore by Joe", subtitle: "Photography",
    tags: ["Portrait", "Events", "Product", "Commercials"],
    desc: "Bridging the natural world with digital creativity. Clean, minimal, and timeless — searching for the precise angles that unveil the finest details.",
    url: null, page: "jadore",
    color: "#592d6a", bg: "#edd9f5", emoji: "📸", year: "2009",
  },
  {
    id: 6, title: "addie+", subtitle: "Brand Identity",
    tags: ["Branding", "Creative Direction", "Web Design"],
    desc: "A restaurant visit diary. Digital discipline meets culinary artistry — capturing a singular perspective on the dining experience through refined narrative and visual storytelling.",
    url: null, page: "addie",
    color: "#a69f3f", bg: "#fdfde8", emoji: "🍽", year: "2009",
  },
];

// All gallery images from public/ — add your real filenames here
const GALLERY_IMAGES = [
  { src: "/sjac-1.jpg",         label: "SJAC" },
  { src: "/jadore-1.jpg",       label: "J'Adore" },
  { src: "/addie-1.jpg",        label: "addie+" },
  { src: "/publication-1.jpg",  label: "Publication" },
  { src: "/sjac-2.jpg",         label: "SJAC" },
  { src: "/jadore-2.jpg",       label: "J'Adore" },
  { src: "/addie-2.jpg",        label: "addie+" },
  { src: "/publication-2.jpg",  label: "Publication" },
  { src: "/sjac-3.jpg",         label: "SJAC" },
  { src: "/jadore-3.jpg",       label: "J'Adore" },
];

function GlidingGallery({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const speed = 0.5; // px per frame — lower = slower

  useEffect(() => {
    let animId;
    const step = () => {
      if (!paused && trackRef.current) {
        setOffset(prev => {
          const totalWidth = trackRef.current.scrollWidth / 2;
          return prev >= totalWidth ? 0 : prev + speed;
        });
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [paused]);

  // Duplicate images so it loops seamlessly
  const doubled = [...GALLERY_IMAGES, ...GALLERY_IMAGES];

  return (
    <section style={{ padding: "100px 0", background: "#f5f0e8", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px", marginBottom: 48 }}>
        <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 12 }}>A Glimpse</p>
        <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 1 }}>
          Inside the<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Studio</em>
        </h2>
      </div>

      {/* Sliding strip */}
      <div
        style={{ overflow: "hidden", cursor: "grab" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: 12,
            transform: `translateX(-${offset}px)`,
            willChange: "transform",
          }}
        >
          {doubled.map((img, i) => (
            <div
              key={i}
              style={{ position: "relative", flexShrink: 0, width: 280, height: 360, overflow: "hidden", borderRadius: 2 }}
            >
              <img
                src={img.src}
                alt={img.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.6s ease" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
              />
              {/* Label overlay */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.5))",
                padding: "32px 20px 16px",
              }}>
                <p style={{ fontFamily: sans, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "rgba(255,255,255,0.8)", margin: 0 }}>{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pause hint */}
      <div style={{ maxWidth: 1200, margin: "24px auto 0", padding: "0 40px" }}>
        <p style={{ fontFamily: sans, fontSize: 11, color: "#bbb", letterSpacing: 2 }}>Hover to pause · Click a project above to explore</p>
      </div>
    </section>
  );
}

export default function HomePage({ navigate }) {
  const [visible, setVisible] = useState(false);
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  function handleProjectClick(p) {
    if (p.url) {
      window.open(p.url, "_blank");
    } else if (p.page) {
      navigate(p.page);
    }
  }

  return (
    <div style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section style={{ minHeight: "92vh", display: "flex", alignItems: "center", padding: "80px 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: "rgba(45,106,79,0.04)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "-5%", width: 400, height: 400, borderRadius: "50%", background: "rgba(196,98,45,0.03)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div style={{ maxWidth: 900 }}>
            <p style={{ fontFamily: sans, fontSize: 12, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#2d6a4f", marginBottom: 32, opacity: visible ? 1 : 0, transition: "all 0.8s" }}>
              🌿 Creative Studio
            </p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(52px, 8vw, 110px)", fontWeight: 300, lineHeight: 0.95, color: "#1a1a1a", letterSpacing: -2, marginBottom: 40, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.1s" }}>
              We design<br />
              <em style={{ fontStyle: "italic", fontWeight: 700 }}>experiences</em><br />
              that matter.
            </h1>
            <p style={{ fontFamily: sans, fontSize: 18, fontWeight: 300, color: "#666", lineHeight: 1.8, maxWidth: 560, marginBottom: 56, opacity: visible ? 1 : 0, transition: "all 0.8s 0.3s" }}>
              OXALIS Studio is a creative studio specialising in app development, brand identity, advertising, UI/UX design and creative direction.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: visible ? 1 : 0, transition: "all 0.8s 0.5s" }}>
              <button onClick={() => navigate("portfolio")}
                style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", background: "#1a1a1a", color: "#fff", border: "none", padding: "16px 36px", cursor: "pointer" }}>
                View Our Work
              </button>
              <button onClick={() => navigate("contact")}
                style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", background: "transparent", color: "#1a1a1a", border: "1px solid #1a1a1a", padding: "16px 36px", cursor: "pointer" }}>
                Get in Touch
              </button>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", textAlign: "center", opacity: visible ? 0.4 : 0, transition: "all 0.8s 1s" }}>
          <div style={{ fontFamily: sans, fontSize: 10, letterSpacing: 3, textTransform: "uppercase", color: "#888", marginBottom: 8 }}>Scroll</div>
          <div style={{ width: 1, height: 40, background: "#888", margin: "0 auto" }} />
        </div>
      </section>

      {/* Marquee */}
      <div style={{ background: "#1a1a1a", padding: "18px 0", overflow: "hidden", position: "relative" }}>
        <div style={{ display: "flex", gap: 60, whiteSpace: "nowrap", animation: "marquee 20s linear infinite" }}>
          {[...Array(3)].map((_, i) => (
            <span key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 300, color: "rgba(255,255,255,0.7)", letterSpacing: 3, flexShrink: 0 }}>
              App Development &nbsp;·&nbsp; Brand Identity &nbsp;·&nbsp; Creative Direction &nbsp;·&nbsp; Advertising &nbsp;·&nbsp; UI/UX Design &nbsp;·&nbsp; Photography &nbsp;·&nbsp; Food & Drink Content &nbsp;·&nbsp;
            </span>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`}</style>
      </div>

      {/* Featured Work */}
      <section style={{ padding: "120px 40px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72 }}>
            <div>
              <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 12 }}>Selected Work</p>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 1 }}>
                Featured<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Projects</em>
              </h2>
            </div>
            <button onClick={() => navigate("portfolio")}
              style={{ fontFamily: sans, fontSize: 12, letterSpacing: 2, textTransform: "uppercase", background: "none", border: "none", color: "#888", cursor: "pointer", textDecoration: "underline" }}>
              View all work →
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {FEATURED.map((p, i) => (
              <div key={p.id}
                onClick={() => handleProjectClick(p)}
                style={{ display: "flex", alignItems: "center", gap: 40, padding: "40px 0", borderTop: "1px solid rgba(0,0,0,0.06)", cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.paddingLeft = "24px"; }}
                onMouseLeave={e => { e.currentTarget.style.paddingLeft = "0px"; }}>
                <div style={{ fontFamily: serif, fontSize: 13, color: "#bbb", minWidth: 40 }}>0{i + 1}</div>
                <div style={{ width: 64, height: 64, background: p.bg, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>
                  {p.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 6 }}>
                    <h3 style={{ fontFamily: serif, fontSize: 28, fontWeight: 600, color: "#1a1a1a", margin: 0 }}>{p.title}</h3>
                    <span style={{ fontFamily: sans, fontSize: 12, color: "#aaa" }}>{p.subtitle}</span>
                  </div>
                  <p style={{ fontFamily: sans, fontSize: 14, color: "#888", lineHeight: 1.6, margin: 0, maxWidth: 500 }}>{p.desc}</p>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: 220 }}>
                  {p.tags.map((tag, j) => (
                    <span key={j} style={{ fontFamily: sans, fontSize: 11, color: p.color, border: `1px solid ${p.color}`, padding: "4px 10px", opacity: 0.7 }}>{tag}</span>
                  ))}
                </div>
                <div style={{ fontFamily: sans, fontSize: 11, color: "#bbb", letterSpacing: 1, minWidth: 40 }}>{p.year}</div>
                <div style={{ fontSize: 20, color: "#bbb" }}>↗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ↓ GLIDING GALLERY — sits right under Featured Work */}
      <GlidingGallery navigate={navigate} />

      {/* Studio intro */}
      <section style={{ padding: "120px 40px", background: "#1a1a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#2d6a4f", marginBottom: 24 }}>About the Studio</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#f5f0e8", lineHeight: 1.1, marginBottom: 32 }}>
              Where creativity<br />meets <em style={{ fontStyle: "italic", fontWeight: 700 }}>technology.</em>
            </h2>
            <p style={{ fontFamily: sans, fontSize: 15, fontWeight: 300, color: "rgba(245,240,232,0.6)", lineHeight: 1.9, marginBottom: 40 }}>
              OXALIS Studio was founded with a simple belief that beautiful design and powerful technology should be accessible to everyone. From AI-powered apps to brand identities, we create work that is both visually stunning and deeply functional.
            </p>
            <button onClick={() => navigate("about")}
              style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", background: "transparent", color: "#f5f0e8", border: "1px solid rgba(245,240,232,0.3)", padding: "14px 32px", cursor: "pointer" }}>
              Our Story →
            </button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { num: "2",    label: "Apps Launched",  sub: "Che AF & Mix-R" },
              { num: "13",   label: "Languages",       sub: "Global accessibility" },
              { num: "200",  label: "Pioneer Users",   sub: "First wave" },
              { num: "50+",  label: "Cultures",        sub: "Mix-R coverage" },
            ].map((s, i) => (
              <div key={i} style={{ padding: 28, border: "1px solid rgba(245,240,232,0.08)" }}>
                <div style={{ fontFamily: serif, fontSize: 48, fontWeight: 700, color: "#f5f0e8", lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, color: "rgba(245,240,232,0.7)", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontFamily: sans, fontSize: 11, color: "rgba(245,240,232,0.3)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 40px", background: "#fafaf8", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 24 }}>Start a Project</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95, marginBottom: 32 }}>
            Have an idea?<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Let's talk.</em>
          </h2>
          <p style={{ fontFamily: sans, fontSize: 16, color: "#888", lineHeight: 1.7, marginBottom: 48 }}>
            We work with startups, entrepreneurs and brands who want to build something meaningful. Every project starts with a conversation.
          </p>
          <button onClick={() => navigate("contact")}
            style={{ fontFamily: sans, fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", background: "#1a1a1a", color: "#fff", border: "none", padding: "18px 48px", cursor: "pointer" }}>
            Get in Touch
          </button>
        </div>
      </section>

    </div>
  );
}