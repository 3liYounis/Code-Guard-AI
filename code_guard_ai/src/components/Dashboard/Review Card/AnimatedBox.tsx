import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import ReviewCardFront from "./ReviewCardFront";
import ReviewCardBack from "./ReviewCardBack";
import type { CodeReview } from "./ReviewCard";
const MotionBox = motion.create(Box);
interface Props {
  width: number;
  height: number;
  codeReview: CodeReview;
}
const AnimatedBox = ({ width, height, codeReview }: Props) => {
  const [flipped, setFlipped] = useState(false);
  const onSwitch = () => {
    setFlipped(!flipped);
  };
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Box
        perspective="3000px"
        width={width}
        height={height + 50}
        position="relative"
      >
        <MotionBox
          position="relative"
          width="100%"
          height="100%"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Box
            position="absolute"
            width="100%"
            height="100%"
            backfaceVisibility="hidden"
            borderRadius={40}
            p={4}
          >
            <ReviewCardFront onSwitch={onSwitch} codeReview={codeReview} />
          </Box>
          <Box
            position="absolute"
            width="100%"
            height="100%"
            backfaceVisibility="hidden"
            transform="rotateY(180deg)"
            borderRadius={40}
            p={4}
            overflowY="auto"
          >
            <ReviewCardBack onSwitch={onSwitch} codeReview={codeReview} />
          </Box>
        </MotionBox>
      </Box>
    </MotionBox>
  );
};
export default AnimatedBox;
