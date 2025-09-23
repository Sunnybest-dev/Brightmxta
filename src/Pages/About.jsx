import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FaReddit, FaQuora } from "react-icons/fa";
import { SiX } from "react-icons/si"; // New Twitter (X) logo

export default function About() {
  const FaMedium = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1043.63 592.71"
      className="w-6 h-6 fill-white hover:fill-[#38F9DB] transition"
    >
      <path d="M588.67 296.35c0 163.73-131.07 296.36-294.33 296.36S0 460.08 0 296.35 131.07 0 294.34 0s294.33 132.62 294.33 296.35M911.11 296.35c0 154.58-65.54 279.91-146.36 279.91-80.81 0-146.35-125.33-146.35-279.91s65.54-279.91 146.35-279.91c80.82 0 146.36 125.33 146.36 279.91M1043.63 296.35c0 139.57-23.43 252.79-52.33 252.79-28.91 0-52.34-113.22-52.34-252.79s23.43-252.79 52.34-252.79c28.9 0 52.33 113.22 52.33 252.79" />
    </svg>
  );

  return (
    <><Helmet>
  <title>About | BrightMxta</title>
  <meta
    name="description"
    content="Learn about BrightMxta — my journey as a designer, content creator, and brand strategist helping businesses grow in Web3."
  />
</Helmet>
    <section className="bg-[#121212] text-white min-h-screen flex items-center justify-center py-5 overflow-hidden px-6">
      {/* Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/brightmxta.jpg" // replace with your image
            alt="Brightmxta"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>

        {/* Right Side: Text */}
        <motion.div
          className="text-right"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1
            className="text-lg md:text-5xl text-center font-bold text-[#38F9DB] mb-6"
            style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            About Me
          </h1>
          <p className="text-gray-300 leading-relaxed text-left text-lg">
            I’m passionate about helping creators and Web3 projects succeed.
            Over time, I’ve built a skill set that covers growth, design, and
            community building.
            <br />
            <br />
            I’ve helped multiple accounts reach monetization, unlock
            subscription features, and grow followers through authentic
            engagement strategies.
            <br />
            <br />
            Beyond X growth, I also:
            <br />• Build professional websites
            <br />• Design banners and digital artwork
            <br />• Write impactful threads, articles, and long-form content
            <br />• Moderate communities and manage online visibility
            <br />
            <br />
            My approach is hands-on, results-driven, and focused on making sure
            your brand stands out.
          </p>
        </motion.div>
      </div>

      {/* Social Media Icons */}
      <motion.div
        className="fixed top-1/3 right-6 flex flex-col space-y-6 z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a
          href="https://x.com/Brightmxta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-2xl"
        >
          <SiX />
        </a>
        <a
          href="http://reddit.com/u/brightmxta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-2xl"
        >
          <FaReddit />
        </a>
        <a
          href="http://medium.com/@brightmxta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-2xl"
        >
          <FaMedium />
        </a>
        <a
          href="https://quora.com/profile/Bright-1678"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-2xl"
        >
          <FaQuora />
        </a>
      </motion.div>
    </section>
    </>
  );
}
