import { Stack } from "@chakra-ui/react";
import CardButton from "./CardButton";
import { updateCodeReview, deleteCodeReview } from "@/services/api-client";
import type { CodeReview } from "../ReviewCard";
interface Props {
    codeReview: CodeReview;
    refresh: () => Promise<void>;
}
const handler = () => { }
const CardButtonList = ({ codeReview, refresh }: Props) => {
    const handleEdit = async (reviewId: number, file: File) => {
        try {
            const updatedReview = await updateCodeReview(reviewId, file);
            refresh();
            console.log("Review updated successfully:", updatedReview);
        }
        catch (error) {
            console.error("Failed to update review:", error);
        }
    };
    const handleDelete = async (reviewId: number) => {
        try {
            await deleteCodeReview(reviewId);
            refresh();
            console.log("Review deleted successfully");
        }
        catch (error) {
            console.error("Failed to delete review:", error);
        }
    };
    return (
        <Stack gap={0.5}>
            <CardButton type="View" onClicked={handler} />
            <CardButton type="Edit" onClicked={() => handleEdit(codeReview.id, new File([], "New File.new"))} />
            <CardButton type="Delete" onClicked={() => handleDelete(codeReview.id)} />
        </Stack>
    )
}
export default CardButtonList;