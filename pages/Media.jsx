import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import MediaSlideShow from "../components/GallerySlideShow";

const Media = () => {
  return (
    <Box style={{paddingTop: '6rem', marginLeft: '2rem'}}>
      <Box style={{display: 'flex'}}>
        <Typography component="h2" variant="h2">
          MEDI
        </Typography>
        <Typography
          style={{color: '#e2b945'}}
          component="h2"
          variant="h2"
        >
          A
        </Typography>
      </Box>
      <Box style={{display: 'flex', flexDirection: 'row-reverse'}}>
        <Box style={{width: '50%', display: 'flex', justifyContent: 'center'}}>
          <Image src='/galleryImage.png' alt="artist image" height={550} width={450} />
        </Box>
        <Box style={{width: '50%', display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
          <Typography variant='p' component='p'>Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</Typography>
        </Box>
      </Box>
      <Box style={{display: 'flex', justifyContent: 'center'}}>
        <FontAwesomeIcon icon={faAngleDown} style={{color: '#e2b945', fontSize: '10rem'}} />
      </Box>
      <MediaSlideShow />
    </Box>

  );
};

export default Media;
