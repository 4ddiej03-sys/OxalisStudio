import { useState, useRef } from 'react'

//import appPhoto from from '../assets/app-profile.jpg' <- when the photo box is ready, delete this line!
import publicationPhoto from '../assets/publication-profile.jpg'
import sjacPhoto from '../assets/sjac-profile.jpg'
import addiePhoto from '../assets/addie-profile.jpg'
import jadorePhoto from '../assets/jadore-profile.jpg'



// ─── APPPage ─────────────────────────────────────────────────────────────────


// src/pages/APPPage.jsx

export function APPPage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  {/* ↓ THIS IS THE PORTFOLIO SECTION */}
  const PROJECTS = [
    {
      title: "Che AF", subtitle: "AI Recipe App · 2026",
      tags: ["App Development", "UI/UX Design", "Branding", "Accessibility"],
      desc: "A full-stack AI-powered recipe app that generates meals from fridge ingredients. Features include voice navigation for blind users, fridge photo scanning, weekly meal planner, serving size scaler, cloud sync and 13-language support. Built with React, Supabase and Claude AI.",
      url: "https://che-af.vercel.app", emoji: "🍳", color: "#c4622d", bg: "#fdf5f0",
      highlights: ["Voice navigation — world first for recipe apps", "Fridge scan using Claude Vision AI", "13 languages including Bahasa Indonesia & Filipino", "Pioneer membership system with Stripe payments"],
    },
    { 
      title: "Mix-R", subtitle: "AI Cocktail App · 2026",
      tags: ["App Development", "UI/UX Design", "Branding", "Global Design"],
      desc: "An AI cocktail generator covering 50+ cultures worldwide. Scan your bar shelf, discover traditional drinks from Māori kawakawa to Filipino lambanog, and follow step-by-step making mode. Built with React, Supabase and Claude AI.",
      url: "https://mix-r.vercel.app", emoji: "🍹", color: "#2563eb", bg: "#f0f4ff",
      highlights: ["50+ global cultures covered", "Bar shelf photo scanner", "Traditional drinks discovery — Māori, Filipino, Malaysian and more", "Access gate system for independent app monetisation"],
    },
    {
      title: "CheAF & Mix-R Brand Website", subtitle: "Brand Website · 2026",
      tags: ["Web Design", "Creative Direction", "SEO", "Content"],
      desc: "The official website for Che AF and Mix-R — a multi-page editorial site featuring a 6-article SEO blog, full feature breakdowns, pricing pages and contact forms. Built with React and deployed on Vercel.",
      url: "https://che-af-web.vercel.app", emoji: "🌐", color: "#2d6a4f", bg: "#f0f8f4",
      highlights: ["6 SEO blog articles targeting food and cocktail keywords", "Multi-page React site with hash routing", "Full pricing and features documentation", "Mobile responsive across all breakpoints"],
    },
];

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "100px 40px 60px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>APP Work</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95 }}>
            Selected<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Projects</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: "40px 40px 120px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 2 }}>
          {PROJECTS.map((p, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.06)", padding: "60px 0" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
                <div>
                  <div style={{ width: 80, height: 80, background: p.bg, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, marginBottom: 24 }}>{p.emoji}</div>
                  <h2 style={{ fontFamily: serif, fontSize: 40, fontWeight: 600, color: "#1a1a1a", marginBottom: 6 }}>{p.title}</h2>
                  <p style={{ fontFamily: sans, fontSize: 13, color: "#aaa", marginBottom: 20 }}>{p.subtitle}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                    {p.tags.map((tag, j) => (
                      <span key={j} style={{ fontFamily: sans, fontSize: 11, color: p.color, border: `1px solid ${p.color}`, padding: "4px 10px", opacity: 0.8 }}>{tag}</span>
                    ))}
                  </div>
                  {p.url.startsWith('http') ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: p.color, textDecoration: "none" }}>
                      View Live ↗
                    </a>
                    ) : p.url !== "#" ? (
                    <button onClick={() => navigate(p.url)}
                      style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: p.color, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                      View Project ↗
                    </button>
                  ) : null}
                </div>
                <div>
                  <p style={{ fontFamily: sans, fontSize: 15, color: "#666", lineHeight: 1.9, marginBottom: 32 }}>{p.desc}</p>
                  <div>
                    <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 16 }}>Highlights</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {p.highlights.map((h, j) => (
                        <div key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <span style={{ color: p.color, marginTop: 2, flexShrink: 0 }}>—</span>
                          <span style={{ fontFamily: sans, fontSize: 14, color: "#555", lineHeight: 1.5 }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// src/pages/PublicationPage.jsx

export function PublicationPage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

    const GALLERY = [
    'publication-1.jpg',
    'publication-2.jpg',
    'publication-3.jpg',
    'publication-4.jpg',
    'publication-5.jpg',
    'publication-6.jpg',
    'publication-7.jpg',
    'publication-8.jpg',
    'publication-9.jpg',
  ];


  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "100px 40px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>Layout Design</p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95, marginBottom: 40 }}>
              Publication<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Creative</em>
            </h1>
            <div style={{ width: 60, height: 1, background: "#1a1a1a", marginBottom: 40 }} />
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              OXALIS Studio works at the intersection of design, technology and culture, building products that are beautiful, functional and accessible to everyone.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              Our work spans app development, brand identity, advertising, UI/UX design and creative photography. We believe that the best design solves real problems, which is why accessibility is central to everything we build.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 48 }}>
              OXALIS Studio’s latest project was born from a frustration with food waste and a love of cooking. Che AF and Mix-R are the result: two AI-powered apps that help people cook and mix drinks from what they already have.
            </p>
            <a href="mailto:support@che-af.vercel.app"
              style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: 4 }}>
              Get in Touch →
            </a>
          </div>

          <div>
            {/* ↓ THIS IS WHERE THE PHOTO GOES — replaces the 🌿 placeholder */}
            <div style={{ aspectRatio: "3/4", overflow: "hidden", marginBottom: 32 }}>
              <img
                src={publicationPhoto}
                alt="publication-profile.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* ↑ END OF PHOTO REPLACEMENT */}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(0,0,0,0.04)" }}>
              {[
                { label: "Based", value: "New Zealand" },
                { label: "Founded", value: "2009" },
                { label: "Projects", value: "the LOFT, OLYMPIA, Graphic Design, Photography" },
                { label: "Catagory", value: "Layout & Graphic Design" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fafaf8", padding: "20px 24px" }}>
                  <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontFamily: serif, fontSize: 16, color: "#1a1a1a" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 40px", background: "#1a1a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#2d6a4f", marginBottom: 16 }}>On-going and previous</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#f5f0e8", lineHeight: 1, marginBottom: 72 }}>
            Projects<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>we love</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "rgba(255,255,255,0.04)" }}>
            {[
              { title: "SJAC", desc: "Newsletter Design produced monthly. Special event photogragrphy", icon: "🥋" },
              { title: "the LOFT", desc: "A branding project for burger joint in Hasting Sunrise, Vancouver.", icon: "🍔" },
              { title: "OLYMPIA Magazine", desc: "A magazine for Women to empowered Women.", icon: "📚" },
              { title: "Jazz Times", desc: "A collection of stories from musicians to inspire other musicians.", icon: "🎷" },
              { title: "Cover Design", desc: "Book cover redesign for The Arabian Nights", icon: "🌍" },
              { title: "Aotearoa Tours", desc: "A travel magazine guide of travelling New Zealand.", icon: "🛫" }
              
            ].map((v, i) => (
              <div key={i} style={{ padding: "48px 40px", background: "#1a1a1a" }}>
                <span style={{ fontSize: 32, display: "block", marginBottom: 24 }}>{v.icon}</span>
                <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, color: "#f5f0e8", marginBottom: 16 }}>{v.title}</h3>
                <p style={{ fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.5)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ↓ THIS IS THE NEW 3×3 PHOTO GRID SECTION */}
      <section style={{ padding: "100px 40px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>Creative Direction</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 1, marginBottom: 60 }}>
            Behind the<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Projects</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
            {GALLERY.map((src, i) => (
              <div key={i} style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                <img
                  src={src}
                  alt={`Publication photo ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ↑ END OF GRID SECTION */}

    </div>
  );
}

// src/pages/SJACPage.jsx

export function SJACPage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  const GALLERY = [
  '/sjac-1.jpg',
  '/sjac-2.jpg',
  '/sjac-3.jpg',
  '/sjac-4.jpg',
  '/sjac-5.jpg',
  '/sjac-6.jpg',
  '/sjac-7.jpg',
  '/sjac-8.jpg',
  '/sjac-9.jpg',
];

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "100px 40px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>Layout Design & Creative Photography</p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95, marginBottom: 40 }}>
              Shohei Juku<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Aikido Canada</em>
            </h1>
            <div style={{ width: 60, height: 1, background: "#1a1a1a", marginBottom: 40 }} />
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              OXALIS Studio works and collaborate with the Chief of Instructor of Shohei Juku Aikido Canada since 2014.
              We have been delivering the monthly newsletter for readers, especially the connection between Japan and Canada.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              Our work spans newsletters, brand identity, advertisings, UI/UX design and creative photography.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 48 }}>
              Creating shorts videos during pandemic promo to bring harmony of practice of non-contact basic principle.
            </p>
            <a href="mailto:support@oxalis-studio.vercel.app"
              style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: 4 }}>
              Get in Touch →
            </a>
          </div>

          <div>
            {/* ↓ THIS IS WHERE THE PHOTO GOES — replaces the 🌿 placeholder */}
            <div style={{ aspectRatio: "3/4", overflow: "hidden", marginBottom: 32 }}>
              <img
                src={sjacPhoto}
                alt="sjac-profile.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* ↑ END OF PHOTO REPLACEMENT */}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(0,0,0,0.04)" }}>
              {[
                { label: "Based", value: "Vancouver, Canada" },
                { label: "Collaborated", value: "2014" },
                { label: "Projects", value: "Newsletter, Branding, Photography" },
                { label: "Website", value: "www.shoheijuku.ca" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fafaf8", padding: "20px 24px" }}>
                  <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontFamily: serif, fontSize: 16, color: "#1a1a1a" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 40px", background: "#1a1a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#2d6a4f", marginBottom: 16 }}>Our on-going</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#f5f0e8", lineHeight: 1, marginBottom: 72 }}>
            Projects<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>collaborated</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "rgba(255,255,255,0.04)" }}>
            {[
              { title: "Newsletter", desc: "Newsletter Design produced monthly. Special event photography", icon: "🥋" },
              { title: "Photography", desc: "A branding project for burger joint in Hasting Sunrise, Vancouver.", icon: "🍔" },
              { title: "Poster", desc: "A magazine for Women to empowered Women.", icon: "📚" },
              { title: "Promo", desc: "A collection of stories from musicians to inspire other musicians.", icon: "🎷" },
              { title: "Cover Design", desc: "Book cover redesign for The Arabian Nights", icon: "🌍" },
              { title: "Aotearoa Tours", desc: "A travel magazine guide of travelling New Zealand.", icon: "🛫" }

            ].map((v, i) => (
              <div key={i} style={{ padding: "48px 40px", background: "#1a1a1a" }}>
                <span style={{ fontSize: 32, display: "block", marginBottom: 24 }}>{v.icon}</span>
                <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, color: "#f5f0e8", marginBottom: 16 }}>{v.title}</h3>
                <p style={{ fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.5)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ↓ THIS IS THE NEW 3×3 PHOTO GRID SECTION */}
      <section style={{ padding: "100px 40px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>Photography</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 1, marginBottom: 60 }}>
            Behind the<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Practice</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
            {GALLERY.map((src, i) => (
              <div key={i} style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                <img
                  src={src}
                  alt={`SJAC photo ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ↑ END OF GRID SECTION */}

    </div>
  );
}

// src/pages/AddiePage.jsx

export function AddiePage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  const GALLERY = [
    'addie-1.jpg',
    'addie-2.jpg',
    'addie-3.jpg',
    'addie-4.jpg',
    'addie-5.jpg',
    'addie-6.jpg',
    'addie-7.jpg',
    'addie-8.jpg',
    'addie-9.jpg',
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "100px 40px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>A Restaurant Dining Experience</p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95, marginBottom: 40 }}>
              The culinary<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Diary</em>
            </h1>
            <div style={{ width: 60, height: 1, background: "#1a1a1a", marginBottom: 40 }} />
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              Welcome to addie+, where we will take you on a journey of colourful, flavourful plates.
              A journey to a place of flavour wonder that will dance above your tongue and give you an explosion of tastes.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              A restaurant visit diary. Digital discipline meets culinary artistry.
              Addie+ explores the synergy between presentation, service, and taste, capturing a singular perspective on the dining experience through refined narrative and visual storytelling.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              A love of cooking turns into a taste hunter for cultural culinary.
              This is not sponsored by anyone. Merely a love of food cater by our great cooks from around the world. A taste of the world writen beautifuly for your reading pleasure.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              We hope that what we write here will bring you joy in reading and motivate you to get up, rush to these places, and experience the beautifully prepared food at your table.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              Happy reading and bon appetite!</p>
            {/* ✅ CORRECT — button and link are separate, not nested */}
            <button onClick={() => navigate("addie-blog")}
              style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", background: "#1a1a1a", color: "#fff", border: "none", padding: "14px 28px", cursor: "pointer", marginBottom: 24, display: "block" }}>
                  Read the Blog →
            </button>

            <a href="mailto:s1mply1rr3s1st4bl3@gmail.com"
              style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: 4 }}>
                  Get in Touch →
            </a>
          </div>

          <div>
            {/* ↓ THIS IS WHERE THE PHOTO GOES — replaces the 🌿 placeholder */}
            <div style={{ aspectRatio: "3/4", overflow: "hidden", marginBottom: 32 }}>
              <img
                src={addiePhoto}
                alt="addie-profile.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* ↑ END OF PHOTO REPLACEMENT */}

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(0,0,0,0.04)" }}>
              {[
                { label: "Place", value: "Vancouver, Montreal, Japan" },
                { label: "Since", value: "2018" },
                { label: "Cuisine", value: "Japanese, French, Thai, Indian" },
                { label: "Category", value: "Blog" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fafaf8", padding: "20px 24px" }}>
                  <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontFamily: serif, fontSize: 16, color: "#1a1a1a" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 40px", background: "#1a1a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#2d6a4f", marginBottom: 16 }}>Places that</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#f5f0e8", lineHeight: 1, marginBottom: 72 }}>
            Places we visited<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>so far</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "rgba(255,255,255,0.04)" }}>
            {[
              { title: "Kazu", desc: "Montreal, Japanese.", icon: "🍣" },
              { title: "Momofuku", desc: "Toronto, Fusion.", icon: "🍜" },
              { title: "Delara", desc: "Vancouver, Persian.", icon: "🧆" },
              { title: "Origo", desc: "Vancouver, French.", icon: "🥖" },
              { title: "East is East", desc: "Vancouver, Indian", icon: "🍛" },
              { title: "Banana Leaf", desc: "Vancouver, Malaysian.", icon: "🍲" }
              
            ].map((v, i) => (
              <div key={i} style={{ padding: "48px 40px", background: "#1a1a1a" }}>
                <span style={{ fontSize: 32, display: "block", marginBottom: 24 }}>{v.icon}</span>
                <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, color: "#f5f0e8", marginBottom: 16 }}>{v.title}</h3>
                <p style={{ fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.5)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* ↓ THIS IS THE NEW 3×3 PHOTO GRID SECTION */}
      <section style={{ padding: "100px 40px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>addie+</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 1, marginBottom: 60 }}>
            and the simply irresistible<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>dining experiences</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
            {GALLERY.map((src, i) => (
              <div key={i} style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                <img
                  src={src}
                  alt={`Addie photo ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ↑ END OF GRID SECTION */}

    </div>
  );
}

// ─── GridItem (for JadorePage videos) START ───────────────────────────────────────

function GridItem({ item, index }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (playing) { videoRef.current.pause(); }
    else { videoRef.current.play(); }
    setPlaying(!playing);
  };

  const toggleSound = () => {
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  if (item.type === 'image') {
    return (
      <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
        <img src={item.src} alt={`Jadore photo ${index + 1}`}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    );
  }

  return (
    <div style={{ aspectRatio: "1/1", overflow: "hidden", position: "relative" }}>
      <video ref={videoRef} src={item.src} loop muted playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      <div style={{ position: "absolute", bottom: 10, left: 10, display: "flex", gap: 6 }}>
        <button onClick={togglePlay}
          style={{ background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: "#fff", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {playing ? '⏸' : '▶'}
        </button>
        <button onClick={toggleSound}
          style={{ background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: "#fff", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {muted ? '🔇' : '🔊'}
        </button>
      </div>
    </div>
  );
}
// ─── GridItem (for JadorePage videos) END ───────────────────────────────────────

// src/pages/JadorePage.jsx
export function JadorePage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  const GALLERY = [
    { src: '/jadore-1.jpg', type: 'image' },
    { src: '/jadore-2.jpg', type: 'image' },
    { src: '/jadore-3.jpg', type: 'image' },
    { src: '/jadore-4.jpg', type: 'image' },
    { src: '/jadore-5.mp4', type: 'video' },
    { src: '/jadore-6.jpg', type: 'image' },
    { src: '/jadore-7.jpg', type: 'image' },
    { src: '/jadore-8.jpg', type: 'image' },
    { src: '/jadore-9.jpg', type: 'image' },
  ];

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "100px 40px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>Photography</p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95, marginBottom: 40 }}>
              J'Adore<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>by JOE</em>
            </h1>
            <div style={{ width: 60, height: 1, background: "#1a1a1a", marginBottom: 40 }} />
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              OXALIS Studio's own photography service.
              We have been taking beautiful people either for their wedding, birthday, event or portrait of individual or family.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              Capturing a side that you cannot see is our expertise. Just be yourself and we do the rest.
              We let the nature provide as our studio and the beautiful weather as our lighting.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 48 }}>
              We let the nature provide as our studio and the beautiful weather as our lighting.
            </p>
            <a href="mailto:4ddiej03@gmail.com"
              style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: 4 }}>
              Get in Touch →
            </a>
          </div>

          <div>
            <div style={{ aspectRatio: "3/4", overflow: "hidden", marginBottom: 32 }}>
              <img
                src={jadorePhoto}
                alt="jadore-profile.jpg"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(0,0,0,0.04)" }}>
              {[
                { label: "Places", value: "New Zealand, Indonesia, Canada, Japan, France, Tahiti" },
                { label: "Journey", value: "2009" },
                { label: "Collection", value: "Event, Portrait, Travel" },
                { label: "Catagory", value: "Creative Photography" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fafaf8", padding: "20px 24px" }}>
                  <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontFamily: serif, fontSize: 16, color: "#1a1a1a" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 40px", background: "#1a1a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#2d6a4f", marginBottom: 16 }}>Our</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#f5f0e8", lineHeight: 1, marginBottom: 72 }}>
            Projects<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>collaborated</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "rgba(255,255,255,0.04)" }}>
            {[
              { title: "Portrait", desc: "Capturing individuals, families and couples in their most natural, beautiful moments.", icon: "📷" },
              { title: "Event", desc: "Weddings, birthdays and special occasions documented with care and artistry.", icon: "🎉" },
              { title: "Travel", desc: "Landscapes and cultures from New Zealand, Japan, France, Indonesia and beyond.", icon: "✈️" },
              { title: "Food", desc: "A collection of culinary moments from restaurants and home kitchens worldwide.", icon: "🍽️" },
              { title: "Street", desc: "Candid life captured in cities — the poetry of everyday people and places.", icon: "🌆" },
              { title: "Product", desc: "Clean, editorial product photography for brands and independent makers.", icon: "📦" },
            ].map((v, i) => (
              <div key={i} style={{ padding: "48px 40px", background: "#1a1a1a" }}>
                <span style={{ fontSize: 32, display: "block", marginBottom: 24 }}>{v.icon}</span>
                <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, color: "#f5f0e8", marginBottom: 16 }}>{v.title}</h3>
                <p style={{ fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.5)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3x3 Grid Section */}
      <section style={{ padding: "100px 40px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>Photography</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 1, marginBottom: 60 }}>
            Behind the<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Beautiful People</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
            {GALLERY.map((item, i) => (
              <GridItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

    {/* ↑ END OF GRID SECTION */}
 
    {/* J'Adore intro */}
      <section style={{ padding: "120px 40px", background: "#818181" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#f5f0e8", marginBottom: 24 }}>About the Studio</p>
            <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 1.1, marginBottom: 32 }}>
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
              { num: "2", label: "Apps Launched", sub: "Che AF & Mix-R" },
              { num: "13", label: "Languages", sub: "Global accessibility" },
              { num: "200", label: "Pioneer Users", sub: "First wave" },
              { num: "50+", label: "Cultures", sub: "Mix-R coverage" },
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

    </div>
  );
}


// src/pages/AboutPage.jsx
export function AboutPage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "100px 40px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>About</p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95, marginBottom: 40 }}>
              OXALIS STUDIO<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Creative</em>
            </h1>
            <div style={{ width: 60, height: 1, background: "#1a1a1a", marginBottom: 40 }} />
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              OXALIS Studio works at the intersection of design, technology and culture, building products that are beautiful, functional and accessible to everyone.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              Our work spans app development, brand identity, advertising, UI/UX design and creative photography. We believe that the best design solves real problems, which is why accessibility is central to everything we build.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 48 }}>
              OXALIS Studio’s latest project was born from a frustration with food waste and a love of cooking. Che AF and Mix-R are the result: two AI-powered apps that help people cook and mix drinks from what they already have.
            </p>
            <a href="mailto:support@che-af.vercel.app"
              style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#1a1a1a", textDecoration: "none", borderBottom: "1px solid #1a1a1a", paddingBottom: 4 }}>
              Get in Touch →
            </a>
          </div>

          <div>
            {/* Profile placeholder */}
            <div style={{ background: "#f0f0ee", aspectRatio: "3/4", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32, position: "relative", overflow: "hidden" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 80, marginBottom: 16 }}>🌿</div>
                <p style={{ fontFamily: serif, fontSize: 18, color: "#aaa", fontStyle: "italic" }}>Agatha Joe</p>
                <p style={{ fontFamily: sans, fontSize: 12, color: "#bbb", letterSpacing: 2, textTransform: "uppercase", marginTop: 4 }}>Creative Director</p>
              </div>
              <div style={{ position: "absolute", bottom: 20, right: 20, fontFamily: sans, fontSize: 11, color: "#bbb", letterSpacing: 1 }}>Photo coming soon</div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(0,0,0,0.04)" }}>
              {[
                { label: "Based", value: "New Zealand" },
                { label: "Founded", value: "2009" },
                { label: "Speciality", value: "AI Apps, Branding, Photography" },
                { label: "Instagram", value: "@cheaf_cooklikeyouknow @mixr_shakewhatyouvegot" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#fafaf8", padding: "20px 24px" }}>
                  <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>{item.label}</p>
                  <p style={{ fontFamily: serif, fontSize: 16, color: "#1a1a1a" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 40px", background: "#1a1a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#2d6a4f", marginBottom: 16 }}>Our Values</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#f5f0e8", lineHeight: 1, marginBottom: 72 }}>
            What we<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>believe in</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "rgba(255,255,255,0.04)" }}>
            {[
              { title: "Accessibility First", desc: "Every product we build is designed for everyone — including blind and visually impaired users. Accessibility is never an afterthought.", icon: "🎤" },
              { title: "Technology with Soul", desc: "AI is only powerful when it serves human needs. We build technology that feels human — warm, helpful and honest.", icon: "🤖" },
              { title: "Cultural Respect", desc: "Mix-R covers 50+ cultures because every tradition deserves to be celebrated. We design with cultural awareness and respect.", icon: "🌍" },
            ].map((v, i) => (
              <div key={i} style={{ padding: "48px 40px", background: "#1a1a1a" }}>
                <span style={{ fontSize: 32, display: "block", marginBottom: 24 }}>{v.icon}</span>
                <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, color: "#f5f0e8", marginBottom: 16 }}>{v.title}</h3>
                <p style={{ fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.5)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// src/pages/SkillsPage.jsx
export function SkillsPage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  const SKILLS = [
    {
      category: "Creative Direction",
      color: "#1a1a1a",
      items: ["Brand strategy & positioning", "Visual identity systems", "Art direction", "Creative concept development", "Campaign direction", "Storytelling & narrative"],
    },
    {
      category: "App Development",
      color: "#c4622d",
      items: ["React / Vite", "Supabase (auth, database, storage)", "Claude AI / Anthropic API", "Stripe payments integration", "PWA development", "Vercel deployment"],
    },
    {
      category: "UI/UX Design",
      color: "#2563eb",
      items: ["User interface design", "User experience flows", "Accessibility (WCAG)", "Voice navigation design", "Mobile-first design", "Design systems"],
    },
    {
      category: "Branding & Identity",
      color: "#2d6a4f",
      items: ["Logo design", "Typography systems", "Colour palette development", "Brand guidelines", "App icon design", "Landing page design"],
    },
    {
      category: "Photography",
      color: "#805ad5",
      items: ["Food photography", "Drink & cocktail photography", "Product styling", "Social media content", "Brand photography", "Editorial photography"],
    },
    {
      category: "Food & Drink Content",
      color: "#d97706",
      items: ["Recipe development", "Cocktail creation", "Menu writing", "Food styling", "Instagram content creation", "Brand storytelling"],
    },
  ];

  const TOOLS = ["React", "Vite", "Supabase", "Claude AI", "Stripe", "Vercel", "GitHub", "Figma", "Canva", "Instagram", "VS Code", "HTML/CSS", "JavaScript", "Node.js"];

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "100px 40px 60px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>Expertise</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95 }}>
            Skills &<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Experience</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: "40px 40px 80px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 2, background: "rgba(0,0,0,0.04)" }}>
          {SKILLS.map((s, i) => (
            <div key={i} style={{ background: "#fafaf8", padding: "40px 36px", borderTop: `3px solid ${s.color}` }}>
              <h3 style={{ fontFamily: serif, fontSize: 24, fontWeight: 600, color: "#1a1a1a", marginBottom: 24 }}>{s.category}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {s.items.map((item, j) => (
                  <li key={j} style={{ fontFamily: sans, fontSize: 14, color: "#666", padding: "8px 0", borderBottom: "1px solid rgba(0,0,0,0.04)", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: s.color, fontSize: 16 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section style={{ padding: "80px 40px", background: "#1a1a1a" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 40 }}>Tools & Technologies</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {TOOLS.map((tool, i) => (
              <span key={i} style={{ fontFamily: sans, fontSize: 13, color: "rgba(245,240,232,0.7)", border: "1px solid rgba(245,240,232,0.1)", padding: "10px 20px" }}>
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// src/pages/ContactPage.jsx
export function ContactPage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "100px 40px", background: "#fafaf8", minHeight: "80vh" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>Contact</p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95, marginBottom: 40 }}>
              Let's create<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>something.</em>
            </h1>
            <div style={{ width: 60, height: 1, background: "#1a1a1a", marginBottom: 40 }} />
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 48 }}>
              Whether you have a project in mind, want to collaborate, or just want to say hello, we'd love to hear from you. Every great project starts with a conversation.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                { label: "General Enquiries", value: "support@oxalisstudio.vercel.app", href: "mailto:support@oxalisstudio.vercel.app" },
                { label: "Instagram", value: "@cheaf_cooklikeyouknow @mixr_shakewhatyouvegot", href: "https://www.instagram.com/cheaf_cooklikeyouknow https://www.instagram.com/mixr_shakewhatyouvegot" },
                { label: "Che AF App", value: "che-af.vercel.app", href: "https://che-af.vercel.app" },
                { label: "Mix-R App", value: "mix-r.vercel.app", href: "https://mix-r.vercel.app" },
              ].map((c, i) => (
                <div key={i} style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: 20 }}>
                  <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>{c.label}</p>
                  <a href={c.href} target="_blank" rel="noopener noreferrer"
                    style={{ fontFamily: serif, fontSize: 18, color: "#1a1a1a", textDecoration: "none" }}>{c.value}</a>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.06)", padding: 48 }}>
            <h2 style={{ fontFamily: serif, fontSize: 32, fontWeight: 600, color: "#1a1a1a", marginBottom: 32 }}>Send a message</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", display: "block", marginBottom: 8 }}>Name</label>
                <input style={{ width: "100%", padding: "14px 0", border: "none", borderBottom: "1px solid rgba(0,0,0,0.12)", fontFamily: sans, fontSize: 15, outline: "none", background: "transparent", boxSizing: "border-box" }} placeholder="Your name" />
              </div>
              <div>
                <label style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", display: "block", marginBottom: 8 }}>Email</label>
                <input type="email" style={{ width: "100%", padding: "14px 0", border: "none", borderBottom: "1px solid rgba(0,0,0,0.12)", fontFamily: sans, fontSize: 15, outline: "none", background: "transparent", boxSizing: "border-box" }} placeholder="your@email.com" />
              </div>
              <div>
                <label style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", display: "block", marginBottom: 8 }}>Project Type</label>
                <select style={{ width: "100%", padding: "14px 0", border: "none", borderBottom: "1px solid rgba(0,0,0,0.12)", fontFamily: sans, fontSize: 15, outline: "none", background: "transparent", cursor: "pointer" }}>
                  <option>App Development</option>
                  <option>Brand Identity</option>
                  <option>UI/UX Design</option>
                  <option>Advertising</option>
                  <option>Creative Direction</option>
                  <option>Photography</option>
                  <option>Food & Drink Content</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#aaa", display: "block", marginBottom: 8 }}>Message</label>
                <textarea rows={5} style={{ width: "100%", padding: "14px 0", border: "none", borderBottom: "1px solid rgba(0,0,0,0.12)", fontFamily: sans, fontSize: 15, outline: "none", background: "transparent", resize: "none", boxSizing: "border-box" }} placeholder="Tell us about your project…" />
              </div>
              <a href="mailto:support@che-af.vercel.app"
                style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", background: "#1a1a1a", color: "#fff", padding: "18px", textDecoration: "none", textAlign: "center", display: "block", marginTop: 8 }}>
                Send Message →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── BLOG DATA — add new posts here ──────────────────────────────────────────

export const BLOG_POSTS = [
  {
    id: "kazu-montreal",
    title: "Kazu, Montreal",
    subtitle: "A quiet counter, a bowl of ramen, and the best kind of loneliness.",
    date: "March 2024",
    cuisine: "Japanese",
    city: "Montreal",
    coverImage: "/blog-kazu.jpg",       // ← ADD THIS — put photo in public/
    coverColor: "#fdf5f0",              // ← kept as fallback if photo missing
    coverEmoji: "🍣",
    excerpt: "There is something about eating alone at a counter that strips away all pretence. No conversation to fill the silence, no one to share the dish with — just you, the steam rising from the bowl, and the quiet theatre of a kitchen that knows exactly what it is doing. Kazu on Stanley Street is exactly that kind of place.",
    body: `The room is small and the wait is long, but neither of these things matter once you are inside. The counter seats maybe a dozen people, and the kitchen is close enough that you can watch every move — the careful ladling of broth, the precise placement of chashu, the final scatter of spring onion that lands like punctuation at the end of a very good sentence.

I ordered the ramen. There was no real decision to make; everyone orders the ramen. The broth arrives cloudy and serious, carrying the weight of hours of work in every sip. The noodles have the right amount of resistance. The egg, halved and placed just so, bleeds a yolk the colour of late afternoon sun.

Kazu does not try to be anything it is not. There is no elaborate décor, no cocktail list, no dessert menu. It is a restaurant that has decided, with complete confidence, that one thing done extraordinarily well is enough. And it is right.

If you are in Montreal and you have not been — go. Arrive early, expect to wait, and do not bring anyone you need to talk to. This is food that deserves your full attention.`,
  },
  {
    id: "banana-leaf-vancouver",
    title: "Banana Leaf, Vancouver",
    subtitle: "Malaysian comfort food that tastes like someone's grandmother made it.",
    date: "January 2024",
    cuisine: "Malaysian",
    city: "Vancouver",
    coverImage: "/blog-banana-leaf.jpg", // ← ADD THIS
    coverColor: "#f0f8f4",
    coverEmoji: "🍲",
    excerpt: "Vancouver has no shortage of good Asian food, but finding Malaysian cuisine that tastes genuinely Malaysian — not watered down, not westernised, not apologetic about its spice — is rarer than it should be. Banana Leaf on Broadway is one of the places that gets it right.",
    body: `We arrived on a Tuesday evening, which meant we got a table without waiting. The room is warm and unpretentious — wooden furniture, soft lighting, the kind of atmosphere that tells you immediately this is a place about the food, not the experience of being seen eating the food.

The roti canai arrived first, flaky and yielding, with a dhal that had clearly been cooked slowly and with intention. We tore pieces and dragged them through the sauce and said very little to each other, which is always a good sign.

The laksa that followed was the real centrepiece — coconut-rich, lemongrass-bright, with a heat that built gradually rather than announcing itself all at once. The prawns were generous. The noodles were the right texture. The sambal on the side was fiercer than it looked.

What Banana Leaf does well is resist the temptation to explain itself. The menu does not have lengthy descriptions softening the edges of dishes that are supposed to have edges. The food arrives as it should — bold, fragrant, and completely sure of itself.

I will be back before the month is out. I am already thinking about the curry.`,
  },
];

// ─── Addie+ BLOG PAGE ────────────────────────────────────────────────────────────

export function AddieBlogPage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "100px 40px 60px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <button onClick={() => navigate("addie")}
            style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: 40, display: "flex", alignItems: "center", gap: 8 }}>
            ← Back to addie+
          </button>
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>The Culinary Diary</p>
          <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95 }}>
            addie+<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Stories</em>
          </h1>
        </div>
      </section>

      <section style={{ padding: "40px 40px 120px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
          {BLOG_POSTS.map((post) => (
            <div key={post.id}
              onClick={() => navigate(`blog-${post.id}`)}
              style={{ cursor: "pointer", border: "1px solid rgba(0,0,0,0.06)", background: "#fff", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>

              {/* Cover */}
            <div style={{ height: 220, overflow: "hidden", background: post.coverColor }}>
                {post.coverImage ? (
                <img src={post.coverImage} alt={post.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                ) : (
              <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>
                {post.coverEmoji}
              </div>
                )}
            </div>

              {/* Content */}
              <div style={{ padding: "32px 28px" }}>
                <div style={{ display: "flex", gap: 12, marginBottom: 20 }}>
                  <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#888" }}>{post.date}</span>
                  <span style={{ color: "#ddd" }}>·</span>
                  <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#888" }}>{post.city}</span>
                  <span style={{ color: "#ddd" }}>·</span>
                  <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#888" }}>{post.cuisine}</span>
                </div>
                <h2 style={{ fontFamily: serif, fontSize: 28, fontWeight: 600, color: "#1a1a1a", marginBottom: 10, lineHeight: 1.1 }}>{post.title}</h2>
                <p style={{ fontFamily: serif, fontSize: 15, color: "#888", fontStyle: "italic", marginBottom: 20, lineHeight: 1.6 }}>{post.subtitle}</p>
                <p style={{ fontFamily: sans, fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 28 }}>
                  {post.excerpt.slice(0, 160)}…
                </p>
                <span style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#a69f3f", borderBottom: "1px solid #a69f3f", paddingBottom: 2 }}>
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ─── Addie+ BLOG POST PAGE ────────────────────────────────────────────────────────

export function AddieBlogPostPage({ navigate, postId }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  const post = BLOG_POSTS.find(p => p.id === postId);

  if (!post) {
    return (
      <div style={{ paddingTop: 72, padding: "120px 40px", textAlign: "center" }}>
        <p style={{ fontFamily: sans, color: "#888" }}>Post not found.</p>
        <button onClick={() => navigate("addie-blog")}
          style={{ marginTop: 24, fontFamily: sans, fontSize: 12, cursor: "pointer", background: "none", border: "none", textDecoration: "underline", color: "#1a1a1a" }}>
          ← Back to blog
        </button>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 72 }}>

      {/* COVER */}
    <div style={{ height: 400, overflow: "hidden", background: post.coverColor }}>
      {post.coverImage ? (
        <img src={post.coverImage} alt={post.title}
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
       ) : (
        <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 120 }}>
          {post.coverEmoji}
        </div>
      )}
    </div>

      {/* Article */}
      <section style={{ padding: "80px 40px 120px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>

          <button onClick={() => navigate("addie-blog")}
            style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", background: "none", border: "none", cursor: "pointer", padding: 0, marginBottom: 48, display: "flex", alignItems: "center", gap: 8 }}>
            ← All Stories
          </button>

          <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
            <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#aaa" }}>{post.date}</span>
            <span style={{ color: "#ddd" }}>·</span>
            <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#aaa" }}>{post.city}</span>
            <span style={{ color: "#ddd" }}>·</span>
            <span style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase", color: "#aaa" }}>{post.cuisine}</span>
          </div>

          <h1 style={{ fontFamily: serif, fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95, marginBottom: 20 }}>
            {post.title}
          </h1>
          <p style={{ fontFamily: serif, fontSize: 20, color: "#888", fontStyle: "italic", marginBottom: 48, lineHeight: 1.5 }}>
            {post.subtitle}
          </p>

          <div style={{ width: 60, height: 1, background: "#1a1a1a", marginBottom: 48 }} />

          {post.body.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontFamily: serif, fontSize: 18, color: "#444", lineHeight: 1.9, marginBottom: 28 }}>
              {para}
            </p>
          ))}

          <div style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={() => navigate("addie-blog")}
              style={{ fontFamily: sans, fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "#1a1a1a", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
              ← All Stories
            </button>
            <span style={{ fontFamily: serif, fontSize: 14, color: "#aaa", fontStyle: "italic" }}>addie+ · The Culinary Diary</span>
          </div>
        </div>
      </section>
    </div>
  );
}

// src/components/Footer.jsx
export function Footer({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  return (
    <footer style={{ background: "#0d0d0d", padding: "80px 40px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 80 }}>
          <div>
            <div style={{ fontFamily: serif, fontSize: 22, fontWeight: 300, color: "#f5f0e8", letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>
              Oxalis <span style={{ fontWeight: 700 }}>Studio</span>
            </div>
            <div style={{ fontFamily: sans, fontSize: 10, color: "#555", letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>C r e a t i v e</div>
            <p style={{ fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.4)", lineHeight: 1.8, maxWidth: 280 }}>
              A creative studio specialising in app development, brand identity, advertising, photography and creative direction.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#555", marginBottom: 20 }}>Studio</p>
            {["home", "portfolio", "about", "skills", "contact"].map(p => (
              <button key={p} onClick={() => navigate(p)}
                style={{ display: "block", background: "none", border: "none", cursor: "pointer", fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.5)", marginBottom: 12, textTransform: "capitalize", textAlign: "left", padding: 0 }}>
                {p}
              </button>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#555", marginBottom: 20 }}>Products</p>
            {[
              { label: "Che AF", url: "https://che-af.vercel.app" },
              { label: "Mix-R", url: "https://mix-r.vercel.app" },
              { label: "CheAF Web", url: "https://che-af-web.vercel.app" },
            ].map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                style={{ display: "block", fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.5)", marginBottom: 12, textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
          </div>
          <div>
            <p style={{ fontFamily: sans, fontSize: 10, fontWeight: 500, letterSpacing: 3, textTransform: "uppercase", color: "#555", marginBottom: 20 }}>Connect</p>
            <a href="https://www.instagram.com/cheaf_cooklikeyouknow" target="_blank" rel="noopener noreferrer"
              style={{ display: "block", fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.5)", marginBottom: 12, textDecoration: "none" }}>Instagram</a>
            <a href="mailto:support@che-af.vercel.app"
              style={{ display: "block", fontFamily: sans, fontSize: 14, color: "rgba(245,240,232,0.5)", marginBottom: 12, textDecoration: "none" }}>Email</a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(245,240,232,0.06)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: sans, fontSize: 12, color: "rgba(245,240,232,0.2)" }}>© 2026 OXALIS Studio</p>
          <p style={{ fontFamily: sans, fontSize: 12, color: "rgba(245,240,232,0.2)" }}>oxalis-studio.vercel.app</p>
        </div>
      </div>
    </footer>
  );
}
