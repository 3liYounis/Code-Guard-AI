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
    <Box display="flex" alignItems="center" justifyContent="center">
      <MotionBox
        width="100%"
        display="grid"
        transformStyle="preserve-3d"
        animate={{ rotateY: showSignIn ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        justifyItems="center"
        alignItems="center"
      >
        <Box width="100%" gridArea="1 / 1" p={8} backfaceVisibility="hidden">
          <SignUpForm onSwitch={flip} />
        </Box>

        <Box
          gridArea="1 / 1"
          p={8}
          backfaceVisibility="hidden"
          transform="rotateY(180deg)"
          width="100%"
        >
          <SignInForm onSwitch={flip} />
        </Box>
      </MotionBox>
    </Box>
  );
}
