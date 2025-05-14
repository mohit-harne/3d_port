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
<div
style={{ overflowX: "hidden" }}
className="relative z-0 bg-primary"
>
<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
<Navbar />
<Hero />
</div>
<About />
<Experience />
{/*<Tech/>*/}

{/* <Carousel /> */}

<Design />
<Works />
<VideoEditing />
<div className="relative z-0">
<Contact />
<StarsCanvas />
</div>
</div>
</BrowserRouter>
</ErrorBoundary>
);
};

export default App;
