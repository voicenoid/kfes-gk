import { Box, Card, Grid, Typography,TextField, Container, IconButton, Button } from "@mui/material";
import questionsData from "../questions.json";
import q0 from "../images/questions/q0.jpg";
import q1 from "../images/questions/q0.jpg";
import q2 from "../images/questions/q2.jpg";
import q3 from "../images/questions/q3.jpg";
import q4 from "../images/questions/q4.jpg";
import imgCorrect from "../images/correct.jpg"
import { Handshake, Send } from "@mui/icons-material";
import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";


type Props = {
    questionsID: string| undefined
}

const QuestionPage = (props:Props)=> {
    console.log(questionsData.data);
    const qu = [q0,q1,q2,q3,q4];
    const qData = questionsData.data[Number(props.questionsID)];
    const [text, setText] = useState<string | undefined>("");
    const [sendText,setSendText] = useState<string | undefined>("");
    const localStorageItem = localStorage.getItem(String(props.questionsID));

    const answerTheQuestion = async() => {
        setSendText(text);
        setText("");

        if(text == qData.ans){
            console.log("Success!!");
            await localStorage.setItem(String(props.questionsID),qData.anscode);
            await window.location.reload();
        }else{
            console.log("Wrong!!");
        }
      }
    if(localStorageItem){
        return(
            <div>
                <Container sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={imgCorrect} width="100%"/>
                </Container>
                <Container sx={{marginTop:3}}> 
                <Grid container direction="row-reverse" justifyContent="flex-end" alignItems="center">
                    <div>Avatar</div>
                    <Card sx={{ margin: 3, p: 1 }}>
                        <Typography variant="body1">{qData.anstxt}</Typography>
                    </Card>
                </Grid>
                </Container>
                <Container sx={{ display: "flex", justifyContent: "center" }}>
                    <Link to="/"><Button variant="contained">ホームへ戻る</Button></Link>
                </Container>
                
            </div>
        ) 
    }else{
        return(
            <div>
                <Grid container direction="row-reverse" justifyContent="flex-end" alignItems="center">
                    <div>Avatar</div>
                    <Card sx={{ margin: 3, p: 1 }}>
                        <Typography variant="body1">{qData.text1}</Typography>
                    </Card>
                </Grid>
                <img src={qu[Number(props.questionsID)]} width="100%" />
                <Box sx={{ display: "flex", justifyContent: "center", }}>
                    <Grid container direction="column" justifyContent="center" alignItems="center" >
                        <Typography variant="body1">{qData.text2}</Typography>
                        <Container sx={{ marginTop: 3, display: "flex", justifyContent: "center" }}>
                            <TextField size="small" id="outlined-basic" label="回答" variant="outlined" value={text} onChange={e => { setText(e.target.value) }} />
                            <IconButton aria-label="Send" onClick={answerTheQuestion}><Send /></IconButton>
                        </Container>
                    </Grid>
                </Box>
            </div>
        )
    }
    
}

export default QuestionPage;