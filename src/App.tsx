import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import CarouselProjects from "./components/3d-carousel/CarouselProjects";
import AppBar from "./components/app-bar/AppBar";

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

        <CarouselProjects />
      </div>
    </>
  );
}

export default App;
