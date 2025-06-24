import { useState, type ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

interface Props {
  children: ReactNode;
}
const CARD_WIDTH = "535px";
const CARD_HEIGHT = "640px";
const AnimatedBox = ({ children }: Props) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Flex
        width="100%"
        height="100%"
        justify="center"
        align="center"
        py={8}
        onClick={() => setFlipped((flipped) => !flipped)}
        cursor="pointer"
      >
        <Box perspective="3000px" width={CARD_WIDTH} height={CARD_HEIGHT}>
          <MotionBox
            position="relative"
            width="100%"
            height="100%"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {children}
          </MotionBox>
        </Box>
      </Flex>
    </MotionBox>
  );
};

export default AnimatedBox;
