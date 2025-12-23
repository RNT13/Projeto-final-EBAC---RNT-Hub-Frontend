import Loading from "@/app/loading";
import { useExploreFeedQuery } from "@/redux/slices/apiSlice";
import { Box } from "@/styles/globalStyles";
import PostCard from "../PostCard/PostCard";
import { NewsSectionContainer } from "./NewsSectionStyles";

export default function NewsSection() {
  const { data: exploreFeed, isLoading: exploreFeedLoading, error: exploreFeedError, } = useExploreFeedQuery();

  if (exploreFeedLoading) return <Loading />;
  if (exploreFeedError) return (
    <div>
      <p>Erro ao carregar notícias</p>
    </div>
  );

  return (
    <NewsSectionContainer>
      <div>
        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Seção de Notícias</h2>
        </Box>

        {/* EXPLORE FEED */}
        {Array.isArray(exploreFeed?.results) &&
          exploreFeed.results.map((post) => (
            <PostCard key={`explore-${post.id}`} post={post} />
          ))}
      </div>

      <Box $bgColor="glass" direction="column" height="lg" width="sm" $align="center" $justify="center">
        <h2>Trending News</h2>
      </Box>
    </NewsSectionContainer>
  );
}

