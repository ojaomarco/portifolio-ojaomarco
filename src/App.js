import { Container } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  return (<>
   
    <Container maxWidth='xl'>
      <Header />
      <Hero/>
    </Container>
  </>
  );
}

export default App;
