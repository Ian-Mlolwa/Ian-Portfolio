import { Swiper, SwiperSlide } from "swiper/react";
import demo from "../assets/images/demo.png";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Projects = () => {
  const projects = [
    {
      img: "https://github.com/Ian-Mlolwa/Ian-Mlolwa/assets/75843266/3828c828-c107-4952-a226-933214fd3d12",
      name: "Shopping Web",
      github_link: "https://github.com/Ian-Mlolwa/Shop_Web",
      live_link: "https://shop-web-ian.netlify.app",
    },
    {
      img: "https://github.com/Ian-Mlolwa/Ian-Mlolwa/assets/75843266/08641318-7918-4fa1-821b-9e2a566932aa",
      name: "StartUp Net",
      github_link: "https://github.com/Ian-Mlolwa/Startup_net",
      live_link: "https://start-app-net.netlify.app",
    },
    {
      img: "https://github.com/Ian-Mlolwa/Ian-Mlolwa/assets/75843266/9b299388-024c-41ce-b6a9-4ef322c670df",
      name: "Book Recommendation",
      github_link: "https://github.com/Ian-Mlolwa/Boook-Recommendation-System",
      live_link:
        "https://ian-mlolwa-boook-recommendation-system-app-asmnpz.streamlit.app/",
    },
    {
      img: demo,
      name: "Portfolio",
      github_link: "https://github.com/Ian-Mlolwa/Ian-Portfolio",
      live_link: "https://my-portfolio-ian.netlify.app/",
    },
  ];
  return (
    <section id="projects">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My
          <span className="text-cyan-600"> Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <div className="flex max-w-6xl px-5 mx-auto items-center relative">
        <div className="w-full mt-10">
          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3500,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects?.map((work) => (
              <SwiperSlide>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={work.img} className="rounded-lg" />
                  <h3 className="text-xl my-3">{work.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={work.github_link}
                      target="_blank"
                      className="inline-block text-cyan-600 bg-gray-800 px-2 py-1"
                    >
                      GitHub
                    </a>
                    <a
                      href={work.live_link}
                      target="_blank"
                      className="inline-block text-cyan-600 bg-gray-800 px-2 py-1"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Projects;
