import { BrowserRouter } from "react-router-dom"
import { About, Contact, Hero, Navbar, Tech, Works, } from './components';
const App = () => {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#121212]">
        <div className="bg-[#121212] bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>

    </BrowserRouter>
  )
}

export default App
