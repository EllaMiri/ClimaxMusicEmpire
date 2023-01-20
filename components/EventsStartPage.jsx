import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../styles/Events.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import Image from "next/image";
import { MobileContext } from "../pages/_app";

const EventsStartPage = () => {
  const router = useRouter();
  const isMobile = useContext(MobileContext)

  return (
    <>
      {isMobile && (
        <Box className={styles.mobileContainer}>
          <Box className={styles.mobileTextContainer}>
            <Box className={styles.titleContainer}>
              <Typography variant="h2" component="h2">
                EVENT
              </Typography>
              <Typography className={styles.s} variant="h2" component="h2">
                S
              </Typography>
            </Box>
            <Box className={styles.secondTitleBox}>
              <Typography
                variant="span"
                component="span"
                className={styles.secondTitle1}
              >
                Emergenza
              </Typography>
              <Typography
                variant="span"
                component="span"
                className={styles.secondTitle2}
              >
                Live
              </Typography>
            </Box>
            <Box className={styles.eventImage}>
              <Image
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                className={styles.eventImage}
                src="/eventStartPage.png"
                alt="event"
              />
            </Box>
            <Typography
              className={styles.mobileEventsDescription}
              component="p"
              variant="p"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Box>
              <Button
                aria-label="scroll to top"
                onClick={() => router.push("/Events")}
                className={styles.mobileMoreEventsBtn}
                variant="contained"
                color="secondary"
              >
                More events
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      {!isMobile && (
        <Box className={styles.container}>
          <Box className={styles.eventImage}>
            <Image
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className={styles.eventImage}
              src="/eventStartPage.png"
              alt="event"
            />
          </Box>

          <Box className={styles.textContainer}>
            <Box className={styles.titleContainer}>
              <Typography variant="h2" component="h2">
                EVENT
              </Typography>
              <Typography className={styles.s} variant="h2" component="h2">
                S
              </Typography>
            </Box>
            <Box className={styles.secondTitleBox}>
              <Typography
                variant="span"
                component="span"
                className={styles.secondTitle1}
              >
                Emergenza
              </Typography>
              <Typography
                variant="span"
                component="span"
                className={styles.secondTitle2}
              >
                Live
              </Typography>
            </Box>

            <Typography
              className={styles.eventsDescription}
              component="p"
              variant="p"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Box>
              <Button
                id="moreEventsBtn"
                onClick={() => router.push("/Events")}
                className={styles.moreEventsBtn}
                variant="contained"
                color="secondary"
              >
                More events
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default EventsStartPage;
