import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";
import toast from "react-hot-toast";
import { FaReddit, FaQuora } from "react-icons/fa";
import { SiX } from "react-icons/si"; // New Twitter (X) logo

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const FaMedium = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1043.63 592.71"
      className="w-6 h-6 fill-white hover:fill-[#38F9DB] transition"
    >
      <path d="M588.67 296.35c0 163.73-131.07 296.36-294.33 296.36S0 460.08 0 296.35 131.07 0 294.34 0s294.33 132.62 294.33 296.35M911.11 296.35c0 154.58-65.54 279.91-146.36 279.91-80.81 0-146.35-125.33-146.35-279.91s65.54-279.91 146.35-279.91c80.82 0 146.36 125.33 146.36 279.91M1043.63 296.35c0 139.57-23.43 252.79-52.33 252.79-28.91 0-52.34-113.22-52.34-252.79s23.43-252.79 52.34-252.79c28.9 0 52.33 113.22 52.33 252.79" />
    </svg>
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send. Try again.");
      }
    } catch (err) {
      console.error("Send email error:", err);
      toast.error("⚠️ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <section className="max-w-2xl mx-auto py-6 px-6">
        <h1
          className="text-base md:text-2xl font-bold text-[#38F9DB] mb-6 text-center"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          Contact Me
        </h1>
        <p className="text-gray-300 text-center mb-12">
          Have a question or want to collaborate? Drop a message below 👇
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-black/50 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white focus:border-[#38F9DB] outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white focus:border-[#38F9DB] outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-white focus:border-[#38F9DB] outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-full font-semibold transition ${
              loading
                ? "bg-[#38F9DB] text-black shadow-[0_0_25px_#38F9DB] animate-pulse cursor-not-allowed"
                : "bg-[#38F9DB] text-black shadow-[0_0_15px_#38F9DB] hover:scale-105"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

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
      </section>
    </PageWrapper>
  );
}
