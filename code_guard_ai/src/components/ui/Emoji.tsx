import { Image, type ImageProps } from "@chakra-ui/react";
import security_lock from "../../assets/security_lock.png"
import clean from "../../assets/clean.png"
import maintain from "../../assets/maintain.png"
import bulb from "../../assets/bulb.png"
interface Props {
    type: string;
}
const Emoji = ({ type }: Props) => {
    const emojiMap: { [key: string]: ImageProps } = {
        "security": { src: security_lock, alt: 'security', boxSize: "20px" },
        "cleanliness": { src: clean, alt: 'cleanliness', boxSize: "20px" },
        "maintainability": { src: maintain, alt: 'maintainability', boxSize: "20px" },
        "other": { src: bulb, alt: 'maintainability', boxSize: "25px", marginTop: 0 },
    }
    return (
        <Image marginTop={2} {...emojiMap[type]} />
    )
}
export default Emoji;