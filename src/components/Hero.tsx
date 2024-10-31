import Pic from "../assets/images/sam-removebg-preview.png";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  const social_media = [
    { logo: faGithub, link: "https://github.com/Ian-Mlolwa" },
    {
      logo: faLinkedinIn,
      link: "https://www.linkedin.com/in/ian-mlolwa-b18195215/",
    },
    { logo: faFacebook, link: "https://www.facebook.com/ian.mwamburi/" },
    { logo: faInstagram, link: "https://www.instagram.com/ianmlolwa/" },
    { logo: faTwitter, link: "https://twitter.com/ianmlolwa" },
  ];
  return (
    <section id="home" className="flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={Pic} alt="ianmlolwa" className="md:w-12/12 object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1
            className="md:text-5xl text-2xl md:leading-normal leading-10
          text-white font-bold"
          >
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello! <br />
            </span>
            My name is <span>Shaban Ongoma</span>
          </h1>
          <h4
            className="md:text-2xl text-lg md:leading-normal leading leading-5 mt-4
          font-bold text-gray-600"
          >
            Front-End Developer
          </h4>

          <div className="text-gray-600 mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((media) => (
              <div className="hover:text-white cursor-pointer">
                <a href={media.link} target="_blank">
                  <FontAwesomeIcon icon={media.logo} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
