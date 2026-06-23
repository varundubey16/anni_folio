'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../assets/user.svg"
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const fourthText = useRef(null);
  
  // Refs for the duplicated second set of text
  const firstTextDuplicate = useRef(null);
  const secondTextDuplicate = useRef(null);
  const thirdTextDuplicate = useRef(null);
  const fourthTextDuplicate = useRef(null);

  const slider = useRef(null);

  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    else if (xPercent > 0) {
      xPercent = -100;
    }
    
    // 🚀 Fixed: Animating ALL text elements, including the third, fourth, and duplicates
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    gsap.set(thirdText.current, { xPercent: xPercent })
    gsap.set(fourthText.current, { xPercent: xPercent })

    gsap.set(firstTextDuplicate.current, { xPercent: xPercent })
    gsap.set(secondTextDuplicate.current, { xPercent: xPercent })
    gsap.set(thirdTextDuplicate.current, { xPercent: xPercent })
    gsap.set(fourthTextDuplicate.current, { xPercent: xPercent })

    requestAnimationFrame(animate);
    xPercent += 0.08 * direction; // Slightly adjusted speed for smoother tracking
  }

  return (
    <section className={`relative z-[-1] w-full h-screen mx-auto banner overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[150px] right-40 z-[-1] animation max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div data-scroll data-scroll-speed='0.4'>
          <h1 className={`font-black lg:text-[90px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-20 text-white`}>
            Hi, I'm <p className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[60px] lg:text-[110px]'>Arunima</p>
          </h1>
        </div>
      </div>

      {/* 🚀 Fixed: The slider container needs a flex layout to hold both blocks side-by-side seamlessly */}
      <div className="sliderContainer md:z-[-10] absolute white-space-nowrap bottom-10">
        <div ref={slider} className="slider flex whitespace-nowrap overflow-hidden text-secondary text-[70px] lg:text-[200px] gap-4">
          
          {/* First Complete Set */}
          <p ref={firstText} className="pr-4">Certified Forensic Expert,</p>
          <p ref={secondText} className="pr-4">Fraud Investigator,</p>
          <p ref={thirdText} className="pr-4">AML KYC and CDD Associate</p>
          <p ref={fourthText} className="pr-8">and a Content Creator.</p>

          {/* 🚀 Second Complete Set (Identical Duplicate for Perfect Looping) */}
          <p ref={firstTextDuplicate} className="pr-4">Certified Forensic Expert,</p>
          <p ref={secondTextDuplicate} className="pr-4">Fraud Investigator,</p>
          <p ref={thirdTextDuplicate} className="pr-4">AML KYC and CDD Associate</p>
          <p ref={fourthTextDuplicate} className="pr-8">and a Content Creator.</p>
          
        </div>
      </div>

      <Image loading="lazy" src={heroImg} alt="hero" className="z-[-2] absolute bottom-24 right-0 animation" />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-30 cursor-pointer'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer'>
            <motion.div
              animate={{
                y:,
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
