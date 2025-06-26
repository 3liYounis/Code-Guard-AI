import { SimpleGrid } from "@chakra-ui/react";
import ReviewCard, { type CodeReview } from "./Review Card/ReviewCard";
import ReviewCardSkeleton from "./Review Card/ReviewCardSkeleton";
import NewFileDialog from "./File Dialog/NewFileDialog";
// import StaticCodeReviews from "@/Data/StaticCodeReviews";
// const staticData: CodeReview[] = StaticCodeReviews.sort((e1, e2) => e2.modificationDate.getTime() - e1.modificationDate.getTime());
interface Props {
    codeReviews: CodeReview[];
}
const Dashboard = ({ codeReviews }: Props) => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    const isLoading = false;
    const reviews = codeReviews.sort((e1, e2) => e2.modificationDate.getTime() - e1.modificationDate.getTime());
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} minChildWidth="md" justifyContent="center" alignItems="center">
            <NewFileDialog />
            {isLoading && skeletons.map(skeleton =>
                <ReviewCardSkeleton key={skeleton} />
            )}
            {!isLoading && reviews.map(review =>
                <ReviewCard codeReview={review} key={review.id} />
            )}


        </SimpleGrid >
    )
}
export default Dashboard;