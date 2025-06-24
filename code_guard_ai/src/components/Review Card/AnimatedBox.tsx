import { Children, type ReactNode } from "react";
import { Box, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
const MotionBox = motion.create(Box);
interface Props {
    width: number;
    height: number;
    frontText: string;
    backText: string;
    children: ReactNode;
}
const AnimatedBox = ({ children, width, height, frontText, backText }: Props) => {
    const [flipped, setFlipped] = useState(false);
    const [front, back] = Children.toArray(children).slice(0, 2);
    return (
        <MotionBox initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}>
            <Box perspective="3000px"
                width={width}
                height={height + 30}
                position="relative">
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
                        {front}
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
                        {back}
                    </Box>
                </MotionBox>
                <Button
                    position="absolute"
                    bottom="10px"
                    left="50%"
                    transform="translateX(-50%)"
                    marginBottom={3}
                    onClick={() => setFlipped(f => !f)}>
                    {flipped ? backText : frontText}
                </Button>
            </Box>
        </MotionBox>
    );
};
export default AnimatedBox;