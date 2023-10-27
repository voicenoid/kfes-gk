import Home from './routes/homePage';
import { Route, Routes } from 'react-router';
import ErrorPage from './routes/errorPage';
import Questions from './routes/questions';
import {AppBar,Box,Toolbar,Typography,Container} from '@mui/material';
import '@fontsource/roboto/500.css';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Link } from '@mui/material';
import VideoPage from "./routes/videoPage";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ff5722'
      },
      secondary: {
        main: '#f50057'
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme ={theme}>
      <AppBar position="static" >
        <Toolbar>
          <Typography ><Link href ="/kfes-gk" sx={{color:"white"}}>謎解きアプリ</Link></Typography>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Box sx={{ margin: 0.5, marginTop: 2,bgcolor: 'background.paper',borderRadius: 2}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questions/:id" element={<Questions />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/video" element={<VideoPage />} />
          </Routes>
        </Box>
      </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

