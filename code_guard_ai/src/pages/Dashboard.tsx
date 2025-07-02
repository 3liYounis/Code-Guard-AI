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
import EmptyDashboard from "@/components/Dashboard/EmptyDashboard";
import StaticCodeReviews from "@/Data/StaticCodeReviews";
import SourceCodeViewer from "@/components/Dashboard/SourceCodeViewer";
interface Props {
    user: User | undefined;
    setUser: (user: User | undefined) => void;
}
const Dashboard = ({ user, setUser }: Props) => {
    const navigate = useNavigate();
    const [codeReviews, setCodeReviews] = useState<CodeReview[]>([]);
    const [showCode, setShowCode] = useState<CodeReview | null>(null);
    const [isSourceDialogOpen, setIsSourceDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const deleteReview = (reviewID: number) => {
        setCodeReviews(codeReviews.filter(review => review.id != reviewID))
    }
    const fetchReviews = async () => {
        setIsLoading(true);
        try {
            const reviews = await getAllCodeReviews();
            setCodeReviews(reviews);
            setIsLoading(false);
        }
        catch (error) {
            console.error("Failed to fetch reviews:", error);
        }
    };
    useEffect(() => {
        if (user) {
            setCodeReviews(user.code_reviews);
            setIsLoading(false);
        }
        else
            navigate("/home")
    }, [user]);
    // const reviews = StaticCodeReviews.sort(
    //     (e1, e2) => e2.upload_date.toDate().getTime() - e1.upload_date.toDate().getTime()
    // );
    const reviews = [...codeReviews].sort(
        (e1, e2) => e2.upload_date.toDate().getTime() - e1.upload_date.toDate().getTime()
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
            <SourceCodeViewer
                codeReview={showCode}
                isOpen={isSourceDialogOpen}
                onOpenChange={({ open }) => {
                    if (!open) {
                        setIsSourceDialogOpen(false);
                        setShowCode(null);
                    }
                }}

            />
            <Flex wrap="wrap" gap={4} justify="start" justifyContent="center" alignItems="center">
                {(emptyReviews && !isLoading) && <EmptyDashboard onNewFileClick={() => setIsDialogOpen(true)} />}
                {isLoading
                    ? Array.from({ length: reviews.length + 1 }).map((_, i) => (
                        <ReviewCardSkeleton key={i} />
                    ))
                    : reviews.map((review) => (
                        <ReviewCard
                            codeReview={review}
                            key={review.id}
                            refresh={fetchReviews}
                            onDelete={deleteReview}
                            setShowCode={() => {
                                setShowCode(review);
                                setIsSourceDialogOpen(true);
                            }}
                        />
                    ))}
            </Flex>
        </Stack>
    );
};

export default Dashboard;
