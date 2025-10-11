import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const projects = [
  {
    img: "/images/project1.png",
    title: "B4B Platform",
    desc: "An online platform that allows users to buy and sell books seamlessly — connecting book lovers within a vibrant community.",
  },
  {
    img: "/images/project2.png",
    title: "ETutor",
    desc: "A personalized online learning platform where students can connect with private tutors for 1-on-1 sessions.",
  },
  {
    img: "/images/project3.png",
    title: "Portfolio Website",
    desc: "Personal portfolio built with React and Three.js",
  },
  {
    img: "/images/project4.png",
    title: "AI Chatbot",
    desc: "ChatGPT-style web chatbot built with Python and FastAPI",
  },
];

const ShowCase = () => {
  return (
    <div id="work" className="app-showcase py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left mb-10">
          <h2 className="text-4xl font-bold text-white mb-4 md:mb-0">
            Featured Projects & Works
          </h2>
          <a
            href="https://github.com/hoangnam150303"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-purple-400 hover:text-purple-200 text-lg font-semibold border border-purple-400 hover:border-purple-200 rounded-lg px-4 py-2 transition-colors duration-300"
          >
            Explore more on my GitHub →
          </a>
        </div>

        {/* 🖼 Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-900/80 rounded-xl p-4 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-lg mb-4 w-full h-56 object-cover"
                />
                <h3 className="text-2xl text-white font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                  {project.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShowCase;
