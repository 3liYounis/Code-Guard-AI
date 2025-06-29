import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Logo from '@/components/Home/Logo';
import { Button, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Stack justifyContent="space-between" mt={-3} p={5}>
            <Logo route="" />
            <Stack justifyContent="center" alignItems="center" padding={40}>
                <Stack justifyContent="center" alignItems="center" gap={4} height={400} width={900}>
                    <DotLottieReact
                        src="https://lottie.host/3c1eb341-9c5c-4c19-afd0-e8f522812e20/QEpC3WhhxQ.lottie"
                        loop
                        autoplay
                    />
                    <Heading fontFamily="cursive" fontWeight={800} fontSize={20}>All Routes Lead To Code Guard AI 😁</Heading>
                    <Button fontFamily="cursive" fontWeight={800} fontSize={20} onClick={() => navigate("/home")}>
                        <HStack gap={2}>
                            <Icon as={FaHome} />
                            <Text>Home</Text>
                        </HStack>
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default NotFound;