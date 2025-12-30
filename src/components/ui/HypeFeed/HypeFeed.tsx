import Loading from "@/app/loading";
import { useAlgorithmFeedQuery } from "@/redux/slices/apiSlice";
import { Box } from "@/styles/globalStyles";
import { BsFire } from "react-icons/bs";
import PostCard from "../PostCard/PostCard";
import { HypeFeedContainer } from "./HypeFeedStyles";

export default function HypeFeed() {
  const { data: exploreFeed, isLoading: exploreFeedLoading } = useAlgorithmFeedQuery();

  if (exploreFeedLoading) return <Loading />;

  return (
    <HypeFeedContainer>
      <div>
        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Só Hype <BsFire /></h2>
        </Box>

        {exploreFeed?.results.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </HypeFeedContainer>
  );
}
