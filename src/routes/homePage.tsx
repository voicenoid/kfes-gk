import { Typography, Card, Box, Grid, Stack, } from "@mui/material";
import imgMaps from "../images/maps.jpg";
import imgCard from "../images/card.jpg"
import { Circle, SquareOutlined } from '@mui/icons-material';
import qa1 from "../images/questions/qa1.jpg";
import qa2 from "../images/questions/qa2.jpg";

const Home = () => {

    var userData = new Array(5);
    for (var i: number = 0; i < userData.length; i++) {
        userData[i] = new Array(2);	//0～9
    }

    var individualUserData: unknown;
    var individualUserDataString: unknown;

    for (i = 0; i < userData.length; i++) {
        individualUserData = localStorage.getItem(i as unknown as string);
        individualUserDataString = individualUserData;

        individualUserData = Boolean(individualUserData);
        userData[i][0] = individualUserData;
        userData[i][1] = individualUserDataString;
    }

    return (
        <div>
            <div className="SW-update-dialog"></div>
            <Box>
                <Typography variant="h5" sx={{}}>怪物たちの場所</Typography>
                <img src={imgMaps} width="100%" alt="東京高専MAP" style={{ marginTop: 1 }} />
            </Box>
            <Box sx={{ marginTop: 6 }}>
                <Typography variant="h5">説明</Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                    怪物たちはマップの場所に散らばった。奴らのところに行くと謎解き問題が出題される。その問題を解くことで計画を阻止できるぞ！奴らが出した謎の答えは最後の部屋に入るためのパスワードになっている。<b>すべての問題を解き終えたら</b> <span style={{ color: 'red' }}>3 棟 3 階多目的室 3330-2</span>（<Circle fontSize="small" style={{ color: "red", verticalAlign: "middle" }} />の印があるところ）に向かいパスワードを言おう！
                </Typography><br />
                <Typography variant="caption" >
                    ※<img alt="モンスター" src={qa1} width="30" style={{ verticalAlign: "middle" }} />と<img alt="モンスター" src={qa2} width="30" style={{ verticalAlign: "middle" }} />は張り紙があるのでそのQR コードを読み込んで謎解きに挑戦してください。ほかは人がQR コードを持っているのでそれを読み込んでください。
                </Typography>
            </Box>
            <Box sx={{ marginTop: 6 }}>
                <Typography variant="h5">謎解きカード</Typography>
                <Card sx={{ marginTop: 1, p: 1 }}>
                    <img src={imgCard} width="100%" alt="謎解きカード" />
                </Card>
            </Box>
            <Box sx={{ boxShadow: 1, borderRadius: 3, p: 4, margin: 4, marginTop: 6, display: "flex", justifyContent: "center", backgroundColor: "primary.main", color: "white" }}>
                <Box>
                    <Typography variant="body1">パスワードは</Typography>
                    <Grid container direction="row" alignItems="center" >
                        {userData.map((data, index) => (
                            <Stack direction="row" alignItems="center" gap={1} key={index}>
                                {data[0] ? <Typography variant="h5">{data[1]}</Typography> : <Grid item><SquareOutlined fontSize="large" /></Grid>}
                            </Stack>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Home;