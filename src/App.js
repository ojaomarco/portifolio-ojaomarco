import { Box, Container, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectComp from "./components/ProjectsComp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (<>
   
    
      <Container maxWidth='xl' sx={{ bgcolor: '#fff'}}>
        <Header/>
        <Hero/>
        <ProjectComp/>
        <Contact/>
        <Footer/>
    </Container>
  </>
  );
}

export default App;
