import { Typography, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const eventsMockData = [
  {
    image: '/event.png',
    name: 'Emergenza',
    name1: 'Live',
    location: 'Sticky finger',
    time: '18:00',
    date: '23 Sept 2022'
  },
  {
    image: '/event.png',
    name: 'Emergenza',
    name1: 'Live',
    location: 'Sticky finger',
    time: '18:00',
    date: '23 Sept 2022'
  }
]

const eventPageContainer = {
  display: {xs: 'flex'},
  flexDirection: {xs: 'column'},
  alignItems: {xs: 'center', md: 'flex-start'}
}

const eventInformationContainer = {
  flexDirection: {xs: 'column', md: 'row'},
}

const eventTitleBoxMediaQueries = {
  marginBottom: {xs: '.5rem', md: '0'},
  marginTop: {xs: '1rem', md: '0'}
}

const informationMediaQueries = {
  display: {xs: 'flex'},
  flexDirection: {xs: 'column'},
  alignItems: 'flex-start'
}

const Events = () => {
  return (
    <Box sx={eventPageContainer} style={{width: '100%', height: '100%', paddingTop: '6rem'}}>
      <Box style={{display: 'flex', marginBottom: '2rem'}}>
        <Typography variant="h2" component="h2">EVENT</Typography>
        <Typography variant="h2" component="h2" style={{ color: "#e2b945" }}>S</Typography>
      </Box>
      {eventsMockData.map((events) => (
        <Box sx={eventInformationContainer} key={events.name} style={{display: 'flex', marginBottom: '1.5rem', alignItems: 'center'}}>
        <Image src={events.image} alt="event image" height= {330} width= {300} />
        <Box sx={informationMediaQueries}>
          <Box sx={eventTitleBoxMediaQueries} style={{display: 'flex'}}>
            <Typography variant="p" component="p" style={{marginLeft: '2rem', fontSize: '2.5rem' }}>{events.name}</Typography>
            <Typography variant="p" component="p" style={{marginLeft: '.8rem', fontSize: '2.5rem', color: "#e2b945" }}>{events.name1}</Typography>
          </Box>
        <Box style={{display: 'flex'}}>
        <FontAwesomeIcon style={{ color: "#e2b945", marginLeft: '2rem', marginRight: '.8rem' }} icon={faLocationDot} />
        <Typography variant="p" component="p">{events.location}</Typography>
        </Box>
        <Box style={{display: 'flex'}}>
        <FontAwesomeIcon style={{ color: "#e2b945", marginLeft: '2rem', marginRight: '.8rem' }} icon={faClock} />
        <Typography variant="p" component="p">{events.time}</Typography>
        </Box>
        <Box style={{display: 'flex'}}>
        <FontAwesomeIcon style={{ color: "#e2b945", marginLeft: '2rem', marginRight: '.8rem' }} icon={faCalendar} />
        <Typography variant="p" component="p">{events.date}</Typography>
        </Box>
        </Box>
        </Box>
        )
        )}


    </Box>
  );
};
export default Events;
