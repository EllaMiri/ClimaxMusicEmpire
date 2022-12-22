import { Typography, Box } from "@mui/material";
import styles from '../styles/AboutUs.module.css'

const AboutUs = () => {
    return (
        <Box>
            <Box className={styles.titleBox}>
            <Typography component='h2' variant="h2">ABOUT</Typography>
            <Typography className={styles.us} component='h2' variant="h2">US</Typography>
            </Box>
            <Box className={styles.contentBox}>
            <Typography className={styles.description} component='p' variant="p">We learned that music has the power to bring us 
                together and heal us from our differences.
                Music saved us and made us realize who we are. So, music 
                belongs to us as 
                much as it does to anyone in our family, as well as to anyone 
                who loves music. 
                And as Climax Music Empire, we don't want to tell artists who 
                to be. we want to
                create a space for them to share themselves with the world on their terms 
                irrespective of who you are or where you’re from. As we are the next big thing 
                competing with the global leading music company, our goal is to make difference, 
                to do that we have to reach out, therefore we are constantly working in all 
                aspects to find new ways that break through to the global spotlight with the 
                right audience for the artists we represent. Therefore, our responsibility of 
                nurturing music creation, promoting artistry, and making use of talent is ours. 
                As it guided us to create this platform, making good music with the power to 
                heal, inspire and guide is a priority.
 
                That is who we are! And that... 
                That's Climax Music Empire.
            </Typography>
            <img className={styles.image} src="./CLIMAXMUSICLOGO-bigger.png"  />
            </Box>
            
        </Box>
    )
}

export default AboutUs;