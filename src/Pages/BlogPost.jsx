import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';
import { FaReddit, FaQuora } from "react-icons/fa";
import { SiX } from "react-icons/si"; // New Twitter (X) logo
import { motion } from "framer-motion";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
});
const FaMedium = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1043.63 592.71" className="w-5 h-5 sm:w-6 sm:h-6 fill-white hover:fill-[#38F9DB] transition">
    <path d="M588.67 296.35c0 163.73-131.07 296.36-294.33 296.36S0 460.08 0 296.35 131.07 0 294.34 0s294.33 132.62 294.33 296.35M911.11 296.35c0 154.58-65.54 279.91-146.36 279.91-80.81 0-146.35-125.33-146.35-279.91s65.54-279.91 146.35-279.91c80.82 0 146.36 125.33 146.36 279.91M1043.63 296.35c0 139.57-23.43 252.79-52.33 252.79-28.91 0-52.34-113.22-52.34-252.79s23.43-252.79 52.34-252.79c28.9 0 52.33 113.22 52.33 252.79"/>
  </svg>
);

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    client
      .getEntry(id)
      .then((data) => setPost(data))
      .catch((err) => console.error('Contentful fetch error:', err));
  }, [id]);

  if (!post) {
    return (
      <PageWrapper>
        <div className="text-center py-20 text-gray-400 text-base sm:text-lg md:text-xl">
          Loading post...
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <section className="max-w-3xl md:max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="text-[#38F9DB] font-semibold mb-6 inline-block text-xs sm:text-sm md:text-base hover:underline"
        >
          ← Back to Blog
        </Link>

        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#38F9DB] mb-4 leading-snug"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          {post.fields.heading}
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-6">{post.fields.date}</p>

        {post.fields.picture?.fields?.file?.url && (
          <img
            src={post.fields.picture.fields.file.url}
            alt={post.fields.picture.fields.title || 'Blog Image'}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-sm shadow-[#38F9DB] mb-6 mx-auto object-contain"
          />
        )}

        <div className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl space-y-4">
          {post.fields.body.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Social Media Icons */}
        <motion.div
          className="fixed top-1/3 right-2 sm:right-4 md:right-6 flex flex-col space-y-4 sm:space-y-6 z-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="https://x.com/Brightmxta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-lg sm:text-xl md:text-2xl"
          >
            <SiX />
          </a>
          <a
            href="http://reddit.com/u/brightmxta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-lg sm:text-xl md:text-2xl"
          >
            <FaReddit />
          </a>
          <a
            href="http://medium.com/@brightmxta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-lg sm:text-xl md:text-2xl"
          >
            <FaMedium />
          </a>
          <a
            href="https://www.quora.com/profile/Bright-1678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-lg sm:text-xl md:text-2xl"
          >
            <FaQuora />
          </a>
        </motion.div>
      </section>
    </PageWrapper>
  );
}
