import Loading from "@/app/loading"
import { useAppSelector } from "@/hooks/useAppDispatch"
import { useGetFollowersQuery, useGetFollowingQuery, useGetPopularUsersQuery, useGetUsersBySearchQuery, useGetUsersQuery } from "@/redux/slices/apiSlice"
import { RootState } from "@/redux/store"
import { UserRenderSection } from "../UserRenderSection/UserRenderSection"
import { UserIdSectionContainer, UserIdSectionContent } from "./UserIdSectionStyles"



export const UserIdSection = () => {
  const search = useAppSelector((state: RootState) => state.search.value);
  const isSearching = search.length >= 2;

  const { data: allUsers, isLoading: allLoading } = useGetUsersQuery();
  const { data: searchUsers, isLoading: searchLoading } = useGetUsersBySearchQuery(search, { skip: !isSearching });
  const { data: popularUsers } = useGetPopularUsersQuery();

  const { data: followers } = useGetFollowersQuery(123);
  const { data: following } = useGetFollowingQuery(123);

  if (allLoading || searchLoading) return <Loading />;

  return (
    <UserIdSectionContainer>
      <UserIdSectionContent>

        {/* 🔍 SEARCH MODE */}
        {isSearching && searchUsers && (
          <UserRenderSection
            title={`Resultados para "${search}"`}
            data={searchUsers.results}
          />
        )}

        {/* 🌍 DEFAULT MODE */}
        {!isSearching && allUsers && (
          <>
            <UserRenderSection
              title="🔥 Usuários mais populares"
              data={popularUsers?.results ?? []}
            />

            <UserRenderSection
              title="Usuários que seguem você"
              data={followers?.results ?? []}
            />

            <UserRenderSection
              title="Usuários que você segue"
              data={following?.results ?? []}
            />
          </>
        )}

      </UserIdSectionContent>
    </UserIdSectionContainer>
  );
};


