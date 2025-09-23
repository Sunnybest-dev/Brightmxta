import { FaReddit, FaMedium, FaQuora } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // For X (Twitter)

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-gray-800 text-gray-400 px-6">
      {/* Bottom bar */}
      <div className="mt-10 text-center  text-sm">
        <p>
          © {new Date().getFullYear()} BrightMxta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
