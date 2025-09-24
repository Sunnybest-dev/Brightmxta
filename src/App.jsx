import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast"; // ✅ install: npm install react-hot-toast
import "./index.css";
// Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PageWrapper from "./Pages/PageWrapper";
import PageLoader from "./Components/PageLoader";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import Schedule from "./Pages/Schedule";
import Contact from "./Pages/Contact";
import BlogPost from "./Pages/BlogPost";
import TestBackend from "./Pages/TestBackend";


export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200); // matches circle animation duration
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>  
    <Helmet>
  <meta
    name="description"
    content="BrightMxta helps you design, create, and grow with creative solutions in design, growth strategy, branding, and community building."
  />
  <meta name="keywords" content="Design, Branding, Growth, Doginaldogz, Web Design, Graphic Design, Twitter, Blog, BrightMxta, Web3, Community" />
  <meta property="og:title" content="BrightMxta | Design. Create. Grow." />
  <meta property="og:description" content="Creative solutions for design, branding, growth, and community building with BrightMxta." />
  <meta property="og:type" content="website" />
  </Helmet>
    <div className="bg-[#121212] text-white min-h-screen flex flex-col">
      {/* Global Toaster (top-right position) */}
      <Toaster position="top-right" reverseOrder={false} />

      <Header />
      <PageLoader loading={loading} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route path="/test-backend" element={<TestBackend />} /> {/* ⬅️ add this */}
            <Route
              path="/Services"
              element={
                <PageWrapper>
                  <Service />
                </PageWrapper>
              }
            />
            <Route
              path="/About"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/blog"
              element={
                <PageWrapper>
                  <Blog />
                </PageWrapper>
              }
            />
            <Route
        path="/BlogPost/:id"
        element={
          <PageWrapper>
            <BlogPost />
          </PageWrapper>
             }
            />
            <Route
              path="/Schedule"
              element={
                <PageWrapper>
                  <Schedule />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
    </>
  );
}
