import { Snackbar, Divider, Box, Card, Grid, Typography, TextField, Container, IconButton, Button, Accordion, AccordionSummary, AccordionDetails,Avatar } from "@mui/material";
import questionsData from "../questions.json";
import q0 from "../images/questions/q0.jpg";
import q1 from "../images/questions/q1.jpg";
import q2 from "../images/questions/q2.jpg";
import q3 from "../images/questions/q3.jpg";
import q4 from "../images/questions/q4.jpg";
import qa0 from "../images/questions/qa0.jpg";
import qa1 from "../images/questions/qa1.jpg";
import qa2 from "../images/questions/qa2.jpg";
import qa3 from "../images/questions/qa3.jpg";
import qa4 from "../images/questions/qa4.jpg";
import imgCorrect from "../images/correct.jpg"
import { Send, ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdditionHintArea from "../util/additionHintArea";

type Props = {
    questionsID: string | undefined
}

const QuestionPage = (props: Props) => {
    const qu = [q0, q1, q2, q3, q4];
    const qa = [qa0, qa1, qa2, qa3, qa4];
    const qData = questionsData.data[Number(props.questionsID)];
    const [text, setText] = useState<string | undefined>("");
    const [sendText, setSendText] = useState<string | undefined>("");
    const localStorageItem = localStorage.getItem(String(props.questionsID));

    const [errorOpen, setErrorOpen] = useState(false);
    const errorHandleOpen = () => {
        setErrorOpen(true);
    }

    const errorHandleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setErrorOpen(false);
    };

    const answerTheQuestion = async () => {
        setSendText(text);
        setText("");

        if (text === qData.ans) {
            console.log("Success!!");
            await localStorage.setItem(String(props.questionsID), qData.anscode);
            await window.location.reload();
        } else {
            console.log("Wrong!!");
            errorHandleOpen();
        }
    }

   
    
    if (localStorageItem) {
        return (
            <div>
                <Container sx={{ display: "flex", justifyContent: "center" }}>
                    <img src={imgCorrect} width="100%" alt="正解" />
                </Container>
                <Container sx={{ marginTop: 3 }}>
                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                        <Grid item xs={1}>
                            <Avatar alt="モンスター" src={qa[Number(props.questionsID)]}  sx={{ width: 64, height: 64,}} />
                        </Grid>
                        <Grid item xs={10}>
                            <Card sx={{ margin: 3, p: 1, }}>
                                <Typography variant="body1">{qData.anstxt}</Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
                <Container sx={{ display: "flex", justifyContent: "center" }}>
                    <Link to="/"><Button variant="contained">ホームへ戻る</Button></Link>
                </Container>

            </div>
        )
    } else {
        return (
            <div>
                <Snackbar open={errorOpen} autoHideDuration={6000} onClose={errorHandleClose} message="残念、不正解！別の回答を試してみてね！" action={<Button onClick={errorHandleClose}>閉じる</Button>} />
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" >
                    <Grid item xs={1}>
                        <Avatar alt="モンスター" src={qa[Number(props.questionsID)]}  sx={{ width: 64, height: 64 }}/>
                    </Grid>
                    <Grid item xs={10}>
                        <Card sx={{ margin: 3, p: 1, }}>
                            <Typography variant="body1">{qData.text1}</Typography>
                        </Card>
                    </Grid>
                </Grid>
                <img src={qu[Number(props.questionsID)]} width="100%" alt="問題" />
                <Box sx={{ display: "flex", justifyContent: "center", }}>
                    <Grid container direction="column" justifyContent="center" alignItems="center" >
                        <Typography variant="body1">{qData.text2}</Typography>
                        <Container sx={{ marginTop: 3, display: "flex", justifyContent: "center" }} >
                            <TextField id="outlined-basic" label="回答" variant="outlined" value={text} onChange={e => { setText(e.target.value) }} InputProps={{ endAdornment: (<IconButton aria-label="Send" onClick={answerTheQuestion}><Send /></IconButton>) }} />
                        </Container>
                    </Grid>
                </Box>
                <Divider sx={{ marginTop: 20 }} />
                <Box sx={{ marginTop: 3 }} className="hintArea">
                    <Typography variant="h5">ヒント</Typography>
                    {qData.hint1 ? (
                        <React.Fragment>
                            <Accordion sx={{ marginTop: 3 }}>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    <Typography>ヒント1</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{qData.hint1}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </React.Fragment>
                    ) : (<React.Fragment />)}
                    {qData.hint2 ? (
                        <React.Fragment>
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    <Typography>ヒント2</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>{qData.hint2}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </React.Fragment>
                        ) : (<AdditionHintArea questionsID = {props.questionsID}/>)}
                </Box>
            </div>
        )
    }

}

export default QuestionPage;