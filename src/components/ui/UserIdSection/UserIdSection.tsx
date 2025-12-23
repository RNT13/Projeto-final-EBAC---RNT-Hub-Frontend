import Loading from "@/app/loading"
import { useGetFollowersQuery, useGetFollowingQuery, useGetUsersQuery } from "@/redux/slices/apiSlice"
import { Box } from "@/styles/globalStyles"
import UserIdCard from "../UserIdCard/UserIdCard"
import { UserIdSectionContainer, UserIdSectionContent } from "./UserIdSectionStyles"



export const UserIdSection = () => {
  const { data: users, isLoading: isUsersLoading, isError: isUsersError } = useGetUsersQuery()
  const { data: followers, isLoading: followersLoading, isError: followersError } = useGetFollowersQuery(123)
  const { data: following, isLoading: followingLoading, isError: followingError } = useGetFollowingQuery(123)

  if (!users || !followers || !following) {
    return <Loading />
  }

  if (isUsersLoading || followersLoading || followingLoading) {
    return <Loading />
  }

  if (isUsersError || followersError || followingError) {
    return <Loading />
  }

  return (
    <UserIdSectionContainer>
      <UserIdSectionContent>

        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Usuários mais populares</h2>

          {users.results.length === 0 && <p>Ninguém ainda 😢</p>}

          {users.results.map(user => (
            <UserIdCard key={user.id} users={user} />
          ))}
        </Box>

        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Usuários que seguem você</h2>

          {followers.results.length === 0 && <p>Ninguém ainda 😢</p>}

          {followers.results.map(follower => (
            <UserIdCard key={follower.id} users={follower} />
          ))}
        </Box>

        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Usuários que você segue</h2>

          {following.results.length === 0 && <p>Ninguém ainda 😢</p>}

          {following.results.map(following => (
            <UserIdCard key={following.id} users={following} />
          ))}
        </Box>

      </UserIdSectionContent>
    </UserIdSectionContainer>
  )
}

