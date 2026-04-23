"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";

export default function Work({ isDarkMode }) {
  return (
    <section id="work" className="w-full px-[12%] py-16 scroll-mt-20 min-h-screen">
      <h4 className="text-center mb-2 text-lg font-medium">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 opacity-80">
        Explore a collection of projects showcasing my skills in creating dynamic
        and responsive experiences.
      </p>

      <div className="grid grid-cols-auto gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white dark:bg-darkTheme/90 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5
                         flex items-center justify-between duration-300 group-hover:bottom-7"
            >
              <div>
                <h3 className="font-semibold text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-white/70">
                  {project.description}
                </p>
              </div>

              <div
                className="border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center
                           shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_rgba(255,255,255,0.4)]
                           group-hover:bg-lime-300 transition"
              >
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="#work"
        className="w-max flex items-center justify-center gap-2 border border-gray-800 dark:border-white/70 rounded-full py-3 px-10
                   mx-auto my-20 hover:bg-lightHover dark:hover:bg-darkHover transition"
      >
        Show more
        <Image
          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
          alt="arrow"
          className="w-4"
        />
      </a>
    </section>
  );
}
