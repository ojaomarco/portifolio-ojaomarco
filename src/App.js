import {Container} from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectComp from "./components/ProjectsComp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";


function App() {
  return (<>
   
    
      <Container maxWidth='xl' sx={{ bgcolor: '#fff'}}>
        <Header/>
        <Hero/>
        <About/>
        <ProjectComp/>
        <Contact/>
        <Footer/>
    </Container>
  </>
  );
}

export default App;
