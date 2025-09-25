import { useState } from "react";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (res.status === 200) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("❌ Failed to send. Try again.");
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      toast.error("⚠️ Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <section className="max-w-2xl mx-auto py-6 px-6">
        <h1 className="text-2xl font-bold text-[#38F9DB] mb-6 text-center">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="bg-black/50 p-8 rounded-2xl shadow-lg space-y-6">
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
      </section>
    </PageWrapper>
  );
}
