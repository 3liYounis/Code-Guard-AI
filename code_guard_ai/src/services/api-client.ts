import { getIdToken } from "./FirebaseManager"
import type { CodeReview } from "../components/Dashboard/Review Card/ReviewCard";
const BASE_URL = "http://localhost:5000/codeReview";
export const addCodeReview = async (file: File): Promise<CodeReview> => {
    const token = await getIdToken();
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    });
    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.error || "Failed to add review");
    }
    return result as CodeReview;
};
export const updateCodeReview = async (reviewId: number, file: File): Promise<CodeReview> => {
    const token = await getIdToken();
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${BASE_URL}?id=${reviewId}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    });
    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.error || "Failed to update review");
    }
    return result as CodeReview;
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