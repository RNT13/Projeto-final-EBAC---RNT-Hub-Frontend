import Loading from "@/app/loading";
import { useExploreFeedQuery } from "@/redux/slices/apiSlice";
import { Box } from "@/styles/globalStyles";
import PostCard from "../PostCard/PostCard";
import { ExploreFeedContainer } from "./ExploreFeedStyles";

export default function ExploreFeed() {
  const { data: exploreFeed, isLoading: exploreFeedLoading } = useExploreFeedQuery();

  if (exploreFeedLoading) return <Loading />;

  return (
    <ExploreFeedContainer>
      <div>
        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Explore os Feeds</h2>
        </Box>

        {exploreFeed?.results.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </ExploreFeedContainer>
  );
}

