import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Modal, Box } from "@mui/material";
import { useState, useEffect } from "react";
import styles from "../styles/GallerySlideShow.module.css";
import images from "./data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "black",
  width: { xs: "90%", xl: "60%" },
  border: "2px solid #e2b945",
  boxShadow: 24,
  p: 4
};

const MediaSlideShow = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (item, index) => {
    setOpen(true);
    setCurrentIndex(index);
    setClickedImage(item.image);

  };
  const handleClose = () => setOpen(false);

  const handelRotationRight = () => {
    const totalLength = images.images.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = images.images[0].image;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = images.images.filter((item) => {
      return images.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = images.images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = images.images[totalLength - 1].image;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = images.images.filter((item) => {
      return images.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

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
    <div>
      {!isMobile &&
        <div style={{ margin: "auto" }}>
          <Fade>
            <div className={styles.desktopImageContainer}>
              {images.images.map((item, index) => (
                <div key={index}>
                  <img
                    className={styles.imageMediaQueries}
                    src={item.image}
                    alt={item.id}
                    onClick={() => handleOpen(item, index)}
                  />
                </div>
              ))}
            </div>
            <div className={styles.desktopImageContainer}>
              {images.images2.map((item, index) => (
                  <div key={index}>
                    <img src={item.image} className={styles.imageMediaQueries} alt=""
                         onClick={() => handleOpen(item, index)} />
                  </div>
                )
              )}
            </div>
          </Fade>
        </div>
      }
      <div />

      {isMobile &&
        <div className="slide-container">
          <Fade>
            {images.images2.map((item, index) => (
                <div key={index} className={styles.imageMobileContainer}>
                  <img src={item.image} className={styles.imageMobileMediaQueries} alt=""
                       onClick={() => handleOpen(item, index)} />
                </div>
              )
            )}
          </Fade>
        </div>
      }

      {!isMobile && clickedImage &&
        <Modal
          open={open}
          clickedImg={clickedImage}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImage}
          handelRotationLeft={handelRotationLeft}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="slide-container">
              <div key={images.images.id} className={styles.modalImageContainer}
              >
                <img src={clickedImage} alt="bigger picture" className={styles.modalImage} />
              </div>
              <div className={styles.arrowIconsContainer}>
                <div onClick={handelRotationLeft} className="overlay-arrows_left">
                  <FontAwesomeIcon
                    className={styles.arrowIcons}
                    icon={faArrowLeft}
                  />
                </div>
                <div onClick={handelRotationRight} className="overlay-arrows_right">
                  <FontAwesomeIcon
                    className={styles.arrowIcons}
                    icon={faArrowRight}
                  />
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      }
    </div>

  );
};
export default MediaSlideShow;

