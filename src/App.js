import { Container } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectComp from "./components/ProjectsComp";


function App() {
  return (<>
   
    <Container maxWidth='xl'>
      <Header />
      <Hero/>
      <ProjectComp/>
    </Container>
  </>
  );
}

export default App;
