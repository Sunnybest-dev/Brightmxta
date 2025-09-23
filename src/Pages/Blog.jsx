import { createClient } from 'contentful';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useEffect, useState } from 'react';
import PageWrapper from './PageWrapper';
import { FaReddit, FaQuora } from "react-icons/fa";
import { SiX } from "react-icons/si"; 

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
});

const SiMedium = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1043.63 592.71" className="w-5 h-5 sm:w-6 sm:h-6 fill-white hover:fill-[#38F9DB] transition">
    <path d="M588.67 296.35c0 163.73-131.07 296.36-294.33 296.36S0 460.08 0 296.35 131.07 0 294.34 0s294.33 132.62 294.33 296.35M911.11 296.35c0 154.58-65.54 279.91-146.36 279.91-80.81 0-146.35-125.33-146.35-279.91s65.54-279.91 146.35-279.91c80.82 0 146.36 125.33 146.36 279.91M1043.63 296.35c0 139.57-23.43 252.79-52.33 252.79-28.91 0-52.34-113.22-52.34-252.79s23.43-252.79 52.34-252.79c28.9 0 52.33 113.22 52.33 252.79"/>
  </svg>
);

function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const maxPageButtons = 5;

  useEffect(() => {
    client
      .getEntries({ content_type: 'brightmxta' })
      .then((response) => setPosts(response.items))
      .catch((err) => console.error('Contentful fetch error:', err));
  }, []);

  const truncateText = (text, limit = 40) => {
    if (!text) return '';
    return text.length > limit ? text.slice(0, limit) + '...' : text;
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    let start = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
    let end = start + maxPageButtons - 1;
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxPageButtons + 1, 1);
    }
    const pages = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <><Helmet>
  <title>Blog | BrightMxta</title>
  <meta
    name="description"
    content="Read BrightMxta’s latest blog posts on designs, Doginaldogz, Doginaldogs, Web3 trends, brand building, and creative growth strategies."
  />
</Helmet>
    <PageWrapper>
      <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#38F9DB] mb-12 text-center"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          Blog & Articles
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {currentPosts.map((post) => (
            <div
              key={post.sys.id}
              className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-black/50 transition transform hover:shadow-2xl hover:scale-[1.01]"
            >
              {post.fields?.picture?.fields?.file?.url && (
                <img
                  src={post.fields.picture.fields.file.url}
                  alt={post.fields.picture.fields.title || 'Blog Image'}
                  className="w-full sm:w-32 h-40 sm:h-32 object-cover rounded-lg flex-shrink-0"
                />
              )}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#38F9DB] mb-1">
                    {post.fields?.heading || 'Untitled'}
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">
                    {post.fields?.date || 'Unknown'}
                  </p>
                  <p className="text-gray-300 text-sm mb-2 break-words line-clamp-2">
                    {truncateText(post.fields?.body, 45)}
                  </p>
                </div>
                <a
                  href={`/BlogPost/${post.sys.id}`}
                  className="inline-block bg-[#38F9DB] text-black text-xs sm:text-sm font-semibold px-3 py-1 rounded hover:bg-[#2bc2b0] mt-2 w-fit"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {posts.length > postsPerPage && (
          <div className="flex justify-center flex-wrap gap-2 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50 hover:bg-gray-600 transition text-sm sm:text-base"
            >
              ←
            </button>

            {getPageNumbers().map((num) => (
              <button
                key={num}
                onClick={() => handlePageClick(num)}
                className={`px-3 py-1 rounded transition text-sm sm:text-base ${
                  currentPage === num ? 'bg-[#38F9DB] text-black' : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-700 text-white rounded disabled:opacity-50 hover:bg-gray-600 transition text-sm sm:text-base"
            >
              →
            </button>
          </div>
        )}

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
            <SiMedium />
          </a>
          <a
            href="https://quora.com/profile/Bright-1678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white opacity-25 hover:text-[#38F9DB] hover:opacity-60 transition text-lg sm:text-xl md:text-2xl"
          >
            <FaQuora />
          </a>
        </motion.div>
      </section>
    </PageWrapper>
    </>
  );
}

export default Blog;
