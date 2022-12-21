import { Button, Typography, Container } from "@mui/material";
import { useEffect } from "react";



const Layout = () => {
    // const videoRef = useRef()

    // useEffect(() => {
    //     setTimeout(() => {
    //         videoRef.current.play()
    //     }, 5000)
    // }, [])

  const style = {
    width: {xs: '300px', sm: '300px', md: '600px', lg: '1000px'}
  }

   
   
   
    return (
        <div style={{ position: 'relative', width: '100%', margin: 0 }}>
            <div>
                <video autoPlay muted loop>
                 <source src="./rolling-web-edit.mp4" type="video/mp4" />
                </video>
            </div>

           <div style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '20%' }}>
           <div style={{ display: "flex" }}>
            <Typography variant="h1" component="h1">CLIMAX MUSIC</Typography>
            <Typography variant="h2" component="h2" style={{fontSize: "6rem", marginLeft: "1.5rem", color: "#E2B945"}}>EMPIRE</Typography>
         </div>
            <Typography variant="p" component="p">Swedens aspiring music label</Typography>
            <Button variant="contained" color="primary">Contact us</Button>
           </div>
         
      </div>
    );
  };
  
  export default Layout;