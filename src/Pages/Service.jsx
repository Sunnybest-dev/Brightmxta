import { useState } from "react";
import { Helmet } from "react-helmet";
import { Briefcase, PenTool, Users, LayoutDashboard } from "lucide-react";

export default function Service() {
  return (
    <><Helmet>
  <title>Services | BrightMxta</title>
  <meta
    name="description"
    content="Explore BrightMxta services: Web3 design, Web Design, brand strategy, content creation, and community growth solutions."
  />
</Helmet>
    <section className="bg-[#121212] text-white py-3 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1
          className="text-2xl font-bold text-[#38F9DB] text-center mb-12"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          My Services
        </h1>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Account Growth & Monetization */}
          <div className="bg-[#1e1e1e] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <Briefcase className="text-[#38F9DB] w-10 h-10 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Account Growth</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>📈 Reach 5M impressions to qualify for monetization</li>
              <li>🔑 Unlock subscription features</li>
              <li>⚡ Manual engagement boosting</li>
              <li>🎯 Targeted strategies to increase followers</li>
            </ul>
          </div>

          {/* Content Creation */}
          <div className="bg-[#1e1e1e] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <PenTool className="text-[#38F9DB] w-10 h-10 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Content Creation</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>🧵 High-quality threads that drive engagement</li>
              <li>📰 In-depth articles & blog posts</li>
              <li>🤝 Engaging content that builds authority</li>
            </ul>
          </div>

          {/* Design & Branding */}
          <div className="bg-[#1e1e1e] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <LayoutDashboard className="text-[#38F9DB] w-10 h-10 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Design & Branding</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>💻 Professional website development</li>
              <li>🎨 Banner & header design</li>
              <li>🖼️ Unique digital artworks for your brand</li>
            </ul>
          </div>

          {/* Community Management */}
          <div className="bg-[#1e1e1e] rounded-2xl p-6 shadow-lg hover:scale-105 transition">
            <Users className="text-[#38F9DB] w-10 h-10 mb-4" />
            <h2 className="text-xl font-semibold mb-4">Community Management</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>🎙️ Space & group moderation</li>
              <li>🚀 Boosting project visibility on X</li>
              <li>🌍 Driving organic community engagement</li>
            </ul>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="mt-20">
          <h2 className="text-2xl text-center font-semibold text-[#38F9DB] mb-6"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
          >
            Portfolio / Case Studies
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I’ve worked with a range of Web3 creators and projects — from
            growing small startup accounts to supporting established
            communities. Some of the areas I’ve contributed to include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>✔ Helping accounts reach monetization milestones</li>
            <li>✔ Building follower bases from scratch</li>
            <li>✔ Moderating active projects & communities</li>
            <li>✔ Designing banners, websites & branded content</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
