import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "../styles/Events.module.css";
import { useRouter } from "next/router";
import { useContext } from "react";
import Image from "next/image";
import { MobileContext } from "../pages/_app";

const EventsStartPage = () => {
  const router = useRouter();
  const isMobile = useContext(MobileContext);

  return (
    <>
      {isMobile && (
        <Box
          style={{ marginBottom: "11rem" }}
          className={styles.mobileContainer}
        >
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
                src="/EmergenzaEvent.png"
                alt="event"
              />
            </Box>
            <Typography
              className={styles.mobileEventsDescription}
              component="p"
              variant="p"
            >
              Our events are designed to always bring enjoyment and good vibes.
              As a fan you can expect amazing artist performances, and as an
              artist signed with us you can expect global touring deals,
              festival performances and event marketing.
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
        <Box
          style={{ marginBottom: "11rem" }}
          // style={{
          //   minHeight: "105vh",
          //   display: "flex",
          //   justifyContent: "center",
          // }}
          className={styles.container}
        >
          <Box className={styles.eventImage}>
            <Image
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className={styles.eventImage}
              src="/EmergenzaEvent.png"
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
              Our events are designed to always bring enjoyment and good vibes.
              As a fan you can expect amazing artist performances, and as an
              artist signed with us you can expect global touring deals,
              festival performances and event marketing.
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
