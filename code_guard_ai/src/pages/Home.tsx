import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  googleAuth,
  signIn,
  signUp,
  type User,
} from "../services/FirebaseManager";
import NavBar from "@/components/Home/NavBar";
import About from "@/components/Home/About";
import AuthenticationCard from "@/components/Authentication Cards/AuthenticationCard";

interface Props {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}

export default function Home({ user, setUser }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  return (
    <Stack minH="100dvh">
      <NavBar route="Home" user={user} showNewFile={false} onSignOut={() => { }} />

      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
        flex="1"
      >
        <GridItem
          display={{ base: "none", lg: "flex" }}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p={{ base: 0, md: 8 }}
        >
          <About />
        </GridItem>

        <GridItem
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <AuthenticationCard
            onSignIn={async (c) => {
              setUser(await signIn(c.email, c.password));
              navigate("/dashboard");
            }}
            onSignUp={async (n) => {
              setUser(await signUp(n));
              navigate("/dashboard");
            }}
            onGoogleAuth={async () => {
              setUser(await googleAuth());
              navigate("/dashboard");
            }}
          />
        </GridItem>
      </Grid>
    </Stack>
  );
}