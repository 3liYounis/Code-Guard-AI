import { HStack, Skeleton, SkeletonCircle, Stack } from '@chakra-ui/react'
import './App.css'
function App() {
  return (
    <HStack gap="5" justifyContent="center" alignItems="center" padding={10}>
      <SkeletonCircle size="12" />
      <Stack flex="1">
        <Skeleton height="5" />
        <Skeleton height="5" width="80%" />
      </Stack>
    </HStack>
  )
}
export default App;