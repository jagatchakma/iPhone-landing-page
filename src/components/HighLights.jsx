import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { watchImg, rightImg } from "../utils";
import React from "react";
import VideoCarousel from "./VideoCarousel";

const HighLights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  });
  return (
    <section
      id="highlights"
      className=" overflow-hidden h-screen sm:py-32 py-20 sm:px-10 px-5 bg-zinc-900"
    >
      <div className="">
        <div className="mb-12 w-full md:flex items-center justify-between">
          <h1
            id="title"
            className="text-gray-500 lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
          >
            Get the highlights.
          </h1>
          <div className="flex gap-5">
            <p className="link flex items-center opacity-0 translate-y-20">
              Watch the film{" "}
              <img src={watchImg} alt="watch" className="ml-2 w-4" />{" "}
            </p>
            <p className="link flex items-center opacity-0 translate-y-20">
              Watch the event{" "}
              <img src={rightImg} alt="right" className="ml-2" />{" "}
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default HighLights;
