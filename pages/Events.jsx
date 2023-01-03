import { Typography, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


const Events = () => {
  return (
    <Box style={{width: '100%', height: '100%', paddingTop: '6rem'}}>
      <Box style={{display: 'flex'}}>
        <Typography variant="h2" component="h2">EVENT</Typography>
        <Typography variant="h2" component="h2" style={{ color: "#e2b945" }}>S</Typography>
      </Box>

      <Box style={{display: 'flex'}}>
        <Image src="/event.png" alt="event image" height= {330} width= {300} />
        <Box>
          <Typography variant="p" component="p" style={{marginLeft: '2rem', fontSize: '2.5rem' }}>Emergenza Live</Typography>
          <Box style={{display: 'flex'}}>
            <FontAwesomeIcon style={{ color: "#e2b945", marginLeft: '2rem', marginRight: '.8rem' }} icon={faLocationDot} />
            <Typography variant="p" component="p">Sticky finger</Typography>
          </Box>
          <Box style={{display: 'flex'}}>
            <FontAwesomeIcon style={{ color: "#e2b945", marginLeft: '2rem', marginRight: '.8rem' }} icon={faClock} />
            <Typography variant="p" component="p">18:00</Typography>
          </Box>
          <Box style={{display: 'flex'}}>
            <FontAwesomeIcon style={{ color: "#e2b945", marginLeft: '2rem', marginRight: '.8rem' }} icon={faCalendar} />
            <Typography variant="p" component="p">23 Sept 2022</Typography>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};
export default Events;
