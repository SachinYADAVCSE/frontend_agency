import { useEffect, useRef } from "react";
import gsap from "gsap";

function SplashScreen({ onComplete }) {
  const splashRef = useRef(null);
  const lettersRef = useRef([]);

  const agencyName = "WORDMARK";

  useEffect(() => {
    const letters = lettersRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      },
    });

    // Initial state
    gsap.set(letters, {
      y: 90,
      opacity: 0,
      filter: "blur(18px)",
    });

    // Letters appear one by one
    tl.to(letters, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.8,
      stagger: 0.08,
      ease: "power4.out",
    });

    // Hold the completed word very briefly
    tl.to({}, {
      duration: 0.25,
    });

    // Entire splash exits upward
    tl.to(splashRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={splashRef}
      className="splash-screen"
    >
      <div className="splash-logo">
        {agencyName.split("").map(
          (letter, index) => (
            <span
              key={`${letter}-${index}`}
              ref={(el) => {
                lettersRef.current[index] = el;
              }}
              className="splash-letter"
            >
              {letter}
            </span>
          )
        )}

        <span className="splash-symbol">
          ®
        </span>
      </div>
    </div>
  );
}

export default SplashScreen;