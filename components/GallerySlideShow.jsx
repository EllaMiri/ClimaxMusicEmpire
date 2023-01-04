import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Modal, Box } from "@mui/material";
import { useState, useEffect } from "react";
import styles from '../styles/GallerySlideShow.module.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  width: {xs: '90%', xl: '60%'},
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MediaSlideShow = () => {
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

  let images = [
    {
      image: '/icekid-ds.png',
      id: 1
    },
    {
      image: '/icekid-gallery.png',
      id: 2
    },
    {
      image: '/icekid-gallery1.png',
      id: 3
    },
    // {
    //   image: '/icekid-gallery1.png',
    //   id: 4
    // },
    // {
    //   image: '/icekid-gallery.png',
    //   id: 5
    // },
    // {
    //   image: '/icekid-ds.png',
    //   id: 6
    // }
    
     
  ]
  let images2 = [
    {
      image: '/icekid-ds.png',
      id: 1
    },
    {
      image: '/icekid-gallery1.png',
      id: 2
    },
    {
      image: '/icekid-gallery.png',
      id: 3
    },
    // {
    //   image: '/icekid-gallery1.png',
    //   id: 4
    // },
    // {
    //   image: '/icekid-gallery.png',
    //   id: 5
    // },
    // {
    //   image: '/icekid-ds.png',
    //   id: 6
    // }
    
     
  ]

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
<div>
  {!isMobile && 
  <div style={{margin: 'auto'}}>
  <Fade>
    <div style={{display: 'flex', justifyContent: 'center', paddingRight: '1rem', paddingLeft: '1rem'}}>
      {images.map((image) =>
    
   
    <img key={image.id} src={image.image} alt="" />
    
    )}
       </div>
     <div  style={{display: 'flex', justifyContent: 'center', paddingRight: '1rem', paddingLeft: '1rem'}}>
      {images2.map((image) =>
    
   
    <img key={image.id} src={image.image} alt="" />
    
    )}
    </div>
    </Fade>
    </div>

  }
  <div/>

  {isMobile &&
  <div className="slide-container">
  <Fade>
    <div className="each-fade" style={{display: 'flex', justifyContent: 'center'}}>
      <img src={images[0]} style={{height: 'auto', width: '70%'}} onClick={handleOpen}/>
    </div>
    <div className="each-fade" style={{display: 'flex', justifyContent: 'center'}}>
      <img src={images[1]} style={{height: 'auto', width: '70%'}}/>
    </div>
    <div className="each-fade" style={{display: 'flex', justifyContent: 'center'}}>
      <img src={images[2]} style={{height: 'auto', width: '70%'}}/>
    </div>
    </Fade>
  </div>
  }
    
  {!isMobile &&
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
    <div className="slide-container">
    <Fade>
      <div className="each-fade" style={{display: 'flex', justifyContent: 'center', height: '100%', width: 'auto'}}>
        <img src={images[0]} style={{height: 'auto', width: '50%'}}/>
      </div>
      <div className="each-fade" style={{display: 'flex', justifyContent: 'center', height: '100%', width: 'auto'}}>
        <img src={images[1]} style={{height: 'auto', width: '50%'}}/>
      </div>
      <div className="each-fade" style={{display: 'flex', justifyContent: 'center', height: '100%', width: 'auto'}}>
        <img src={images[2]} style={{height: 'auto', width: '50%'}}/>
      </div>
      </Fade>
     </div>
      </Box>
    </Modal>
  }
  
</div>
    
  )}
export default MediaSlideShow;