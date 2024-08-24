"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import VideoPlayer from "../Video";
import Link from "next/link";

const Banner = () => {
  return (
    <div id="home-section" className="bg-lightpink">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="text-4xl lg:text-7xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                Quer economizar?
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey lg:text-lg font-normal mb-10 lg:text-start text-center">
                Economize até <strong>95%</strong> <br /> na sua conta de luz!
              </p>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:flex align-middle justify-center lg:justify-start">
                <button className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-14 mr-6">
                  <Link href="#cook-section">Orçamento!</Link>
                </button>
              </div>
            </Fade>
          </div>

          <div className="col-span-6 flex justify-center relative mt-5">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
