import { getIdToken } from "./FirebaseManager"
import type { CodeReview } from "../components/Dashboard/Review Card/ReviewCard";
const BASE_URL = "http://localhost:5000/codeReview";
export const addCodeReview = async (review: CodeReview): Promise<void> => {
    const token = await getIdToken();
    const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ codeReview: review }),
    });
    const result = await response.json();
    if (!response.ok)
        throw new Error(result.error || "Failed to add review");
};
export const updateCodeReview = async (reviewId: number, updatedReview: CodeReview): Promise<void> => {
    const token = await getIdToken();
    const response = await fetch(`${BASE_URL}?id=${reviewId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(updatedReview),
    });
    const result = await response.json();
    if (!response.ok)
        throw new Error(result.error || "Failed to update review");
};
export const deleteCodeReview = async (reviewId: number): Promise<void> => {
    const token = await getIdToken();
    const response = await fetch(`${BASE_URL}?id=${reviewId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });
    const result = await response.json();
    if (!response.ok)
        throw new Error(result.error || "Failed to delete review");
};