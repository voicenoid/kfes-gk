import {Typography, Accordion, AccordionSummary, AccordionDetails, } from "@mui/material";
import {ExpandMore } from "@mui/icons-material";
import React from "react";


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
                            <Typography></Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>ヒント2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography></Typography>
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
                            
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>ヒント3</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography>ヒント4</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            
                        </AccordionDetails>
                    </Accordion>
                </React.Fragment>
                )
        default:
            return(<React.Fragment/>)
    }
}

export default AdditionHintArea;