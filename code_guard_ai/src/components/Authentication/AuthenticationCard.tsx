import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";

const MotionBox = motion.create(Box);

export default function AuthenticationCard() {
  const [showSignIn, setShowSignIn] = useState(false);
  const flip = () => setShowSignIn((v) => !v);

  return (
    <Box
      h="100dvh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
    >
      <MotionBox
        width="50%"
        display="grid"
        transformStyle="preserve-3d"
        animate={{ rotateY: showSignIn ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <Box gridArea="1 / 1" p={8} backfaceVisibility="hidden">
          <SignUpForm onSwitch={flip} />
        </Box>

        <Box
          gridArea="1 / 1"
          p={8}
          backfaceVisibility="hidden"
          transform="rotateY(180deg)"
        >
          <SignInForm onSwitch={flip} />
        </Box>
      </MotionBox>
    </Box>
  );
}
