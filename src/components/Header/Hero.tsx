import React from "react";
import HeroContent from "./HeroContent";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-[-200px]  h-full w-full left-0 -z-10 object-cover "
            >
                <source src="/assets/blackhole.webm" type="video/webm" />
            </video>
            <div className="absolute top-16 left-0 right-0 mx-auto w-[45%] h-full ">
                <Image
                    src="/assets/hero-image.png"
                    alt="hero"
                    width={400}
                    height={400}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                />
                <div className="absolute top-32 left-0 text-center">
                    <h1 className=" text-8xl font-semibold tracking-tighter  bg-white bg-[radial-gradient(100%_100%_at_top_left,white,rgba(213,129,255,0.5),rgba(74,32,138,0.8))] text-transparent bg-clip-text drop-shadow-[0_4px_6px_rgba(74,32,138,0.8)]">
                        CODE CRAFT STUDIO
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi, a eligendi neque dolore accusantium facilis aperiam incidunt non! Maxime, optio quam? Porro doloribus quidem asperiores voluptas quaerat, magni sequi.</p>
                    <button>Studio</button>
                </div>
                <div>
                </div>
            </div>
            {/* <HeroContent /> */}
        </div>
    );
};

export default Hero;
