// src/App.jsx
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import { Footer } from "./pages/OtherPages";
import { AboutPage, APPPage, PublicationPage, SJACPage, AddiePage, JadorePage, SkillsPage, ContactPage, AddieBlogPage, AddieBlogPostPage } from "./pages/OtherPages";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    function handleHash() {
      const hash = window.location.hash.replace("#", "") || "home";
      setPage(hash);
      window.scrollTo(0, 0);
    }
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  function navigate(p) {
    window.location.hash = p;
  }

  const PAGES = {
    home:       <HomePage navigate={navigate} />,
    about:      <AboutPage navigate={navigate} />,
    app:        <APPPage navigate={navigate} />,
    publication:<PublicationPage navigate={navigate} />,
    sjac:       <SJACPage navigate={navigate} />,
    addie:      <AddiePage navigate={navigate} />,
    "addie-blog": <AddieBlogPage navigate={navigate} />,
    // Blog posts — one entry per post id:
      "blog-kazu-montreal":       <AddieBlogPostPage navigate={navigate} postId="kazu-montreal" />,
      "blog-banana-leaf-vancouver": <AddieBlogPostPage navigate={navigate} postId="banana-leaf-vancouver" />,   
    jadore:     <JadorePage navigate={navigate} />,
    skills:     <SkillsPage navigate={navigate} />,
    contact:    <ContactPage navigate={navigate} />,
  };

  return (
    <div style={{ fontFamily: "system-ui", background: "#fafaf8", minHeight: "100vh", color: "#1a1a1a" }}>
      <Nav page={page} navigate={navigate} />
      <main>{PAGES[page] || <HomePage navigate={navigate} />}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
