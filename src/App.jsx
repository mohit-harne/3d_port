import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  VideoEditing,
  Design,
} from "./components";
import ErrorBoundary from "./ErrorBoundary";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div style={{ overflowX: "hidden" }} className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          <div id="about"  className="min-h-screen">
            <About />
          </div>

          <div id="carousel" className="min-h-screen">
  <Carousel />
</div>

          <div id="experience"  className="min-h-screen">
            <Experience />
          </div>

          <div id="design"  className="min-h-screen">
            <Design />
          </div>

          <div id="works"  className="min-h-screen">
            <Works />
          </div>

          <div id="videoediting"  className="min-h-screen">
            <VideoEditing />
          </div>

          <div id="contact" className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
