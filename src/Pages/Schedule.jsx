import { FaReddit, FaQuora } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

  const FaMedium = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1043.63 592.71"
      className="w-6 h-6 fill-white hover:fill-[#38F9DB] transition"
    >
      <path d="M588.67 296.35c0 163.73-131.07 296.36-294.33 296.36S0 460.08 0 296.35 131.07 0 294.34 0s294.33 132.62 294.33 296.35M911.11 296.35c0 154.58-65.54 279.91-146.36 279.91-80.81 0-146.35-125.33-146.35-279.91s65.54-279.91 146.35-279.91c80.82 0 146.36 125.33 146.36 279.91M1043.63 296.35c0 139.57-23.43 252.79-52.33 252.79-28.91 0-52.34-113.22-52.34-252.79s23.43-252.79 52.34-252.79c28.9 0 52.33 113.22 52.33 252.79" />
    </svg>
  );
import { SiX } from "react-icons/si"; // New Twitter (X) logo
export default function Schedule() {
  return (
    <>
    <div className="max-w-4xl mx-auto py-6 px-6">
      <h1 className="text-base md:text-2xl text-[#38F9DB] font-bold mb-8 text-center" style={{ fontFamily: "'Press Start 2P', cursive" }}>
        Schedule a Meeting
      </h1>
      <iframe
        src="https://cal.com/bright-fvm2gt/30min"
        style={{ width: "100%", height: "700px", border: "none" }}
        title="Cal.com Booking"
        className="shadow-sm shadow-[#38F9DB] rounded-4xl"
      ></iframe>
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
            href="quora.com/profile/Bright-1678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-2xl"
          >
            <FaQuora />
          </a>
        </motion.div>
    </div>
    </>
  );
}
