import { Button, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./NavBar";
import AuthenticationCard from "../Authentication Cards/AuthenticationCard";
import About from "./About";

const Home = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "about authentication"`,
        lg: `"nav nav nav" "aside about authentication"`,
      }}
      templateColumns={{
        base: "1fr 1fr",
        lg: "100px 1.5fr 1fr",
      }}
      gap={5}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem
        whiteSpace="wrap"
        mt={10}
        area="aside"
        display={{ base: "none", lg: "block" }}
      >
        <Button mb={5}>Buttons...</Button>
        <Button mb={5}>Buttons...</Button>
        <Button mb={5}>Buttons...</Button>
      </GridItem>
      <GridItem ml={5} area="about">
        <About></About>
      </GridItem>
      <GridItem area="authentication">
        <AuthenticationCard></AuthenticationCard>
      </GridItem>
    </Grid>
  );
};

export default Home;
