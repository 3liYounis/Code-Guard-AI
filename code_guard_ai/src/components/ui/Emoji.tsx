import { Image, type ImageProps } from "@chakra-ui/react";
import security_lock from "../../assets/security_lock.png"
import clean from "../../assets/clean.png"
import maintain from "../../assets/maintain.png"
import bulb from "../../assets/bulb.png"
import file from "../../assets/file.png"
interface Props {
    type: string;
}
const Emoji = ({ type }: Props) => {
    const emojiMap: { [key: string]: ImageProps } = {
        "Security": { src: security_lock, alt: 'security', boxSize: "20px" },
        "Cleanliness": { src: clean, alt: 'cleanliness', boxSize: "20px" },
        "Maintainability": { src: maintain, alt: 'maintainability', boxSize: "20px" },
        "File": { src: file, alt: 'file', boxSize: "160px" },
        "other": { src: bulb, alt: 'other', boxSize: "25px", marginTop: 0 },
    }
    return (
        <Image marginTop={2} {...emojiMap[type]} />
    )
}
export default Emoji;