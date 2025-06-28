import { Image, type ImageProps } from "@chakra-ui/react";
import security_lock from "../../assets/Emojies/security_lock.png"
import clean from "../../assets/Emojies/clean.png"
import maintain from "../../assets/Emojies/maintain.png"
import bulb from "../../assets/Emojies/bulb.png"
import eye from "../../assets/Emojies/eye.png"
import pencil from "../../assets/Emojies/pencil.png"
import wrong from "../../assets/Emojies/wrong.png"
interface Props {
    type: string;
}
const Emoji = ({ type }: Props) => {
    const emojiMap: { [key: string]: ImageProps } = {
        "Security": { src: security_lock, alt: 'security', boxSize: "20px" },
        "Cleanliness": { src: clean, alt: 'cleanliness', boxSize: "20px" },
        "Maintainability": { src: maintain, alt: 'maintainability', boxSize: "20px" },
        "View": { src: eye, alt: 'view', boxSize: "20px", marginTop: 0 },
        "Edit": { src: pencil, alt: 'edit', boxSize: "18px", marginTop: 0 },
        "Delete": { src: wrong, alt: 'delete', boxSize: "17px", marginTop: 0 },
        "other": { src: bulb, alt: 'other', boxSize: "20px", marginTop: 0 },
    }
    return (
        <Image marginTop={2} {...emojiMap[type]} />
    )
}
export default Emoji;