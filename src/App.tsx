import Home from './routes/homePage';
import { Route, Routes } from 'react-router';
import ErrorPage from './routes/errorPage';
import Questions from './routes/questions';
import { AppBar, Box, Toolbar, Typography, Container, IconButton, Link } from '@mui/material';
import '@fontsource/roboto/500.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VideoPage from "./routes/videoPage";
import { Movie } from '@mui/icons-material';


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
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" sx={{ color: "white" }} underline='none'>緊急クエスト</Link>
            </Typography>
            <IconButton color="inherit">
              <Link href="/video" sx={{ color: "white" }} underline='none'>
                <Movie />
              </Link>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container fixed>
          <Box sx={{ margin: 0.5, marginTop: 2, bgcolor: 'background.paper', borderRadius: 2 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questions/:id" element={<Questions />} />
              <Route path="/video" element={<VideoPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;

