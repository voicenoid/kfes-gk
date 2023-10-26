import {Typography, Accordion, AccordionSummary, AccordionDetails, } from "@mui/material";
import {ExpandMore } from "@mui/icons-material";
import React from "react";
import q1h1 from "../images/hints/q1-h1.jpg";
import q1h2 from "../images/hints/q1-h2.jpg";
import q4h1 from "../images/hints/q4-h1.jpg";
import q4h2 from "../images/hints/q4-h2.jpg";
import q4h3 from "../images/hints/q4-h3.jpg";


type Props = {
    questionsID: string | undefined
}

const AdditionHintArea = (props:Props) =>{
    switch (Number(props.questionsID)){
        case 1:
            return(
                <React.Fragment>
                    <Accordion sx={{ marginTop: 3 }}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>ヒント1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <img src={q1h1} width="100%" alt="ヒント"/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>ヒント2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <img src={q1h2} width="100%" alt="ヒント"/>
                        </AccordionDetails>
                    </Accordion>
                </React.Fragment>
                )
        case 4:
            return(
                <React.Fragment>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>ヒント2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <img src={q4h1} width="100%" alt="ヒント"/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>ヒント3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <img src={q4h2} width="100%" alt="ヒント"/>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>ヒント4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <img src={q4h3} width="100%" alt="ヒント"/>
                        </AccordionDetails>
                    </Accordion>
                </React.Fragment>
                )
        default:
            return(<React.Fragment/>)
    }
}

export default AdditionHintArea;