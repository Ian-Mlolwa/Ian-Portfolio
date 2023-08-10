import { Button } from "react-bootstrap";
import A from "../assets/images/A.png";
import B from "../assets/images/B.png";
import O from "../assets/images/O.png";
import U from "../assets/images/U.png";
import T from "../assets/images/T.png";

const About = () => {
  const info = [
    { text: "Years Experience", count: "03" },
    { text: "Completed Projects", count: "07" },
    { text: "Companies Work", count: "02" },
  ];

  return (
    <section id="about" className="py-10 text-white ">
      <div className="text-center mt-auto mx-auto">
        <h3 className="text-4xl font-semibold">
          About
          <span className="text-cyan-600"> Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div
          className="flex md:flex-row flex-col-reverse items-center
            md:gap-6 gap-12 px-10 max-w-6xl mx-auto"
        >
          <div className="p-2">
            <div className="text-gray-400 my-3">
              <p className="text-justify w-11/12">
                kbj cd dc jdjkdcjjcdcjsdc s dcsk ds dc sd j sd jsdc jdk dkds ckd
                cckj dsc sd sc dsocsicb b bbd b sbdbdiucbdsbbcdsbcksdb c bd
                iudsbb dcbd i u dbdibdssu dsu cu duibc ubc bbucsbud
                dubdsbcuisbdiuc bds
              </p>

              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span>{content.text}</span>
                  </div>
                ))}
              </div>

              <br />
              <a href="./src/assets/Ian-CV.pdf" download>
                <Button className="mt-6 hover:bg-cyan-900">Download CV</Button>
              </a>
            </div>
          </div>

          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-16 h-full relative flex md:inline-block w-14 justify-center">
              <img src={A} alt="" className="animate-ping" />
              <img src={B} alt="" className="animate-bounce" />
              <img src={O} alt="" className="animate-spin" />
              <img src={U} alt="" className="animate-bounce" />
              <img src={T} alt="" className="animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
