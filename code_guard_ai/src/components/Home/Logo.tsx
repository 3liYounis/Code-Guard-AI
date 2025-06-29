import { Stack, HStack, Image, Heading } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import AnalysisLogoDark from "../../assets/AnalysisLogoDark.png";
import AnalysisLogoLight from "../../assets/AnalysisLogoLight.png";
interface Props {
    route: string
}
const Logo = ({ route }: Props) => {
    const { colorMode } = useColorMode();
    var logoSrc = colorMode == "dark" ? AnalysisLogoDark : AnalysisLogoLight;
    return (
        <HStack gap={5}>
            <Image src={logoSrc} boxSize="60px"></Image>
            <Stack gap={0}>
                <Heading fontSize="2xl" fontFamily="cursive">
                    Code Guard AI
                </Heading>
                <Heading fontSize="xl" color="fg.muted" fontFamily="cursive">
                    {route}
                </Heading>
            </Stack>
        </HStack>
    )
}

export default Logo;