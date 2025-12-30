import Loading from "@/app/loading"
import { useAppSelector } from "@/hooks/useAppDispatch"
import {
  useGetCurrentUserQuery,
  useGetFollowersQuery,
  useGetFollowingQuery,
  useGetPopularUsersQuery,
  useGetUsersBySearchQuery
} from "@/redux/slices/apiSlice"
import { RootState } from "@/redux/store"
import { UserRenderSection } from "../UserRenderSection/UserRenderSection"
import {
  UserIdSectionContainer,
  UserIdSectionContent
} from "./UserIdSectionStyles"

export const UserIdSection = () => {

  const search = useAppSelector((state: RootState) => state.search.value)
  const isSearching = search.length >= 2

  const { data: currentUser, isLoading: userLoading } = useGetCurrentUserQuery()

  const userId = currentUser?.id

  const { data: searchUsers, isLoading: searchLoading } = useGetUsersBySearchQuery(search, { skip: !isSearching })

  const { data: popularUsers } = useGetPopularUsersQuery()

  const { data: followers } = useGetFollowersQuery(userId!, { skip: !userId })

  const { data: following } = useGetFollowingQuery(userId!, { skip: !userId })

  console.log({
    currentUser,
    popularUsers,
    followers,
    following
  })

  if (userLoading || searchLoading) return <Loading />

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
        {!isSearching && (
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
  )
}
