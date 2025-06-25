import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/Home/NavBar";
import AuthenticationCard from "./components/Authentication Cards/AuthenticationCard";
import About from "./components/Home/About";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `
          "nav nav"
          "about authentication"
          "main main"
        `,
        lg: `
          "nav nav nav"
          "about about authentication"
          "main main main"
        `,
      }}
      templateColumns={{
        base: "1fr 1fr",
        lg: "1fr 1fr 1fr",
      }}
      gap={5}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem pl={4} area="about">
        <About />
      </GridItem>

      <GridItem pr={4} area="authentication">
        <AuthenticationCard />
      </GridItem>
      <GridItem px={4} area="main">
        <Dashboard />
      </GridItem>
    </Grid>
  );
}

export default App;
