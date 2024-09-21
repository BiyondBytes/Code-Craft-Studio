import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            <video
                autoPlay
                muted
                loop
                className="rotate-180 absolute top-1/2  h-full w-full left-0 -translate-y-[98%] max-md:-translate-y-[85%] -z-10 object-cover "
            >
                <source src="/assets/blackhole.webm" type="video/webm" />
            </video>
            {/* hero image  */}
            <div className="absolute w-1/2 h-1/2 max-md:w-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] ">
                {/* Foreground (now in the background) */}
                <Image
                    className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none -z-10 foo"
                    style={{
                        filter: "drop-shadow(-10px -10px 40px rgba(255, 255, 255, 0.5)) drop-shadow(-10px -10px 60px rgba(255, 255, 255, 0.1)) drop-shadow(0 0 50px rgba(140, 69, 255, 1))",
                    }}
                    src="/assets/hero-image.png"
                    alt="hero"
                    width={499}
                    height={100}
                />

                {/* Background (now in front) */}
                <div
                    className="absolute top-0 left-0 w-full h-full bg-purple-500 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]  z-10"
                    style={{
                        WebkitMaskImage: "url('/assets/hero-image.png')",
                        WebkitMaskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                    }}
                ></div>
                {/* left-wing */}
                <Image
                    className="absolute top-1/2 left-1/2 -translate-x-[200%] -translate-y-[200%]  w-1/2 h-1/2 object-contain pointer-events-none -z-10 scale-x-[-1]"
                    src="/assets/wing.png"
                    alt="hero"
                    width={499}
                    height={100}
                />
                {/* right-wing */}
                <Image
                    className="absolute top-1/2 left-1/2 translate-x-[80%] -translate-y-[200%]  w-1/2 h-1/2 object-contain pointer-events-none -z-10 "
                    src="/assets/wing.png"
                    alt="hero"
                    width={499}
                    height={100}
                />
            </div>
            <div className="relative container top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            
                <h1
                    className=" max-md:text-5xl text-8xl font-semibold tracking-tighter  bg-white bg-[radial-gradient(100%_100%_at_top_left,white,rgba(213,129,255,0.5),rgba(74,32,138,0.8))] text-transparent bg-clip-text drop-shadow-[0_4px_6px_rgba(74,32,138,0.8)] -z-10">
                    CODE CRAFT STUDIO
                </h1>

            </div>
            <div className="absolute left-0 bottom-0 w-1/2 max-md:w-full p-4 text-center right-0 mx-auto flex items-center flex-col">

                <button className="font-bold border-4 w-16 h-16 rotate-45 border-white my-4 flex items-center justify-center">
                    <span className="-rotate-45">
                        Studio
                    </span>
                </button>

                <p className="text-white/70 ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus expedita commodi nam iste molestiae, ad maiores iure nihil explicabo quidem ipsa? Quae quis voluptate dignissimos iure eaque hic adipisci ad.
                </p>
            </div>
        </div>
    );
};

export default Hero;
