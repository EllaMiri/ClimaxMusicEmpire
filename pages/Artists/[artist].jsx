import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import boiOusMockData from "../../utils/artistsMockData";

const DetailedArtist = () => {
  const router = useRouter();
  const artist = router.query.artist;

  const MockData = [
    {
      name: "BOI",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "OUS",
      test: artist,

      image: "",
    },
  ];
  const IcekidDsMockData = [
    {
      name: "ICEKID",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "DS",

      image: "",
    },
  ];
  const FreshgeeMockData = [
    {
      name: "FRESH",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "GEE",

      image: "",
    },
  ];
  const principalOfMindsMockData = [
    {
      name: "PRINCIPAL OF",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "MINDS",

      image: "",
    },
  ];

  return (
    <div>
      {artist === "BoiOus" &&
        MockData.map((boiOus) => (
          <Box key={boiOus.name}>
            <Typography variant="h2" component="h2">
              {boiOus.description} {boiOus.test}
            </Typography>
          </Box>
        ))}
      {artist === "FreshGee" &&
        FreshgeeMockData.map((FreshGee) => (
          <Box key={FreshGee.name}>
            <Typography variant="h2" component="h2">
              {FreshGee.description} {FreshGee.name}
            </Typography>
          </Box>
        ))}
    </div>
  );
};

export default DetailedArtist;
