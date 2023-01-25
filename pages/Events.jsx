import { Typography, Box } from "@mui/material";
import Image from "next/image";
import styles from "../styles/AllEvents.module.css";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SEO from "@bradgarropy/next-seo";

const events1MockData = [
  {
    image: "/EmergenzaEvent.png",
    name: "Emergenza",
    name1: "Live",
    location: "Sticky finger",
    time: "18:00",
    date: "23 Sept 2022",
  },
];

const eventPageContainer = {
  display: { xs: "flex" },
  flexDirection: { xs: "column" },
  alignItems: { xs: "center", md: "flex-start" },
  marginLeft: { md: "2rem" },
};

const eventInformationContainer = {
  flexDirection: { xs: "column", md: "row" },
};

const secondEventInformationContainer = {
  marginRight: { xs: "0", md: "4rem" },
  flexDirection: { xs: "column", md: "row-reverse" },
};

const eventTitleBoxMediaQueries = {
  marginBottom: { xs: ".5rem", md: "0" },
  marginTop: { xs: "1rem", md: "0" },
};

const informationMediaQueries = {
  display: { xs: "flex" },
  flexDirection: { xs: "column" },
  alignItems: "flex-start",
  marginBottom: { xs: "1rem", md: "0" },
  marginRight: {xs: 0, md: '1rem'}
};

const h1MediaQueries = {
  fontSize: { xs: "2.5rem", sm: "4rem" },
};

const Events = () => {
  return (
    <Box sx={eventPageContainer} className={styles.eventPageContainer}>
      <SEO
        title="Events"
        description="All events that Climax Music Empire and their artists is attending"
      />
      <Box className={styles.titleBox}>
        <Typography sx={h1MediaQueries} variant="h1" component="h1">
          EVENT
        </Typography>
        <Typography variant="h2" component="h2" style={{ color: "#e2b945" }}>
          S
        </Typography>
      </Box>

      <Box className={styles.eventsBoxes}>
        {events1MockData.map((events) => (
          <Box
            sx={eventInformationContainer}
            key={events.name}
            className={styles.eventInformationContainer}
          >
            <Image
              src={events.image}
              alt="event image"
              height={330}
              width={330}
            />
            <Box sx={informationMediaQueries}>
              <Box sx={eventTitleBoxMediaQueries} style={{ display: "flex" }}>
                <Typography
                  variant="p"
                  component="p"
                  className={styles.eventTitle}
                >
                  {events.name}
                </Typography>
                <Typography
                  variant="p"
                  component="p"
                  className={styles.eventTitleYellow}
                >
                  {events.name1}
                </Typography>
              </Box>
              <Box style={{ display: "flex" }}>
                <LocationOnIcon className={styles.eventIcons} />
                <Typography variant="p" component="p">
                  {events.location}
                </Typography>
              </Box>
              <Box style={{ display: "flex" }}>
                <WatchLaterIcon className={styles.eventIcons} />
                <Typography variant="p" component="p">
                  {events.time}
                </Typography>
              </Box>
              <Box style={{ display: "flex" }}>
                <CalendarTodayIcon className={styles.eventIcons} />
                <Typography variant="p" component="p">
                  {events.date}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Events;
