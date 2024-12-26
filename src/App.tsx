import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, Typography } from "@mui/material";
import "./App.css";
import CarouselProjects from "./components/3d-carousel/CarouselProjects";
import AppBar from "./components/app-bar/AppBar";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import MyInfos from "./components/my-infos/MyInfos";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <AppBar />

        <MyInfos />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            textAlign: "start",
            padding: 3,
          }}
        >
          <Typography
            marginLeft={5}
            variant="h4"
            fontFamily="monospace"
            fontWeight={700}
          >
            Projetos
          </Typography>
        </Box>
        <CarouselProjects />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
