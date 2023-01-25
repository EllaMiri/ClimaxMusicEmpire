import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import styles from "../../styles/DetailedArtist.module.css";
import Link from "next/link";
import IcekidDsDiscography from "../../components/IcekidDsDiscography";
import BoiOusDiscography from "../../components/BoiOusDiscography";
import PrincipalOfMindsDiscography from "../../components/PrincipalOfMindsDiscography";
import FreshgeeDiscography from "../../components/FreshgeeDiscography";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SEO from "@bradgarropy/next-seo";

const DetailedArtist = () => {
  const router = useRouter();
  const artist = router.query.artist;

  const boiOusMockData = [
    {
      name: "BOI",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "OUS",

      image: "/BoiOusDetailImage.png",
      instagram: (
        <InstagramIcon style={{ fontSize: "2rem", color: "#e2b945" }} />
      ),
      spotify: <img src="/spotify.png" alt="Spotify icon" width="35rem" />,
      youtube: <YouTubeIcon style={{ fontSize: "2.5rem", color: "#e2b945" }} />,
    },
  ];
  const icekidDsMockData = [
    {
      name: "ICEKID",
      description:
        "L am olor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "DS",

      image: "/IcekidDsDetailImage.png",
      instagram: (
        <InstagramIcon style={{ fontSize: "2rem", color: "#e2b945" }} />
      ),
      spotify: <img src="/spotify.png" alt="Spotify icon" width="35rem" />,
      youtube: <YouTubeIcon style={{ fontSize: "2.5rem", color: "#e2b945" }} />,
    },
  ];
  const freshgeeMockData = [
    {
      name: "FRESH",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "GEE",

      image: "/FreshgeeDetailImage.png",
      instagram: (
        <InstagramIcon style={{ fontSize: "2rem", color: "#e2b945" }} />
      ),
      spotify: <img src="/spotify.png" alt="Spotify icon" width="35rem" />,
      youtube: <YouTubeIcon style={{ fontSize: "2.5rem", color: "#e2b945" }} />,
    },
  ];
  const principalOfMindsMockData = [
    {
      name: "PRINCIPAL OF",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "MINDS",

      image: "/PrincipalOfMindsDetailImage.png",
      instagram: (
        <InstagramIcon style={{ fontSize: "2rem", color: "#e2b945" }} />
      ),
      spotify: <img src="/spotify.png" alt="Spotify icon" width="35rem" />,
      youtube: <YouTubeIcon style={{ fontSize: "2.5rem", color: "#e2b945" }} />,
    },
  ];

  const ArtistBoxMediaQueries = {
    flexDirection: { xs: "column", md: "row" },
  };

  const ArtistNameMediaQueries = {
    justifyContent: { xs: "center", md: "flex-start" },
    flexWrap: "wrap",
    // marginLeft: { xs: "0", md: "3rem" },
    marginBottom: { xs: ".5rem" },
  };

  const DescriptionMediaQueries = {
    textAlign: { xs: "center", md: "left" },
    marginTop: { xs: "1rem" },
    width: { xs: "90%", md: "60%" },
  };

  const h1MediaQueries = {
    fontSize: { xs: "2.5rem", sm: "4rem" },
    display: { xs: "block" },
  };

  const iconsMediaQueries = {
    display: "flex",
    justifyContent: "space-evenly",
    width: { md: "32%" },
    marginTop: "1rem",
  };

  return (
    <Box>
      {artist === "PrincipalOfMinds" &&
        principalOfMindsMockData.map((principalOfMinds) => (
          <Box className={styles.detailedArtistBox} key={principalOfMinds.name}>
            <SEO
              title="Principal of Minds"
              description="Details about the artist Principal of Minds"
              facebook={{
                url: "https://www.facebook.com/PrincipalofMinds",
              }}
            />
            <Box sx={ArtistNameMediaQueries} className={styles.flex}>
              <Typography sx={h1MediaQueries} variant="h1" component="h1">
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
                className={styles.artistImage}
                // style={{ width: "25%" }}
                src={principalOfMinds.image}
                alt="pricipal of minds image"
              />
              <Typography
                sx={DescriptionMediaQueries}
                variant="p"
                component="p"
              >
                {principalOfMinds.description}
              </Typography>
            </Box>
            <Box sx={iconsMediaQueries}>
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
            <SEO
              title="Boi Ous"
              description="Details about the artist Boi Ous"
              facebook={{
                url: "https://www.facebook.com/1ousmacbook",
              }}
            />
            <Box sx={ArtistNameMediaQueries} className={styles.flex}>
              <Typography sx={h1MediaQueries} variant="h1" component="h1">
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
                className={styles.artistImage}
                src={boiOus.image}
                alt="boi ous image"
              />
              <Typography
                sx={DescriptionMediaQueries}
                variant="p"
                component="p"
              >
                {boiOus.description}
              </Typography>
            </Box>
            <Box sx={iconsMediaQueries}>
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
            <SEO
              title="Icekid DS"
              description="Details about the artist Icekid DS"
              facebook={{
                url: "https://www.facebook.com/profile.php?id=100064038551838",
              }}
            />
            <Box sx={ArtistNameMediaQueries} className={styles.flex}>
              <Typography sx={h1MediaQueries} variant="h1" component="h1">
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
                className={styles.artistImage}
                src={icekidDs.image}
                alt="icekid image"
              />
              <Typography
                sx={DescriptionMediaQueries}
                variant="p"
                component="p"
              >
                {icekidDs.description}
              </Typography>
            </Box>
            <Box sx={iconsMediaQueries}>
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
            <SEO
              title="Freshgee"
              description="Details about the artist Freshgee"
              facebook={{
                url: "https://www.facebook.com/profile.php?id=100066468461859",
              }}
            />
            <Box sx={ArtistNameMediaQueries} className={styles.flex}>
              <Typography sx={h1MediaQueries} variant="h1" component="h1">
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
                className={styles.artistImage}
                src={freshgee.image}
                alt="freshgee image"
              />
              <Typography
                sx={DescriptionMediaQueries}
                variant="p"
                component="p"
              >
                {freshgee.description}
              </Typography>
            </Box>
            <Box sx={iconsMediaQueries}>
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
    </Box>
  );
};

export default DetailedArtist;
