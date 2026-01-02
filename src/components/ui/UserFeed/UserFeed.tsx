import Loading from "@/app/loading";
import { useUserFeedQuery } from "@/redux/slices/apiSlice";
import { Box } from "@/styles/globalStyles";
import PostCard from "../PostCard/PostCard";
import { UserFeedContainer } from "./UserFeedStyles";

export default function UserFeed() {
  const { data: userFeed, isLoading: userFeedLoading } = useUserFeedQuery();

  if (userFeedLoading) return <Loading />;

  return (
    <UserFeedContainer>
      <div>
        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Feed do Usuário</h2>
        </Box>

        {userFeed?.results.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* <Box $bgColor="glass" direction="column" height="lg" width="sm" $align="center" $justify="center">
        <h2>Trending News</h2>
      </Box> */}
    </UserFeedContainer>
  );
}

