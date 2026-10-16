import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SplitText({
  text,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);

  const words = text.split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".split-word",
        {
          yPercent: 120,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.055,
          delay,
          ease: "power4.out",

          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="split-mask"
        >
          <span className="split-word">
            {word}
          </span>{" "}
        </span>
      ))}
    </div>
  );
}

export default SplitText;