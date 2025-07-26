import { useState } from "react";
import { Stack } from "@chakra-ui/react";
import CardButton from "./CardButton";
import { updateCodeReview, deleteCodeReview } from "@/services/api-client";
import type { CodeReview } from "../ReviewCard";
import NewFileDialog from "../../File Dialog/NewFileDialog";

interface Props {
    codeReview: CodeReview;
    refresh: () => Promise<void>;
    onDelete: (reviewID: number) => void;
    setShowCode: () => void;
    onClose: () => void;
}

const CardButtonList = ({ codeReview, refresh, onDelete, setShowCode, onClose }: Props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingReviewId, setEditingReviewId] = useState<number | null>(null);
    const handleEdit = async (reviewId: number, file: File) => {
        try {
            await updateCodeReview(reviewId, file);
            await refresh();
        }
        catch (error) { }
    };
    const handleDelete = async (reviewId: number) => {
        try {
            onDelete(reviewId);
            await deleteCodeReview(reviewId);
            await refresh();
        }
        catch (error) { }
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
                onSubmit={onDialogSubmit}
            />
            <Stack gap={0.5}>
                <CardButton type="View" onClicked={setShowCode} />
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