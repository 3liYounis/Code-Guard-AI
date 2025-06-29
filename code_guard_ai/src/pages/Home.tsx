import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, GridItem, Stack, } from "@chakra-ui/react";
import { googleAuth, signUp, signIn, type User } from "../services/FirebaseManager"
import NavBar from "@/components/Home/NavBar";
import About from "@/components/Home/About";
import AuthenticationCard from "@/components/Authentication Cards/AuthenticationCard";
interface Props {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
}
function Home({ user, setUser }: Props) {
    const navigate = useNavigate();
    useEffect(() => {
        if (user) navigate("/dashboard");
    }, [user, navigate]);
    return (
        <Stack>
            <NavBar route="Home" user={user} onSignOut={() => { }} />
            <Grid templateColumns="5fr 3fr">
                <GridItem>
                    <About />
                </GridItem>
                <GridItem>
                    <AuthenticationCard
                        onSignIn={async (user) => {
                            setUser(await signIn(user.email, user.password));
                            navigate("/dashboard");
                        }}
                        onSignUp={async (user) => {
                            setUser(await signUp(user));
                            navigate("/dashboard");
                        }}
                        onGoogleAuth={async () => {
                            setUser(await googleAuth());
                            navigate("/dashboard");
                        }}
                    />
                </GridItem>
            </Grid>
        </Stack >
    );
}

export default Home;