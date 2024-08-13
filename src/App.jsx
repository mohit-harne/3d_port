import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components' ;
import ErrorBoundary from "./ErrorBoundary";
const App = () => {
  

  return ( <ErrorBoundary>
    <BrowserRouter>
    <div style={{ overflowX: 'hidden' }} className="relative z-0 bg-primary">
<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
<Navbar/>
<Hero/>
</div>
<About/>
<Experience/>
{/*<Tech/>*/}
<Works/>
<div className="relative z-0">
<Contact/>
<StarsCanvas/>
</div>
    </div>
    </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
