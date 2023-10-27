import { Button, Container } from '@mui/material';
import Youtube from 'react-youtube';
import { Link } from "react-router-dom";


const videoPage = () => {
    const opts = {
        width: window.innerWidth*4/5,        
        playerVars: { 
          autoplay: 1,
          fs:0,
          modestbranding:1,
          controls:0,
          rel:0
        }
      };

    return(
        <div>
            <Container sx={{ marginTop: 3,}} >
                <Youtube videoId="AWrVgtJfnzY" opts={opts}/>
            </Container>
            <Container sx={{ display: "flex", justifyContent: "center", marginTop: 3}}>
                <Link to="/"><Button variant="contained">次へ進む</Button></Link>
            </Container>
            
        </div>
    )
}

export default videoPage;