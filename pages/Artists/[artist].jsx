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

  // Array with information about artist Boi Ous
  const boiOusMockData = [
    {
      name: "BOI",
      description:
        "Boi Ous is from the Smiling Coast of West Africa, the Gambia. A very talented, creative & gifted mind when it comes to what he do. His music is based on his everyday lifestyle as a creative and motivated young man trying to figure out life. His songs are uplifting and very inspirational to each and every one of his listeners.",
      name1: "OUS",

      image: "/BoiOusDetailImage.png",
      instagram: <InstagramIcon className={styles.instagramIcon} />,
      spotify: <img src="/spotify.png" alt="Spotify icon" width="35rem" />,
      youtube: <YouTubeIcon className={styles.youtubeIcon} />,
    },
  ];
  // Array with information about artist IceKid DS
  const icekidDsMockData = [
    {
      name: "ICEKID",
      description:
        "Samuel Aigbogun Precious popularly known as Icekid Ds is a Sweden based Nigerian Singer, Song writer and record producer. Icekid DS is a versatile singer in the genre of Afro pop, R&B and Rap blending Africa's Afro with Global sounds.",
      name1: "DS",

      image: "/IcekidDsDetailImage.png",
      instagram: <InstagramIcon className={styles.instagramIcon} />,
      spotify: <img src="/spotify.png" alt="Spotify icon" width="35rem" />,
      youtube: <YouTubeIcon className={styles.youtubeIcon} />,
    },
  ];

  // Array with information about artist Freshgee
  // const freshgeeMockData = [
  //   {
  //     name: "FRESH",
  //     description:
  //       "Freshgee believes that music is beyond a form of entertainment, that music unites so many cultures with different people around the world, that music is a universal language  and he's really mindful of this in his creative process. He came from Edo state, southside of Nigeria, West Africa. His childhood and his daily experiences gave him more inspirations in line with his music.",
  //     name1: "GEE",

  //     image: "/FreshgeeDetailImage.png",
  //     instagram: <InstagramIcon className={styles.instagramIcon} />,
  //     spotify: <img src="/spotify.png" alt="Spotify icon" width="35rem" />,
  //     youtube: <YouTubeIcon className={styles.youtubeIcon} />,
  //   },
  // ];

  // Array with information about artist Principal of Minds
  const principalOfMindsMockData = [
    {
      name: "PRINCIPAL OF",
      description:
        "Principal of Minds is a rapper who's dedicated to the art of understanding, his message is to spread awareness and understanding. He works with themes that works as a chain where one song leads to the other, allowing his listeners to grow with him. A firm believer that humanity can't grow without unity he fights to change the idea that Hip Hop is all about money, cars and depredating women. With years on his back he has crafted a style that blends with his showmanship.",
      name1: "MINDS",

      image: "/PrincipalOfMindsDetailImage.png",
      instagram: <InstagramIcon className={styles.instagramIcon} />,
      spotify: <img src="/spotify.png" alt="Spotify icon" width="35rem" />,
      youtube: <YouTubeIcon className={styles.youtubeIcon} />,
    },
  ];

  //Media queries
  const ArtistBoxMediaQueries = {
    flexDirection: { xs: "column", md: "row" },
  };

  const ArtistNameMediaQueries = {
    justifyContent: { xs: "center", md: "flex-start" },
    flexWrap: "wrap",
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

  // Renders out artist depending on the query in the URL
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
      {/* {artist === "Freshgee" &&
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
        ))} */}
    </Box>
  );
};

export default DetailedArtist;
