import React from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReddit,  FaQuora } from "react-icons/fa";
import { SiX } from "react-icons/si"; 

const heroImages = ["/brightmxta.jpg", "/brightmxta.jpg", "/brightmxta.jpg"];

const FaMedium = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1043.63 592.71" className="w-6 h-6 fill-white hover:fill-[#38F9DB] transition ">
    <path d="M588.67 296.35c0 163.73-131.07 296.36-294.33 296.36S0 460.08 0 296.35 131.07 0 294.34 0s294.33 132.62 294.33 296.35M911.11 296.35c0 154.58-65.54 279.91-146.36 279.91-80.81 0-146.35-125.33-146.35-279.91s65.54-279.91 146.35-279.91c80.82 0 146.36 125.33 146.36 279.91M1043.63 296.35c0 139.57-23.43 252.79-52.33 252.79-28.91 0-52.34-113.22-52.34-252.79s23.43-252.79 52.34-252.79c28.9 0 52.33 113.22 52.33 252.79"/>
  </svg>
);
const testimonials = [
  {
    img: "/design.jpg",
    text: "Optimized illustarator Banner Design",
    author: "— Creator",
  },
  {
    img: "/design2.jpg",
    text: "Professional, reliable, and highly effective in building engagement.",
    author: "— Project Lead",
  },
  {
    img: "/web.png",
    text: "Web Design for Portifilo and Projects",
    author: "— Startup Founder",
  },
  {
    img: "/sam-banner.png",
    text: "Customised Banner.",
    author: "— Community Lead",
  },
  {
    img: "/test.jpg",
    text: "Testimony of Job Well Done",
    author: "— Brand Owner",
  },
];

export default function Home() {
  const [currentHero, setCurrentHero] = React.useState(0);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Helmet>
  <title>Home | BrightMxta</title>
  <meta
    name="description"
    content="Welcome to BrightMxta — Design. Create. Grow. I help brands and creators scale with Web3 design, content, and strategy."
  />
</Helmet>

    <div className="bg-[#121212] text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentHero}
            src={heroImages[currentHero]}
            alt="Hero Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>

        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#121212] z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-4 sm:px-6 md:px-8 z-20 max-w-4xl"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 text-center leading-snug"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span
              className="text-[#38F9DB] block text-lg md:text-3xl sm:text-2xl"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              Design.Create.Grow
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-300 mb-8 mt-6 text-lg sm:text-base md:text-lg lg:text-xl"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Whether it’s design, content, or brand management <br className="hidden sm:block" />
            I help you grow in Web3 with clarity, strategy, and results.
          </motion.p>
          <Link
            to="/contact"
            className="px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold bg-[#38F9DB] text-black hover:scale-105 transform transition shadow-lg shadow-[#38F9DB]/50"
          >
            👉 Work With Me
          </Link>
        </motion.div>

        <motion.div
          className="fixed top-1/3 right-3 sm:right-6 flex flex-col space-y-4 sm:space-y-6 z-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="https://x.com/Brightmxta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-xl sm:text-2xl"
          >
            <SiX />
          </a>
          <a
            href="http://reddit.com/u/brightmxta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-xl sm:text-2xl"
          >
            <FaReddit />
          </a>
          <a
            href="http://medium.com/@brightmxta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-xl sm:text-2xl"
          >
            <FaMedium />
          </a>
          <a
            href="https://www.quora.com/profile/Bright-1678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-xl sm:text-2xl"
          >
            <FaQuora />
          </a>
        </motion.div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="relative bg-[#121212] py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center pb-10">
        <h2
          className="text-lg sm:text-xl md:text-2xl font-bold text-[#38F9DB] mb-10 sm:mb-12 text-center"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          Testimonials
        </h2>

        <div className="relative w-full max-w-3xl sm:max-w-4xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <motion.img
                src={testimonials[currentTestimonial].img}
                alt="Testimonial"
                className="w-auto max-h-64 sm:max-h-72 md:max-h-96 object-cover shadow-[#38F9DB] rounded-2xl shadow-sm"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-300 italic max-w-2xl"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                “{testimonials[currentTestimonial].text}”
              </motion.p>
              <span className="text-[#38F9DB] font-semibold text-sm sm:text-base">
                {testimonials[currentTestimonial].author}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
    </>
  );
}
