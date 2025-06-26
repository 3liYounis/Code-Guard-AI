import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/Home/NavBar";
import AuthenticationCard from "./components/Authentication Cards/AuthenticationCard";
import About from "./components/Home/About";
import "./App.css";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import { signUp, signIn, signOutUser, type User } from "./services/FirebaseManager"
function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  if (user) {
    return (
      <Grid
        height="100dvh"
        templateAreas={{
          base: `
          "nav"
          "dashboard"
        `,
        }}
        templateColumns={{
          base: "1fr",
        }}
        templateRows="100px 1fr"
      >
        <GridItem area="nav">
          <NavBar
            user={user}
            onSignOut={() => { signOutUser(); setUser(undefined) }}
          />
        </GridItem>

        <GridItem area="dashboard">
          <Dashboard codeReviews={user.code_reviews}></Dashboard>
        </GridItem>
      </Grid>
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
          onSignOut={() => { }}
        />
      </GridItem>
      <GridItem ml={4} area="about" display={{ base: "none", lg: "block" }}>
        <About />
      </GridItem>
      <GridItem area="authentication">
        <AuthenticationCard onSignIn={async (user) => { setUser(await signIn(user.email, user.password)) }} onSignUp={async (user) => setUser(await signUp(user))} />
      </GridItem>
    </Grid>
  );
}

export default App;
