import Carousel from 'react-material-ui-carousel'
import { Box } from "@mui/material";


const GallerySlideShow = () => {
  let images = [
    {
      image1: '/icekid-ds.png'
    },
    {
      image2: '/icekid-gallery.png'
    },
    {
      image3: '/icekid-gallery1.png'
    }
  ]

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleStepChange = (step: number) => {
  //   setActiveStep(step);
  // };

  return (
    <Box>
    <Carousel>
      { images.map((item,i) => <Box key={i} item={item.images} /> )}
    </Carousel>
    </Box>
  )
}

export default GallerySlideShow;