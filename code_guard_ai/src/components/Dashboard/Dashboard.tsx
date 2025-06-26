import { useState } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ReviewCard, { type CodeReview } from "./Review Card/ReviewCard";
import ReviewCardSkeleton from "./Review Card/ReviewCardSkeleton";
import NewFileDialog from "./File Dialog/NewFileDialog";
interface Props {
    codeReviews: CodeReview[];
    refreshReviews: () => void;
}
const Dashboard = ({ codeReviews, refreshReviews }: Props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    const isLoading = false;

    const reviews = codeReviews.sort(
        (e1, e2) => e2.upload_date.getTime() - e1.upload_date.getTime()
    );

    return (
        <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
            minChildWidth="md"
            justifyContent="center"
            alignItems="center"
        >
            <NewFileDialog isOpen={isDialogOpen} onOpenChange={({ open }) => setIsDialogOpen(open)}
                onSuccess={() => {
                    setIsDialogOpen(false);
                    refreshReviews();
                }}
            />
            {isLoading &&
                skeletons.map((skeleton) => <ReviewCardSkeleton key={skeleton} />)}
            {!isLoading &&
                reviews.map((review) => <ReviewCard codeReview={review} key={review.id} />)}
        </SimpleGrid>
    );
};

export default Dashboard;
