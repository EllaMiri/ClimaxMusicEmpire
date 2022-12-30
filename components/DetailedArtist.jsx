import { Box } from "@mui/system";
import styles from "../../styles/DetailedArtist.module.css";

const DetailedArtist = () => {
  const principalOfMindsMockData = [
    {
      name: "PRINCIPAL OF",
      description:
        "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Loremipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit amet ",
      name1: "MINDS",

      image: "/PrincipalOfMinds.png",
    },
  ];

  const ArtistBoxMediaQueries = {
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { md: "space-around" },
  };

  const DescriptionBoxMediaQueries = {
    width: { xs: "90%", md: "50%" },
    textAlign: { xs: "center", md: "left" },
  };

  const TitleImageBoxMediaQueries = {
    display: { xs: "flex" },
    flexDirection: { xs: "column" },
    alignItems: { xs: "center", md: "flex-start" },
    marginBottom: { xs: "2rem", md: "0" },
  };

  const titleBoxMediaQueries = {
    marginBottom: { xs: "1rem", md: "0" },
  };

  return <Box></Box>;
};
