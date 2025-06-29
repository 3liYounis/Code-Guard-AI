import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Flex, Stack } from "@chakra-ui/react";
import ReviewCard, { type CodeReview } from "../components/Dashboard/Review Card/ReviewCard";
import ReviewCardSkeleton from "../components/Dashboard/Review Card/ReviewCardSkeleton";
import NewFileDialog from "../components/Dashboard/File Dialog/NewFileDialog";
import { getAllCodeReviews } from "@/services/api-client";
import { addCodeReview } from "@/services/api-client";
import NavBar from "@/components/Home/NavBar";
import { type User, signOutUser } from "@/services/FirebaseManager";
import StaticCodeReviews from "@/Data/StaticCodeReviews";
import EmptyDashboard from "@/components/Dashboard/EmptyDashboard";
interface Props {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
}
const Dashboard = ({ user, setUser }: Props) => {
    const navigate = useNavigate();
    const [codeReviews, setCodeReviews] = useState<CodeReview[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const fetchReviews = async () => {
        setIsLoading(true);
        try {
            const reviews = await getAllCodeReviews();
            setCodeReviews(reviews);
        }
        catch (error) {
            console.error("Failed to fetch reviews:", error);
        }
        finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        if (user)
            fetchReviews();
        else
            navigate("/home")
    }, [user]);
    const reviews = [...codeReviews].sort(
        (e1, e2) => new Date(e2.upload_date).getTime() - new Date(e1.upload_date).getTime()
    );
    const emptyReviews = reviews.length == 0;
    return (
        <Stack>
            <NavBar route={"Dashboard"} user={user} showNewFile={!emptyReviews} onNewFileClick={() => setIsDialogOpen(true)} onSignOut={() => { signOutUser(); setUser(undefined); navigate("/home"); }} />
            <NewFileDialog
                isOpen={isDialogOpen}
                onOpenChange={({ open }) => setIsDialogOpen(open)}
                onSuccess={() => {
                    setIsDialogOpen(false);
                    fetchReviews();
                }}
                onSubmit={addCodeReview}
            />
            <Flex wrap="wrap" gap={4} justify="start" justifyContent="center" alignItems="center">
                {emptyReviews && <EmptyDashboard onNewFileClick={() => setIsDialogOpen(true)} />}
                {isLoading
                    ? Array.from({ length: 8 }).map((_, i) => (
                        <ReviewCardSkeleton key={i} />
                    ))
                    : reviews.map((review) => (
                        <ReviewCard
                            codeReview={review}
                            key={review.id}
                            refresh={fetchReviews}
                        />
                    ))}
            </Flex>
        </Stack>
    );
};

export default Dashboard;
