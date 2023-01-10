import { Typography, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import styles from "../styles/Events.module.css";

const events1MockData = [
  {
    image: "/event.png",
    name: "Emergenza",
    name1: "Live",
    location: "Sticky finger",
    time: "18:00",
    date: "23 Sept 2022",
  },
];

const events2MockData = [
  {
    image: "/event.png",
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
};

const Events = () => {
  return (
    <Box sx={eventPageContainer} className={styles.eventPageContainer}>
      <Box className={styles.titleBox}>
        <Typography variant="h1" component="h1" style={{ fontSize: "4rem" }}>
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
              width={300}
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
                <FontAwesomeIcon
                  className={styles.eventIcons}
                  icon={faLocationDot}
                />
                <Typography variant="p" component="p">
                  {events.location}
                </Typography>
              </Box>
              <Box style={{ display: "flex" }}>
                <FontAwesomeIcon className={styles.eventIcons} icon={faClock} />
                <Typography variant="p" component="p">
                  {events.time}
                </Typography>
              </Box>
              <Box style={{ display: "flex" }}>
                <FontAwesomeIcon
                  className={styles.eventIcons}
                  icon={faCalendar}
                />
                <Typography variant="p" component="p">
                  {events.date}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
        {events2MockData.map((events) => (
          <Box
            sx={secondEventInformationContainer}
            key={events.name}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image
              src={events.image}
              alt="event image"
              height={330}
              width={300}
              style={{ marginLeft: "1rem" }}
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
                <FontAwesomeIcon
                  className={styles.eventIcons}
                  icon={faLocationDot}
                />
                <Typography variant="p" component="p">
                  {events.location}
                </Typography>
              </Box>
              <Box style={{ display: "flex" }}>
                <FontAwesomeIcon className={styles.eventIcons} icon={faClock} />
                <Typography variant="p" component="p">
                  {events.time}
                </Typography>
              </Box>
              <Box style={{ display: "flex" }}>
                <FontAwesomeIcon
                  className={styles.eventIcons}
                  icon={faCalendar}
                />
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
