import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import MediaSlideShow from "../components/MediaSlideShow";
import { useState, useEffect } from "react";
import styles from "../styles/Media.module.css";

const Media = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
    const handleWindowResize = () => {
      window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      {!isMobile && (
        <Box style={{ paddingTop: "6rem" }}>
          <Box style={{ display: "flex" }}>
            <Box
              style={{
                display: "flex",
                marginBottom: "1rem",
                marginLeft: "3rem",
              }}
            >
              <Typography component="h1" variant="h1" style={{fontSize: '4rem'}}>
                MEDI
              </Typography>
              <Typography
                style={{ color: "#e2b945" }}
                component="h2"
                variant="h2"
              >
                A
              </Typography>
            </Box>
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Box style={{ width: "50%" }}>
              <Typography
                style={{ marginLeft: "3rem" }}
                variant="p"
                component="p"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
            <Box
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                className={styles.image}
                src="/galleryImage.png"
                alt="artist image"
              />
            </Box>
          </Box>

          <Box style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ color: "#e2b945", fontSize: "10rem" }}
            />
          </Box>
          <MediaSlideShow />
        </Box>
      )}
      {isMobile && (
        <Box style={{ paddingTop: "6rem" }}>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box style={{ display: "flex", marginBottom: "1rem" }}>
              <Typography component="h2" variant="h2">
                MEDI
              </Typography>
              <Typography
                style={{ color: "#e2b945" }}
                component="h2"
                variant="h2"
              >
                A
              </Typography>
            </Box>
            <Box
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                layout="intrinsic"
                src="/galleryImage.png"
                alt="artist image"
                height={450}
                width={350}
              />
            </Box>
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Box style={{ width: "90%", marginTop: "1rem" }}>
              <Typography
                style={{ textAlign: "center" }}
                variant="p"
                component="p"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Box>

          <Box style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ color: "#e2b945", fontSize: "10rem" }}
            />
          </Box>
          <MediaSlideShow />
        </Box>
      )}
    </>
  );
};

export default Media;
