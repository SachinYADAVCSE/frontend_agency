import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowRight,
  // Instagram,
  // Linkedin,
  Mail,
  X,
} from "lucide-react";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  const menuRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const menuCardRef = useRef(null);
  const menuLinksRef = useRef([]);
  const menuBottomRef = useRef(null);

  const chatRef = useRef(null);

  /*
  =========================================================
  MENU ITEMS
  =========================================================
  */

  const menuItems = [
    {
      label: "WORK",
      href: "/projects",
    },
    {
      label: "BLOG",
      href: "/blog",
    },
    {
      label: "ABOUT",
      href: "/about",
    },
    {
      label: "CAREERS",
      href: "/careers",
    },
    {
      label: "CONTACT",
      href: "/contact",
    },
  ];


  /*
  =========================================================
  MENU OPEN / CLOSE ANIMATION
  =========================================================
  */

  useEffect(() => {
    const menu = menuRef.current;
    const overlay = menuOverlayRef.current;
    const card = menuCardRef.current;
    const links = menuLinksRef.current;
    const bottom = menuBottomRef.current;

    if (!menu || !overlay || !card) return;


    /*
    -----------------------------------------------------
    OPEN
    -----------------------------------------------------
    */

    if (menuOpen) {
      document.body.style.overflow = "hidden";

      gsap.set(menu, {
        display: "flex",
      });

      gsap.set(overlay, {
        opacity: 0,
      });

      gsap.set(card, {
        opacity: 0,
        y: -35,
        scale: 0.97,
      });

      gsap.set(links, {
        opacity: 0,
        y: 25,
        filter: "blur(8px)",
      });

      gsap.set(bottom, {
        opacity: 0,
        y: 15,
      });


      const tl = gsap.timeline();


      // Dark overlay
      tl.to(overlay, {
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
      });


      // White menu card
      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: "power4.out",
        },
        "-=0.25"
      );


      // Menu links
      tl.to(
        links,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.55,
          stagger: 0.055,
          ease: "power4.out",
        },
        "-=0.3"
      );


      // Bottom content
      tl.to(
        bottom,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power3.out",
        },
        "-=0.3"
      );


      return () => tl.kill();
    }


    /*
    -----------------------------------------------------
    CLOSE
    -----------------------------------------------------
    */

    document.body.style.overflow = "";

    const tl = gsap.timeline({
      onComplete: () => {
        if (menuRef.current) {
          menuRef.current.style.display = "none";
        }
      },
    });


    tl.to(links, {
      opacity: 0,
      y: -15,
      filter: "blur(6px)",
      duration: 0.2,
      stagger: 0.025,
      ease: "power2.in",
    });


    tl.to(
      card,
      {
        opacity: 0,
        y: -25,
        scale: 0.97,
        duration: 0.4,
        ease: "power3.inOut",
      },
      "-=0.05"
    );


    tl.to(
      overlay,
      {
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
      },
      "-=0.25"
    );


    return () => tl.kill();

  }, [menuOpen]);


  /*
  =========================================================
  ESCAPE TO CLOSE
  =========================================================
  */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (
        event.key === "Escape" &&
        menuOpen
      ) {
        setMenuOpen(false);
      }

    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, [menuOpen]);


  /*
  =========================================================
  SECTION COLOR DETECTION
  =========================================================
  */

  useEffect(() => {

    const sections =
      document.querySelectorAll(
        "[data-nav-theme]"
      );


    if (!sections.length) return;


    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                const theme =
                  entry.target.dataset
                    .navTheme;

                setLightMode(
                  theme === "light"
                );

              }

            }
          );

        },
        {
          threshold: 0.45,
        }
      );


    sections.forEach(
      (section) => {
        observer.observe(section);
      }
    );


    return () => {
      observer.disconnect();
    };

  }, []);


  /*
  =========================================================
  MAGNETIC CHAT BUTTON
  =========================================================
  */

  const handleChatMove = (event) => {

    if (!chatRef.current) return;


    const rect =
      chatRef.current.getBoundingClientRect();


    const x =
      event.clientX -
      (rect.left + rect.width / 2);


    const y =
      event.clientY -
      (rect.top + rect.height / 2);


    gsap.to(chatRef.current, {

      x: x * 0.12,
      y: y * 0.12,

      duration: 0.35,

      ease: "power3.out",

    });

  };


  const handleChatLeave = () => {

    if (!chatRef.current) return;


    gsap.to(chatRef.current, {

      x: 0,
      y: 0,

      duration: 0.5,

      ease: "elastic.out(1, 0.5)",

    });

  };


  /*
  =========================================================
  NAVIGATION CLICK
  =========================================================
  */

  const handleNavigation = () => {
    setMenuOpen(false);
  };


  /*
  =========================================================
  RENDER
  =========================================================
  */

  return (
    <>

      {/* =================================================
                MAIN NAVBAR
            ================================================= */}

      <header
        className={`
                    site-navbar
                    ${lightMode ? "navbar-light" : ""}
                    ${menuOpen ? "navbar-menu-open" : ""}
                `}
      >


        {/* =================================================
                    LOGO
                ================================================= */}

        <a
          href="/"
          className="site-logo"
          aria-label="Home"
        >

          <span>YOURS</span>

          <span>
            STUDIOS
            <sup>™</sup>
          </span>

        </a>


        {/* =================================================
                    CENTER MENU BUTTON
                ================================================= */}

        <button
          className="menu-button"
          onClick={() =>
            setMenuOpen(
              (previous) =>
                !previous
            )
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >

          <span className="menu-button-label">
            MENU
          </span>


          <span className="menu-divider">
            |
          </span>


          <span className="menu-availability">
            available for projects in Q2 26'
          </span>


          <span className="menu-button-icon">

            {menuOpen ? (
              <X
                size={15}
                strokeWidth={1.5}
              />
            ) : (
              <>
                <span />
                <span />
              </>
            )}

          </span>

        </button>


        {/* =================================================
                    CHAT BUTTON
                ================================================= */}

        <a
          ref={chatRef}
          href="/contact"
          className="chat-button"
          onMouseMove={
            handleChatMove
          }
          onMouseLeave={
            handleChatLeave
          }
        >

          <span>
            HAVE A CHAT
          </span>


          <span className="chat-arrow">

            <ArrowRight
              size={15}
              strokeWidth={1.5}
            />

          </span>

        </a>

      </header>



      {/* =================================================
                FULLSCREEN MENU
            ================================================= */}

      <div
        ref={menuRef}
        className="fullscreen-menu"
        style={{
          display: "none",
        }}
      >


        {/* =================================================
                    DARK OVERLAY
                ================================================= */}

        <div
          ref={menuOverlayRef}
          className="menu-overlay"
        />


        {/* =================================================
                    WHITE MENU CARD
                ================================================= */}

        <div
          ref={menuCardRef}
          className="menu-card"
        >


          {/* =================================================
                        CARD TOP
                    ================================================= */}

          <div className="menu-card-top">

            <span className="menu-card-title">
              MENU
            </span>


            <button
              className="menu-close"
              onClick={() =>
                setMenuOpen(false)
              }
              aria-label="Close menu"
            >

              <X
                size={17}
                strokeWidth={1.5}
              />

            </button>

          </div>



          {/* =================================================
                        MENU LINKS
                    ================================================= */}

          <nav
            className="menu-card-links"
            aria-label="Main navigation"
          >

            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                data-text={item.label}
                ref={(element) => {
                  menuLinksRef.current[index] = element;
                }}
                onClick={handleNavigation}
              >
                <span className="menu-link-text">
                  {item.label}
                </span>
              </a>
            ))}

          </nav>



          {/* =================================================
                        CARD BOTTOM
                    ================================================= */}

          <div
            ref={menuBottomRef}
            className="menu-card-bottom"
          >


            {/* TIME */}

            <div className="menu-time">

              {new Date().toLocaleTimeString(
                [],
                {
                  hour: "numeric",
                  minute: "2-digit",
                }
              )}

            </div>



            {/* SOCIAL ICONS */}

            <div className="menu-socials">

              <a
                href="#linkedin"
                aria-label="LinkedIn"
              >
                {/* <Linkedin
                                    size={11}
                                /> */}
              </a>


              <a
                href="mailto:hello@example.com"
                aria-label="Email"
              >
                <Mail
                  size={11}
                />
              </a>


              <a
                href="#instagram"
                aria-label="Instagram"
              >
                {/* <Instagram
                                    size={11}
                                /> */}
              </a>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}