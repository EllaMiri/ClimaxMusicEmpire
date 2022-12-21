import { Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/CLIMAXMUSICLOGOv3.png";
import styles from "../../styles/Header.module.css";
import Link from "next/link";
import { style } from "@mui/system";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        {/* <span id="burgermenu" class="material-icons burger-menu"> 
          {" "}
          menu{" "}
        </span> */}
        <Image
          className={styles.logo}
          src={logo}
          alt="Climax Music Empire"
          width={50}
        />
      </div>
      <nav className={styles.headerRight}>
        <ul className={styles.navLinks}>
          <li id="home" className={styles.listItems}>
            <Link className={styles.linkStyle} href="/News">
              <Typography variant="p" component="p">
                News
              </Typography>
            </Link>
            {/* <a href="#"></a>Home */}
          </li>
          <li id="about-me" className={styles.listItems}>
            <Link className={styles.linkStyle} href="/Gallery">
              <Typography variant="p" component="p">
                Gallery
              </Typography>
            </Link>
          </li>
          <li id="skills" className={styles.listItems}>
            {/* REACT SCROLL LINK TO CONTACTS HERE */}
            <Typography variant="p" component="p">
              Contact
            </Typography>
          </li>
          <li id="projects" className={styles.listItems}>
            <Link className={styles.linkStyle} href="/Events">
              <Typography variant="p" component="p">
                Events
              </Typography>
            </Link>
          </li>
          <li id="contact" className={styles.listItems}>
            <Link className={styles.linkStyle} href="/Artists">
              <Typography variant="p" component="p">
                Artists
              </Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
