import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const obj = { value: 0 };

      gsap.to(obj, {
        value,

        duration,

        ease: "power2.out",

        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },

        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent =
              `${prefix}${Math.round(obj.value)}${suffix}`;
          }
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [value, suffix, prefix, duration]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

export default Counter;