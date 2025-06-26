import { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ReviewCard, { type CodeReview } from "./Review Card/ReviewCard";
import ReviewCardSkeleton from "./Review Card/ReviewCardSkeleton";
import NewFileDialog from "./File Dialog/NewFileDialog";
import { getAllCodeReviews } from "@/services/api-client";
const Dashboard = () => {
    const [codeReviews, setCodeReviews] = useState<CodeReview[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const fetchReviews = async () => {
        setIsLoading(true);
        try {
            const reviews = await getAllCodeReviews();
            setCodeReviews(reviews);
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchReviews();
    }, []);
    const reviews = [...codeReviews].sort(
        (e1, e2) => new Date(e2.upload_date).getTime() - new Date(e1.upload_date).getTime()
    );
    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
            minChildWidth="md"
            justifyContent="center"
            alignItems="center"
        >
            <NewFileDialog
                isOpen={isDialogOpen}
                onOpenChange={({ open }) => setIsDialogOpen(open)}
                onSuccess={() => {
                    setIsDialogOpen(false);
                    fetchReviews();
                }}
            />
            {isLoading
                ? Array.from({ length: 8 }).map((_, i) => <ReviewCardSkeleton key={i} />)
                : reviews.map((review) => <ReviewCard codeReview={review} key={review.id} />)}
        </SimpleGrid>
    );
};

export default Dashboard;
