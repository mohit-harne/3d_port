import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const racesRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const races = racesRef.current;
    const wrapper = wrapperRef.current;
    if (!races || !wrapper) return;

    const getScrollAmount = () => {
      const scrollDistance = races.scrollWidth - window.innerWidth;
      return scrollDistance < 0 ? 0 : scrollDistance;
    };

    const updateTween = () => {
      const amount = getScrollAmount();
      gsap.set(races, { x: 0 }); // reset
      ScrollTrigger.getAll().forEach(t => t.kill());

      gsap.to(races, {
        x: -amount,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: `+=${amount}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          markers: true,
        },
      });
    };

    updateTween();
    window.addEventListener('resize', updateTween);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener('resize', updateTween);
    };
  }, []);

  return (
    <div>
      <style>{`
        body {
          margin: 0;
          background: #15151e;
          overflow-x: hidden;
        }

        .racesWrapper {
          width: 100%;
        }

        .races {
          display: flex;
          width: fit-content;
          gap: 10px;
        }

        .races img {
          width: 100vw;
          height: auto;
          flex-shrink: 0;
          object-fit: cover;
        }

        .space-50vh {
          height: 10vh;
          background: #313143;
        }

        .space-100vh {
          height: 10vh;
          background: #313143;
        }

        .brand {
          background: black;
          text-align: center;
        }
      `}</style>

      <div className="space-50vh"></div>

      <div className="racesWrapper" ref={wrapperRef}>
        <div className="races" ref={racesRef}>
          <img src="https://picsum.photos/id/1011/1200/600" alt="Race 1" />
          <img src="https://picsum.photos/id/1015/1200/600" alt="Race 2" />
          <img src="https://picsum.photos/id/1016/1200/600" alt="Race 3" />
          <img src="https://picsum.photos/id/1020/1200/600" alt="Race 4" />
          <img src="https://picsum.photos/id/1021/1200/600" alt="Race 5" />
        </div>
      </div>

      <div className="space-100vh"></div>

      
    </div>
  );
};

export default Carousel;
