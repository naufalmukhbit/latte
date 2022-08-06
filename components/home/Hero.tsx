import { useEffect } from "react";
import Image from "next/image";
import bgPic from "assets/bw-transparent.png";
import { ParallaxBanner } from "react-scroll-parallax";
import { useTheme } from "next-themes";

const Hero = () => {
  const {setTheme} = useTheme();
  useEffect(() => {
    const container = document.getElementById('bg-container');
    setTheme("dark");
    if (container) {
      container.style.height = window.innerHeight + 'px';
    }
  }, []);

  return (
    <div className="relative">
      <div id="bg-container" className="flex flex-col lg:flex-row items-center justify-end bg-black">
        <div id="bg-pic" className="relative w-full h-[100vw] max-w-[100vh] max-h-[100vh]">
          <Image
            src={bgPic}
            className="z-10"
            quality={80}
            layout="fill"
            objectFit="fill"
            objectPosition="right bottom"
          />
          <span className="absolute inset-x-[20%] top-[30%] h-[70%] w-[60%] rounded-[50%] bg-white/20 blur-3xl" />
        </div>
      </div>
      <div className="text-white absolute top-40 lg:top-[35%] inset-x-0 md:inset-x-8 h-60 px-8 flex flex-col justify-between md:text-left">
        <div>
          <h1 id="general-kenobi" className="text-5xl md:text-7xl font-bold pb-2">
            Hello there.
          </h1>
          <h1 className="text-lg font-bold">
            <span>
              My name is Naufal. I&apos;m a Web Developer.
            </span>
            {" "}
            <br className="hidden md:inline" />
            <span>
              Welcome to my website!
            </span>
          </h1>
        </div>
        <small className="text-white/40 flex flex-col md:flex-row-reverse md:gap-2 md:justify-end items-center">
          Scroll up to continue...
          <span className="animate-bounce">︿</span>
        </small>
      </div>
    </div>
  )
};

export default Hero;