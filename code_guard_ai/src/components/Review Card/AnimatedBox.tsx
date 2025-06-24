import { useState, type ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

interface Props {
    children: ReactNode;
    width: number;
    height: number;
}
const AnimatedBox = ({ children, width, height }: Props) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
        >
            <Flex
                width={width}
                height={height}
                justify="center"
                align="center"
                py={8}
                onClick={() => setFlipped((flipped) => !flipped)}
                cursor="pointer"
            >
                <Box perspective="3000px" width={width} height={height}>
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
        </MotionBox >
    );
};

export default AnimatedBox;
