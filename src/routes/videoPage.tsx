import { Button, Container } from '@mui/material';
import Youtube from 'react-youtube';
import { Link } from "react-router-dom";
import { useState } from 'react';


const VideoPage = () => {
    const [playState, setPlayState] = useState<boolean>(false);

    const Played = () =>{
        setPlayState(true);
    }
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
                <Youtube videoId="AWrVgtJfnzY" opts={opts} onEnd={Played}/>
            </Container>
            <Container sx={{ display: "flex", justifyContent: "center", marginTop: 3}}>
                {playState?<Link to="/kfes-gk"><Button variant="contained">次へ進む</Button></Link>:<Button disabled>次へ進む</Button>}
            </Container>
            
        </div>
    )
}

export default VideoPage;