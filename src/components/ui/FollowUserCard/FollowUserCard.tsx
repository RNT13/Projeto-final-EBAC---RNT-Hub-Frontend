import Loading from '@/app/loading'
import {
  useGetCurrentUserQuery,
  useGetUserByUsernameQuery
} from '@/redux/slices/apiSlice'
import UserIdCard from '../UserIdCard/UserIdCard'

type FollowUserCardProps = {
  follow: Follow
}

export default function FollowUserCard({ follow }: FollowUserCardProps) {
  const { data: currentUser } = useGetCurrentUserQuery()

  const username = currentUser && (
    follow.follower_username === currentUser.username
      ? follow.following_username
      : follow.follower_username
  )

  const { data: user, isLoading } = useGetUserByUsernameQuery(username!, {
    skip: !username
  })

  if (isLoading || !user) return <Loading />

  return <UserIdCard users={user} />
}
