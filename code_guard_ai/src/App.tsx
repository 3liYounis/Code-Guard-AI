import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/Home/NavBar";
import AuthenticationCard from "./components/Authentication Cards/AuthenticationCard";
import About from "./components/Home/About";
import "./App.css";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";

export interface User {
  username: string;
  email: string;
}

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  if (user) {
    return (
      <Box>
        <NavBar user={user} onSignOut={() => setUser(undefined)}></NavBar>
        <Dashboard></Dashboard>
      </Box>
    );
  }
  return (
    <Grid
      height="100dvh"
      templateAreas={{
        base: `
          "nav"
          "authentication"
        `,
        lg: `
          "nav nav"
          "about authentication"
        `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1.5fr 1fr",
      }}
      templateRows="100px 1fr"
    >
      <GridItem area="nav">
        <NavBar
          user={user}
          onSignOut={() => {
            setUser(undefined);
          }}
        />
      </GridItem>

      <GridItem ml={4} area="about" display={{base: 'none', lg: 'block'}}>
        <About />
      </GridItem>

      <GridItem area="authentication">
        <AuthenticationCard onSignIn={(user) => setUser(user)} />
      </GridItem>
    </Grid>
  );
}

export default App;
