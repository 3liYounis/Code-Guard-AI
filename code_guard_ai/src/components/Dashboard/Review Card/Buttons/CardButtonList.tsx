import { useState } from "react";
import { Stack } from "@chakra-ui/react";
import CardButton from "./CardButton";
import { updateCodeReview, deleteCodeReview } from "@/services/api-client";
import type { CodeReview } from "../ReviewCard";
import NewFileDialog from "../../File Dialog/NewFileDialog";

interface Props {
    codeReview: CodeReview;
    refresh: () => Promise<void>;
}

const CardButtonList = ({ codeReview, refresh }: Props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingReviewId, setEditingReviewId] = useState<number | null>(null);
    const handleEdit = async (reviewId: number, file: File) => {
        try {
            const updatedReview = await updateCodeReview(reviewId, file);
            await refresh();
            console.log("Review updated successfully:", updatedReview);
        }
        catch (error) {
            console.error("Failed to update review:", error);
        }
    };
    const handleDelete = async (reviewId: number) => {
        try {
            await deleteCodeReview(reviewId);
            await refresh();
            console.log("Review deleted successfully");
        } catch (error) {
            console.error("Failed to delete review:", error);
        }
    };
    const openEditDialog = (reviewId: number) => {
        setEditingReviewId(reviewId);
        setIsDialogOpen(true);
    };
    const onDialogSubmit = async (file: File) => {
        if (editingReviewId !== null) {
            await handleEdit(editingReviewId, file);
        }
        setIsDialogOpen(false);
        setEditingReviewId(null);
    };
    return (
        <>
            <NewFileDialog
                isOpen={isDialogOpen}
                onOpenChange={({ open }) => setIsDialogOpen(open)}
                onSuccess={() => {
                    setIsDialogOpen(false);
                    refresh();
                }}
                inline={true}
                onSubmit={onDialogSubmit}
            />
            <Stack gap={0.5}>
                <CardButton type="View" onClicked={() => { }} />
                <CardButton
                    type="Edit"
                    onClicked={() => openEditDialog(codeReview.id)}
                />
                <CardButton
                    type="Delete"
                    onClicked={() => handleDelete(codeReview.id)}
                />
            </Stack>
        </>
    );
};
export default CardButtonList;