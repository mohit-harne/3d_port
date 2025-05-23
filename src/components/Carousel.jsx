"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-[360px] flex-shrink-0"
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div
          onClick={() => window.open(source_code_link, "_blank")}
          className="relative w-full h-[230px]"
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt="github" className="w-1/2 h-1/2" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Carousel = () => {
  const racesRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const races = racesRef.current;

    function getScrollAmount() {
      const racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tween.kill();
    };
  }, []);

  return (
    <div className="bg-black text-white">
     

      <div className="h-[5vh]" />

      <div ref={wrapperRef} className="overflow-hidden relative bg-black">
         <div className="px-10 pt-20 max-w-6xl mx-auto">
        <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className={styles.sectionSubText}>My Work</p>
          <h2 className={styles.sectionHeadText}>Projects</h2>
           <p className="text-secondary text-[17px] leading-[30px]">
            These projects highlight my skills through real-world examples, with links to code and live demos. They demonstrate my problem-solving, tech versatility, and project management abilities.
          </p>
        </motion.div>

       
      </div>
        <div
          ref={racesRef}
          className="flex gap-8 py-10 px-10"
        >
              {/* Start Slide */}
         
<div className="w-[720px] flex-shrink-0 flex items-center justify-center">
  <div className="text-white text-3xl font-bold text-center leading-relaxed">
    🖱️ Click to visit !<br />
    <span className="text-xl font-medium opacity-70"> Scroll ➡️</span>
  </div>
</div>
          {projects.map((project, i) => (
            <ProjectCard key={i} index={i} {...project} />
          ))}

          {/* End Slide */}
         
<div className="w-[720px] flex-shrink-0 flex items-center justify-center">
  <div className="text-white text-3xl font-bold text-center leading-relaxed">
    🎉 You’ve reached the end!<br />
    <span className="text-xl font-medium opacity-70">← Scroll back to explore more</span>
  </div>
</div>

        </div>
      </div>

    
      
    </div>
  );
};

export default Carousel;
