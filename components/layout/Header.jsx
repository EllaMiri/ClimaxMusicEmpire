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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();

  const scrollTarget = (target) =>
    scroller.scrollTo(target, {
      smooth: true,
      duration: 700,
      offset: 670,
      spy: true,
    });

  const scrollToPage = async (target) => {
    if (router.pathname !== "/") {
      await router.push("/");
      scrollTarget(target);
    }
    scrollTarget(target);
  };

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
                    onClick={() => scrollToPage("contact")}
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
                style={{
                  color: "white",
                  fontSize: "2.5rem",
                  cursor: "pointer",
                }}
              ></CloseIcon>
              <ul className={styles.navLinks}>
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
                <li className={styles.listItemsOpen}>
                  {/* REACT SCROLL LINK TO CONTACTS HERE */}
                  <Typography variant="p" component="p">
                    Contact
                  </Typography>
                </li>
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
