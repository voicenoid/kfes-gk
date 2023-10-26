import { Typography, Card, Box} from "@mui/material";
import imgMaps from "../images/maps.jpg";
import imgCard from "../images/card.jpg"
import React from "react";
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';

function Home(){

    var userData = new Array(5);
    for (var i:number = 0; i < userData.length; i++){
        userData[i] = new Array(2);	//0～9
    }

    var individualUserData:unknown;
    var individualUserDataString:unknown;

    for(i = 0;i<userData.length;i++){
        individualUserData = localStorage.getItem(i as unknown as string);
        individualUserDataString = individualUserData;

        console.log(individualUserData)
        
        individualUserData = Boolean(individualUserData);
        userData[i][0] = individualUserData;
        userData[i][1] = individualUserDataString;
    }
    //userData = localStorage.setItem("0","true or 1");
    console.log(userData[0]);

    return (
        <div>
            <Box> 
            <Typography variant="h5" sx={{}}>怪物たちの場所</Typography>
            <img src={imgMaps} width="100%" alt="東京高専MAP"/>
            </Box>
            <Box sx={{ marginTop: 1}}>
                <Typography variant="h5">説明</Typography>
                <Typography variant="body1" sx={{marginTop:1}}>
                    怪物たちはマップの場所に散らばった。奴らのところに行くと謎解き問題が出題される。その問題を解くことで計画を阻止できるぞ！奴らが出した謎の答えは最後の部屋に入るためのパスワードになっている。<b>すべての問題を解き終えたら</b> 3 棟 3 階多目的室 3330-2（●の印があ るところ）に向かいパスワードを言おう！
                </Typography>
            </Box>
            <Box sx={{marginTop:6}}>
            <Typography variant="h5">謎解きカード</Typography>
            <Card sx={{marginTop:1,p: 1 }}>
                <img src={imgCard} width="100%" alt="謎解きカード" />
            </Card>
            </Box>
            <Box sx={{ boxShadow: 1, borderRadius: 3, p: 4, margin: 4, display: "flex", justifyContent: "center", backgroundColor: "primary.main", color: "white" }}>
                <Typography variant="h6">パスワードは<br />
                    {userData.map((data, index) => (
                        <React.Fragment key={index}>
                            {data[0] ? <>{data[1]}</> : <>{<SquareOutlinedIcon />}</>}
                        </React.Fragment>
                    ))}
                </Typography>
            </Box>
            
            <div>

            </div>
        </div>
    )
}

export default Home;