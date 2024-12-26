import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import CarouselProjects from "./components/3d-carousel/CarouselProjects";
import AppBar from "./components/app-bar/AppBar";
import MyInfos from "./components/my-infos/MyInfos";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

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
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <CarouselProjects />
      </div>
    </>
  );
}

export default App;
