import { Button } from "react-bootstrap";

const Hireme = () => {
  return (
    <section id="hireme" className="">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Hire
          <span className="text-cyan-600"> Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div
        className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl 
        mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse
        items-center"
      >
        <div>
          <h2 className="text-2xl font-semibold">
            Do you want any work from me?
          </h2>
          <p className="max-w-lg text-sm mt-4 text-gray-200 leading-6">
            kbj cd dc jdjkdcjjcdcjsdc s dcsk ds dc sd j sd jsdc jdk dkds ckd
            cckj dsc sd sc dsocsicb b bbd b sbdbdiucbdsbbcdsbcksdb c bd iudsbb
            dcbd i u dbdibdssu dsu cu duibc ubc bbucsbud dubdsbcuisbdiuc bds
          </p>
          <Button id="contact" className="mt-10 hover:bg-cyan-800">
            Say Hello
          </Button>
        </div>
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Hireme;
