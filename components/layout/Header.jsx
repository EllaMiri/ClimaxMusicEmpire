import { Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/CLIMAXMUSICLOGOv3.png";
import styles from "../../styles/Header.module.css";

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
            <Typography variant="p" component="p">
              News
            </Typography>
            {/* <a href="#"></a>Home */}
          </li>
          <li id="about-me" className={styles.listItems}>
            <Typography variant="p" component="p">
              Gallery
            </Typography>
          </li>
          <li id="skills" className={styles.listItems}>
            <Typography variant="p" component="p">
              Contact
            </Typography>
          </li>
          <li id="projects" className={styles.listItems}>
            <Typography variant="p" component="p">
              Events
            </Typography>
          </li>
          <li id="contact" className={styles.listItems}>
            <Typography variant="p" component="p">
              Artists
            </Typography>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
