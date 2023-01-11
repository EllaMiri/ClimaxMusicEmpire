import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import styles from "../../styles/DetailedArtist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import IcekidDsDiscography from "../../components/IcekidDsDiscography";
import BoiOusDiscography from "../../components/BoiOusDiscography";
import PrincipalOfMindsDiscography from "../../components/PrincipalOfMindsDiscography";
import FreshgeeDiscography from "../../components/FreshgeeDiscography";

const DetailedArtist = () => {
  const router = useRouter();
  const artist = router.query.artist;

  const boiOusMockData = [
    {
      name: "BOI",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "OUS",

      image: "/boi-ous.png",
      instagram: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faInstagram}
        />
      ),
      spotify: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faSpotify}
        />
      ),
      youtube: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faYoutube}
        />
      ),
    },
  ];
  const icekidDsMockData = [
    {
      name: "ICEKID",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "DS",

      image: "/icekid-ds.png",
      instagram: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faInstagram}
        />
      ),
      spotify: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faSpotify}
        />
      ),
      youtube: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faYoutube}
        />
      ),
    },
  ];
  const freshgeeMockData = [
    {
      name: "FRESH",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "GEE",

      image: "/freshgee1.png",
      instagram: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faInstagram}
        />
      ),
      spotify: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faSpotify}
        />
      ),
      youtube: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faYoutube}
        />
      ),
    },
  ];
  const principalOfMindsMockData = [
    {
      name: "PRINCIPAL OF",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "MINDS",

      image: "/PrincipalOfMinds.png",
      instagram: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faInstagram}
        />
      ),
      spotify: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faSpotify}
        />
      ),
      youtube: (
        <FontAwesomeIcon
          style={{ fontSize: "2rem", color: "#e2b945" }}
          icon={faYoutube}
        />
      ),
    },
  ];

  const ArtistBoxMediaQueries = {
    flexDirection: { xs: "column", md: "row" },
  };

  // const DescriptionBoxMediaQueries = {
  //   width: { xs: "90%", md: "50%" },
  //   textAlign: { xs: "center", md: "left" },
  // };

  // const TitleImageBoxMediaQueries = {
  //   display: { xs: "flex" },
  //   flexDirection: { xs: "column" },
  //   alignItems: { xs: "center", md: "flex-start" },
  //   marginBottom: { xs: "2rem", md: "0" },
  // };

  // const titleBoxMediaQueries = {
  //   marginBottom: { xs: "1rem", md: "0" },
  // };

  const ArtistNameMediaQueries = {
    justifyContent: { xs: "center", md: "flex-start" },
    flexWrap: "wrap",
    marginLeft: { xs: "0", md: "3rem" },
    marginBottom: { xs: ".5rem" },
  };

  const DescriptionMediaQueries = {
    textAlign: { xs: "center", md: "left" },
    marginTop: { xs: "1rem" },
  };

  return (
    <Box>
      {artist === "PrincipalOfMinds" &&
        principalOfMindsMockData.map((principalOfMinds) => (
          <Box className={styles.detailedArtistBox} key={principalOfMinds.name}>
            <Box sx={ArtistNameMediaQueries} className={styles.flex}>
              <Typography
                variant="h1"
                component="h1"
                style={{ fontSize: "4rem" }}
              >
                {principalOfMinds.name}
              </Typography>
              <Typography
                className={styles.yellowNamePart}
                variant="h2"
                component="h2"
              >
                {principalOfMinds.name1}
              </Typography>
            </Box>
            <Box sx={ArtistBoxMediaQueries} className={styles.artistBox}>
              <img
                style={{ width: "25%" }}
                src={principalOfMinds.image}
                alt="pricipal of minds image"
              />
              <Typography
                sx={DescriptionMediaQueries}
                style={{ width: "60%" }}
                variant="p"
                component="p"
              >
                {principalOfMinds.description}
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "32%",
                marginTop: "1rem",
              }}
            >
              <Link
                href="https://www.instagram.com/principalofminds/"
                target="_blank"
              >
                {principalOfMinds.instagram}
              </Link>
              <Link
                href="https://open.spotify.com/artist/4IyQi8biIOt8i8AgXAnXqX?si=5GZeyqdkQdeteInIeuplZw"
                target="_blank"
              >
                {principalOfMinds.spotify}
              </Link>
              <Link
                href="https://www.youtube.com/@principalofminds"
                target="_blank"
              >
                {principalOfMinds.youtube}
              </Link>
            </Box>
            <PrincipalOfMindsDiscography />
          </Box>
        ))}
      {artist === "BoiOus" &&
        boiOusMockData.map((boiOus) => (
          <Box className={styles.detailedArtistBox} key={boiOus.name}>
            <Box sx={ArtistNameMediaQueries} className={styles.flex}>
              <Typography
                variant="h1"
                component="h1"
                style={{ fontSize: "4rem" }}
              >
                {boiOus.name}
              </Typography>
              <Typography
                className={styles.yellowNamePart}
                variant="h2"
                component="h2"
              >
                {boiOus.name1}
              </Typography>
            </Box>
            <Box sx={ArtistBoxMediaQueries} className={styles.artistBox}>
              <img
                style={{ width: "25%" }}
                src={boiOus.image}
                alt="boi ous image"
              />
              <Typography
                sx={DescriptionMediaQueries}
                style={{ width: "60%" }}
                variant="p"
                component="p"
              >
                {boiOus.description}
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "32%",
                marginTop: "1rem",
              }}
            >
              <Link
                href="https://www.instagram.com/boi0usgram/"
                target="_blank"
              >
                {boiOus.instagram}
              </Link>
              <Link
                href="https://open.spotify.com/artist/7wtxsPSvGlsHqTyrNzc44t?si=WfmzAPD8Ryiwd_6fEU5uhg"
                target="_blank"
              >
                {boiOus.spotify}
              </Link>
              <Link href="https://www.youtube.com/@boious1836" target="_blank">
                {boiOus.youtube}
              </Link>
            </Box>
            <BoiOusDiscography />
          </Box>
        ))}
      {artist === "IcekidDs" &&
        icekidDsMockData.map((icekidDs) => (
          <Box className={styles.detailedArtistBox} key={icekidDs.name}>
            <Box sx={ArtistNameMediaQueries} className={styles.flex}>
              <Typography
                variant="h1"
                component="h1"
                style={{ fontSize: "4rem" }}
              >
                {icekidDs.name}
              </Typography>
              <Typography
                className={styles.yellowNamePart}
                variant="h2"
                component="h2"
              >
                {icekidDs.name1}
              </Typography>
            </Box>
            <Box sx={ArtistBoxMediaQueries} className={styles.artistBox}>
              <img
                style={{ width: "25%" }}
                src={icekidDs.image}
                alt="icekid image"
              />
              <Typography
                sx={DescriptionMediaQueries}
                style={{ width: "60%" }}
                variant="p"
                component="p"
              >
                {icekidDs.description}
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "32%",
                marginTop: "1rem",
              }}
            >
              <Link href="https://www.instagram.com/icekid_ds/" target="_blank">
                {icekidDs.instagram}
              </Link>
              <Link
                href="https://open.spotify.com/artist/6g0Bm71efm8afdMscw0VjQ?si=C6YLhhY6Rn-aSvsXbqzdsA"
                target="_blank"
              >
                {icekidDs.spotify}
              </Link>
              <Link
                href="https://www.youtube.com/@icekidds6432"
                target="_blank"
              >
                {icekidDs.youtube}
              </Link>
            </Box>
            <IcekidDsDiscography />
          </Box>
        ))}
      {artist === "Freshgee" &&
        freshgeeMockData.map((freshgee) => (
          <Box className={styles.detailedArtistBox} key={freshgee.name}>
            <Box sx={ArtistNameMediaQueries} className={styles.flex}>
              <Typography
                variant="h1"
                component="h1"
                style={{ fontSize: "4rem" }}
              >
                {freshgee.name}
              </Typography>
              <Typography
                style={{ color: "#e2b945" }}
                variant="h2"
                component="h2"
              >
                {freshgee.name1}
              </Typography>
            </Box>
            <Box sx={ArtistBoxMediaQueries} className={styles.artistBox}>
              <img
                style={{ width: "25%" }}
                src={freshgee.image}
                alt="freshgee image"
              />
              <Typography
                sx={DescriptionMediaQueries}
                style={{ width: "60%" }}
                variant="p"
                component="p"
              >
                {freshgee.description}
              </Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "32%",
                marginTop: "1rem",
              }}
            >
              <Link
                href="https://www.instagram.com/official_freshgee/"
                target="_blank"
              >
                {freshgee.instagram}
              </Link>
              <Link
                href="https://open.spotify.com/artist/2hL87QpNV2ZkJbUV33HtIC?si=PbH2SWXUTrGX-oHR0cfNFA"
                target="_blank"
              >
                {freshgee.spotify}
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCxb0KUin9UA84j-RYE1ILKg"
                target="_blank"
              >
                {freshgee.youtube}
              </Link>
            </Box>
            <FreshgeeDiscography />
          </Box>
        ))}

      {/* {artist === "BoiOus" &&
        boiOusMockData.map((boiOus) => (
          <Box
            key={boiOus.name}
            style={{
              display: "flex",
              paddingTop: "5rem",
              flexDirection: "column",
              // marginLeft: "3rem",
            }}
          >
            <Box
              sx={ArtistBoxMediaQueries}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <Box sx={TitleImageBoxMediaQueries}>
                  <Box sx={titleBoxMediaQueries} style={{ display: "flex" }}>
                    <Typography
                      style={{ marginRight: ".5rem" }}
                      variant="h2"
                      component="h2"
                    >
                      {boiOus.name}
                    </Typography>
                    <Typography
                      style={{ color: "#e2b945" }}
                      variant="h2"
                      component="h2"
                    >
                      {boiOus.name1}
                    </Typography>
                  </Box>
                  <img
                    className={styles.artistImage}
                    src={boiOus.image}
                    alt="Boi Ous Image"
                  />
                </Box>
              </Box>
              <Box sx={DescriptionBoxMediaQueries}>
                <Typography variant="p" component="p">
                  {boiOus.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      {artist === "IcekidDs" &&
        icekidDsMockData.map((IcekidDs) => (
          <Box
            key={IcekidDs.name}
            style={{
              display: "flex",
              paddingTop: "5rem",
              flexDirection: "column",
              // marginLeft: "3rem",
            }}
          >
            <Box
              sx={ArtistBoxMediaQueries}
              style={{
                display: "flex",

                alignItems: "center",
              }}
            >
              <Box>
                <Box sx={TitleImageBoxMediaQueries}>
                  <Box sx={titleBoxMediaQueries} style={{ display: "flex" }}>
                    <Typography
                      style={{ marginRight: ".5rem" }}
                      variant="h2"
                      component="h2"
                    >
                      {IcekidDs.name}
                    </Typography>
                    <Typography
                      style={{ color: "#e2b945" }}
                      variant="h2"
                      component="h2"
                    >
                      {IcekidDs.name1}
                    </Typography>
                  </Box>
                  <img
                    className={styles.artistImage}
                    src={IcekidDs.image}
                    alt="Icekid Ds image"
                  />
                </Box>
              </Box>
              <Box sx={DescriptionBoxMediaQueries}>
                <Typography variant="p" component="p">
                  {IcekidDs.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}

      {artist === "Freshgee" &&
        freshgeeMockData.map((freshgee) => (
          <Box
            key={freshgee.name}
            style={{
              display: "flex",
              paddingTop: "5rem",
              flexDirection: "column",
              // marginLeft: "3rem",
            }}
          >
            <Box
              sx={ArtistBoxMediaQueries}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <Box sx={TitleImageBoxMediaQueries}>
                  <Box sx={titleBoxMediaQueries} style={{ display: "flex" }}>
                    <Typography variant="h2" component="h2">
                      {freshgee.name}
                    </Typography>
                    <Typography
                      style={{ color: "#e2b945" }}
                      variant="h2"
                      component="h2"
                    >
                      {freshgee.name1}
                    </Typography>
                  </Box>
                  <img
                    className={styles.artistImageFreshgee}
                    src={freshgee.image}
                    alt="Freshgee Image"
                  />
                </Box>
              </Box>
              <Box sx={DescriptionBoxMediaQueries}>
                <Typography variant="p" component="p">
                  {freshgee.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}

      {artist === "PrincipalOfMinds" &&
        principalOfMindsMockData.map((principalOfMinds) => (
          <Box
            key={principalOfMinds.name}
            style={{
              display: "flex",
              paddingTop: "5rem",
              flexDirection: "column",
              // marginLeft: "3rem",
            }}
          >
            <Box
              sx={ArtistBoxMediaQueries}
              style={{
                display: "flex",

                alignItems: "center",
              }}
            >
              <Box>
                <Box sx={TitleImageBoxMediaQueries}>
                  <Box sx={titleBoxMediaQueries} style={{ display: "flex" }}>
                    <Typography
                      style={{ marginRight: ".5rem" }}
                      variant="h2"
                      component="h2"
                    >
                      {principalOfMinds.name}
                    </Typography>
                    <Typography
                      style={{ color: "#e2b945" }}
                      variant="h2"
                      component="h2"
                    >
                      {principalOfMinds.name1}
                    </Typography>
                  </Box>
                  <img
                    className={styles.artistImagePrincipalOfMinds}
                    src={principalOfMinds.image}
                    alt="Princible of Minds image"
                  />
                </Box>
              </Box>
              <Box sx={DescriptionBoxMediaQueries}>
                <Typography variant="p" component="p">
                  {principalOfMinds.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))} */}
    </Box>
  );
};

export default DetailedArtist;
