import Logo from '@/components/Home/Logo';
import { Heading, Stack } from '@chakra-ui/react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useNavigate } from 'react-router-dom';
interface Props {
    isLoading: boolean;
}
const LoadingPage = ({ isLoading }: Props) => {
    const navigate = useNavigate();
    if (!isLoading)
        navigate("/home")
    return (
        <Stack justifyContent="space-between" mt={-3} p={5}>
            <Logo route="" />
            <Stack justifyContent="center" alignItems="center" padding={40}>
                <Stack justifyContent="center" alignItems="center" gap={0} height={400} width={900}>
                    <DotLottieReact
                        src="https://lottie.host/cad67bcc-7ad3-4d77-93db-40ce643401ca/GXhagfCZJX.lottie"
                        loop
                        autoplay
                    />
                    <Heading fontFamily="cursive" fontWeight={800} fontSize={20}>Hang tight, Great Things Take Time 😁</Heading>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default LoadingPage;