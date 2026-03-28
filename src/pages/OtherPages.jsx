// src/pages/APPPage.jsx
export function APPPage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

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
                  {p.url !== "#" && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: sans, fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: p.color, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
                      View Live ↗
                    </a>
                  )}
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
          <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#2d6a4f", marginBottom: 16 }}>Our on-going and previous</p>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 300, color: "#f5f0e8", lineHeight: 1, marginBottom: 72 }}>
            Projects<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>believe in</em>
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
    </div>
  );
}

// src/pages/SJACPage.jsx
export function SJACPage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ padding: "100px 40px", background: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: sans, fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase", color: "#888", marginBottom: 16 }}>Layout Design & Event Photography</p>
            <h1 style={{ fontFamily: serif, fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, color: "#1a1a1a", lineHeight: 0.95, marginBottom: 40 }}>
              Publication &<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>Creative Photography</em>
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
              { title: "Newsletter", desc: "Newsletter Design produced monthly. Special event photogragrphy", icon: "🥋" },
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
    </div>
  );
}

// src/pages/AddiePage.jsx
export function AddiePage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

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
              A restaurant visit diary. Digital discipline meets culinary artistry.
              Addie+ explores the synergy between presentation, service, and taste, capturing a singular perspective on the dining experience through refined narrative and visual storytelling.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 24 }}>
              This is not sponsored by anyone. Merely a love of food cater by our great cooks from around the world. A taste of the world writen beautifuly for your reading pleasure.
            </p>
            <p style={{ fontFamily: sans, fontSize: 16, color: "#666", lineHeight: 1.9, marginBottom: 48 }}>
              A love of cooking turns into a taste hunter for cultural culinary.
            </p>
            <a href="mailto:s1mply1rr3s1st4bl3@gmail.com"
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
            We visited<br /><em style={{ fontStyle: "italic", fontWeight: 700 }}>so far</em>
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
    </div>
  );
}

// src/pages/JadorePage.jsx
export function JadorePage({ navigate }) {
  const serif = "'Cormorant Garamond', Georgia, serif";
  const sans  = "'DM Sans', system-ui, sans-serif";

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
            <a href="mailto:$ddiej03@gmail.com"
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
                { label: "Places", value: "New Zealand, Indonesia, Canada, Japan, France" },
                { label: "Journey", value: "2009" },
                { label: "Collection", value: "Event, Portrait, Travel" },
                { label: "Catagory", value: "Blog" },
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
              { title: "Portrait", desc: "Newsletter Design produced monthly. Special event photogragrphy", icon: "🥋" },
              { title: "Event", desc: "A branding project for burger joint in Hasting Sunrise, Vancouver.", icon: "🍔" },
              { title: "Travel", desc: "A magazine for Women to empowered Women.", icon: "📚" },
              { title: "Food", desc: "A collection of stories from musicians to inspire other musicians.", icon: "🎷" },
              { title: "Street", desc: "Book cover redesign for The Arabian Nights", icon: "🌍" },
              { title: "Product", desc: "A travel magazine guide of travelling New Zealand.", icon: "🛫" }
              
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
          <p style={{ fontFamily: sans, fontSize: 12, color: "rgba(245,240,232,0.2)" }}>© 2026 OXALIS Studio · New Zealand</p>
          <p style={{ fontFamily: sans, fontSize: 12, color: "rgba(245,240,232,0.2)" }}>oxalis-studio.vercel.app</p>
        </div>
      </div>
    </footer>
  );
}
