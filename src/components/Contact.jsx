import { RiInstagramFill, RiLinkedinBoxFill } from '@remixicon/react';
import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const contactRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-icon", {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 80%",
                    toggleActions: "play none restart none",
                },
            });
        }, contactRef);
    
        return () => ctx.revert();
    }, []);

  return (
    <section className="py-16" id="contact" ref={contactRef}>
      <div className="px-4 text-center">
        <h2 className="contact-icon mb-8 text-3xl font-medium lg:text-4xl">
          Contact
        </h2>
        <p className="contact-icon mb-4 text-sm lg:text-xl">
          Feel free to reach out to me via email:{" "}
          <a href="mailto:anushaa1001@gmail.com" className="border-b">
            anushaa1001@gmail.com{" "}
          </a>
          &nbsp;&nbsp;phone: <span className="border-b">+91 8910826790</span>
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="http://www.linkedin.com/in/annusaha"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my LinkedIn profile"
          >
            <RiLinkedinBoxFill className="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/annu.x.arts"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon"
            aria-label="Visit my Instagram profile"
          >
            <RiInstagramFill className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact