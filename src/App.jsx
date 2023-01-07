import Navbar from "./sections/navbar/Navbar"
import Header from "./sections/header/Header"
import About from "./sections/about/About"

import Services from "./sections/services/Services"
import Contact from "./sections/contact/Contact"
import FAQs from "./sections/faqs/FAQs"
import Portfolio from "./sections/portfolio/Portfolio"
import Footer from "./sections/footer/Footer"
import Qualification from "./sections/qualification/Qualification"
import ScrollUp from "./sections/scrollup/ScrollUp"
import Skills from "./sections/skills/Skills"


const App = () => {
  return (
   <main>
       <Navbar/>
       <Header/>
       <About/>
       <Services/> 
       <ScrollUp/> 
       <FAQs/>
       <Skills/>
       <Portfolio/> 
       <Qualification/>
        <Contact/>
       <Footer/>
       

   </main>
  )
}

export default App
 