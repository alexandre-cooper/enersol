"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}
export const metadata = {
  title: "Localização",
};

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      // centerMode: true,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="py-10 sm:py-20 bg-lightpink">
        <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8">
          <div className="text-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
                Onde nos estamos?
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                Faça-nos uma visita
              </h3>
            </Fade>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 max-w-7xl mx-auto mt-28 mb-8 justify-center items-center w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d971.5425673585534!2d-55.9076458!3d-13.0883931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a0f3ede146b55b%3A0x124700610514b7a3!2sEnersol%20Energia%20Solar!5e0!3m2!1spt-PT!2spt!4v1723475960615!5m2!1spt-PT!2spt"
            className="w-full h-96 md:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  }
}
