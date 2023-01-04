import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Button, Typography, Modal, Box } from "@mui/material";
import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MediaSlideShow = () => {
  let images = [
    
     '/icekid-ds.png', '/icekid-gallery.png','/icekid-gallery1.png'
  ]

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
  <div className="slide-container">
    <Fade>
      <div className="each-fade" style={{display: 'flex', justifyContent: 'center'}}>
        <img src={images[0]} style={{height: 'auto', width: '33%'}} onClick={handleOpen}/>
        <img src={images[1]} style={{height: 'auto', width: '33%', paddingRight: '1rem', paddingLeft: "1rem"}}/>
        <img src={images[2]} style={{height: 'auto', width: '33%'}}/>
      </div>
      <div className="each-fade" style={{display: 'flex', justifyContent: 'center'}}>
        <img src={images[1]} style={{height: 'auto', width: '33%'}}/>
        <img src={images[1]} style={{height: 'auto', width: '33%', paddingRight: '1rem', paddingLeft: "1rem"}}/>
        <img src={images[1]} style={{height: 'auto', width: '33%'}}/>
      </div>
      <div className="each-fade" style={{display: 'flex', justifyContent: 'center'}}>
        <img src={images[2]} style={{height: 'auto', width: '33%'}}/>
        <img src={images[2]} style={{height: 'auto', width: '33%', paddingRight: '1rem', paddingLeft: "1rem"}}/>
        <img src={images[2]} style={{height: 'auto', width: '33%'}}/>
      </div>
    </Fade>
  </div>

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
        <img src={images[0]} style={{height: 'auto', width: '50%'}} onClick={handleOpen}/>
   
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
    </div>
    
  )}
export default MediaSlideShow;