import { Typography, Box } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/CLIMAXMUSICLOGOv3.png";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import BurgerMenu from "../../assets/BurgerMenu.png";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link as Scroll, scroller } from "react-scroll";
import { useRouter } from "next/router";

//Header
const Header = () => {
  //State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();

  //Scroll to the Contact form
  function scrollToContact() {
    window.scrollTo({
      top: 1900,
      left: 0,
      behavior: "smooth",
    });
  }

  // Scroll to contact function for mobile
  const scrollToPageMobile = async () => {
    if (router.pathname !== "/") {
      await router.push("/");
    }
    scrollToContact();
    toggleMenu();
  };

  // Scroll to contact function for desktop
  const scrollToPageDesktop = async () => {
    if (router.pathname !== "/") {
      await router.push("/");
    }
    scrollToContact();
  };

  //Media queries
  const burgerMenuBreakpoints = {
    display: { xs: "block", sm: "block", md: "none", lg: "none", xl: "none" },
    cursor: "pointer",
  };

  const navLinksBreakpoints = {
    display: {
      xs: "none",
      sm: "none",
      md: "block",
      lg: "block",
      xl: "block",
    },
  };
  return (
    <div>
      <header className={isMenuOpen ? [styles.headerOpen] : styles.header}>
        <div className={styles.headerLeft}>
          {!isMenuOpen && (
            <Link href="/">
              <Image
                priority="true"
                className={styles.logo}
                src={logo}
                alt="Climax Music Empire"
                width={50}
              />
            </Link>
          )}
        </div>
        {!isMenuOpen && (
          <>
            <nav className={styles.headerRight}>
              <ul className={styles.navLinks}>
                <li className={styles.listItems}>
                  <Link className={styles.linkStyle} href="/">
                    <Typography
                      id="headerHome"
                      sx={navLinksBreakpoints}
                      variant="p"
                      component="p"
                    >
                      Home
                    </Typography>
                  </Link>
                </li>
                <li className={styles.listItems}>
                  <Link className={styles.linkStyle} href="/News">
                    <Typography
                      id="headerNews"
                      sx={navLinksBreakpoints}
                      variant="p"
                      component="p"
                    >
                      News
                    </Typography>
                  </Link>
                </li>
                <li className={styles.listItems}>
                  <Link className={styles.linkStyle} href="/Media">
                    <Typography
                      id="headerMedia"
                      sx={navLinksBreakpoints}
                      variant="p"
                      component="p"
                    >
                      Media
                    </Typography>
                  </Link>
                </li>
                {router.pathname !== "/" && (
                  <li
                    onClick={scrollToPageDesktop}
                    className={styles.listItems}
                  >
                    <Typography
                      sx={navLinksBreakpoints}
                      variant="p"
                      component="p"
                    >
                      Contact
                    </Typography>
                  </li>
                )}
                {router.pathname === "/" && (
                  <li className={styles.listItems}>
                    <Scroll
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={700}
                    >
                      <Typography
                        sx={navLinksBreakpoints}
                        variant="p"
                        component="p"
                      >
                        Contact
                      </Typography>
                    </Scroll>
                  </li>
                )}

                <li className={styles.listItems}>
                  <Link className={styles.linkStyle} href="/Events">
                    <Typography
                      id="headerEvents"
                      sx={navLinksBreakpoints}
                      variant="p"
                      component="p"
                    >
                      Events
                    </Typography>
                  </Link>
                </li>
                <li className={styles.listItems}>
                  <Link className={styles.linkStyle} href="/Artists">
                    <Typography
                      id="headerArtists"
                      sx={navLinksBreakpoints}
                      variant="p"
                      component="p"
                    >
                      Artists
                    </Typography>
                  </Link>
                </li>
              </ul>
              <Box onClick={toggleMenu} sx={burgerMenuBreakpoints}>
                <Image src={BurgerMenu} alt="Menu" width={40} />
              </Box>
            </nav>
          </>
        )}
        {isMenuOpen && (
          <>
            <nav className={styles.headerRight}>
              <CloseIcon
                onClick={toggleMenu}
                className={styles.closeIcon}
              ></CloseIcon>
              <ul className={styles.navLinks}>
                <li className={styles.listItemsOpen}>
                  <Link
                    onClick={toggleMenu}
                    className={styles.linkStyle}
                    href="/"
                  >
                    <Typography variant="p" component="p">
                      Home
                    </Typography>
                  </Link>
                </li>
                <li className={styles.listItemsOpen}>
                  <Link
                    onClick={toggleMenu}
                    className={styles.linkStyle}
                    href="/News"
                  >
                    <Typography variant="p" component="p">
                      News
                    </Typography>
                  </Link>
                </li>
                <li className={styles.listItemsOpen}>
                  <Link
                    onClick={toggleMenu}
                    className={styles.linkStyle}
                    href="/Media"
                  >
                    <Typography variant="p" component="p">
                      Media
                    </Typography>
                  </Link>
                </li>
                {router.pathname !== "/" && (
                  <li
                    onClick={scrollToPageMobile}
                    className={styles.listItemsOpen}
                  >
                    <Typography variant="p" component="p">
                      Contact
                    </Typography>
                  </li>
                )}
                {router.pathname === "/" && (
                  <li className={styles.listItemsOpen}>
                    <Scroll
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={700}
                    >
                      <Typography
                        onClick={toggleMenu}
                        variant="p"
                        component="p"
                      >
                        Contact
                      </Typography>
                    </Scroll>
                  </li>
                )}
                <li className={styles.listItemsOpen}>
                  <Link
                    onClick={toggleMenu}
                    className={styles.linkStyle}
                    href="/Events"
                  >
                    <Typography variant="p" component="p">
                      Events
                    </Typography>
                  </Link>
                </li>
                <li className={styles.listItemsOpen}>
                  <Link
                    onClick={toggleMenu}
                    className={styles.linkStyle}
                    href="/Artists"
                  >
                    <Typography variant="p" component="p">
                      Artists
                    </Typography>
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </header>
    </div>
  );
};

export default Header;
