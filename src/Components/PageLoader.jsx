import { motion } from "framer-motion";

export default function PageLoader({ loading }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[9999] bg-[#121212] ${
        loading ? "block" : "hidden"
      }`}
    >
      <div className="relative w-25 h-25 flex items-center justify-center">
        {/* Pulsing Glow Background */}
        <motion.div
          className="absolute w-full h-full rounded-full border-2 border-[#38F9DB]"
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.2, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ boxShadow: "0 0 25px #38F9DB" }}
        />

        {/* Neon Circle Progress */}
        <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#38F9DB"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={2 * Math.PI * 45}
            strokeDashoffset={2 * Math.PI * 45}
            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ filter: "drop-shadow(0 0 6px #38F9DB)" }}
          />
        </svg>

        {/* Logo in Middle */}
        <motion.img
          src="/brightmxta.jpg"
          alt="Logo"
          className="w-20 h-20 object-contain drop-shadow-[0_0_8px_#38F9DB] rounded-full"
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1, 0.9] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
