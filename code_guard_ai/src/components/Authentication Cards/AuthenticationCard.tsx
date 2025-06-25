import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import type { User } from "@/App";

const MotionBox = motion.create(Box);

interface Props {
  onSignIn: (user: User) => void;
}

function AuthenticationCard({ onSignIn }: Props) {
  const [showSignIn, setShowSignIn] = useState(false);
  const flip = () => setShowSignIn(!showSignIn);

  return (
    <MotionBox
      height="100%"
      width="100%"
      display="grid"
      transformStyle="preserve-3d"
      animate={{ rotateY: showSignIn ? 180 : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      justifyItems="center"
      alignItems="center"
    >
      <Box width="70%" gridArea="1 / 1" p={8} backfaceVisibility="hidden">
        <SignUpForm onSwitch={flip} onSignIn={onSignIn} />
      </Box>

      <Box
        width="70%"
        gridArea="1 / 1"
        p={8}
        backfaceVisibility="hidden"
        transform="rotateY(180deg)"
      >
        <SignInForm onSwitch={flip} onSignIn={onSignIn}/>
      </Box>
    </MotionBox>
  );
}

export default AuthenticationCard;
