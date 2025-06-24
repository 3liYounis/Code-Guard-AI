import { Stack, HStack, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
const ReviewCardSkeleton = () => {
    return (
        <Stack width={450} height={540} border="solid" borderRadius={30} marginTop={4}>
            < HStack padding={8} >
                <SkeletonCircle size={16} />
                <Stack>
                    <SkeletonText noOfLines={1} width={40} />
                    <SkeletonText noOfLines={1} width={20} />
                </Stack>
            </HStack >
            <Stack justifyContent="center" alignItems="center" gap={7}>
                <Skeleton height="80px" width={370} />
                <Stack>
                    <SkeletonText noOfLines={1} gap="4" height={10} width={420} />
                    <SkeletonText noOfLines={1} gap="4" height={10} width={380} />
                    <SkeletonText noOfLines={1} gap="4" height={10} width={350} />
                </Stack>
                <HStack>
                    <SkeletonText noOfLines={1} gap="4" height={4} width={100} />
                    <SkeletonText noOfLines={1} gap="4" height={4} width={150} />
                    <SkeletonText noOfLines={1} gap="4" height={4} width={170} />
                </HStack>
                <Skeleton height="30px" width={180} mt={5} />
            </Stack>
        </Stack >)
}

export default ReviewCardSkeleton;