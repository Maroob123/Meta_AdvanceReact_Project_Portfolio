import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:maroobsyed@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/Maroob123",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/maroob-syed/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@maroobsyed",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const header = headerRef.current;

      if (header) {
        if (currentScrollY > prevScrollY) {
          // Scrolling down
          header.style.transform = "translateY(-200px)";
        } else {
          // Scrolling up
          header.style.transform = "translateY(0)";
        }

        prevScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="translateY(0)"
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="10"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={8}>
              {socials.map(function ({ url, icon }) {
                return (
                  <a href={url} key={url}>
                    <FontAwesomeIcon icon={icon} size="2x" />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="#contactme" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
