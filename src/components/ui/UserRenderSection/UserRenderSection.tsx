import { Box } from "@/styles/globalStyles";
import FollowUserCard from "../FollowUserCard/FollowUserCard";
import UserIdCard from "../UserIdCard/UserIdCard";

type UserRenderSectionProps =
  | {
    title: string
    data: User[]
    mode: 'user'
  }
  | {
    title: string
    data: Follow[]
    mode: 'follow'
    followType: 'followers' | 'following'
  }

export function UserRenderSection(props: UserRenderSectionProps) {
  return (
    <Box $bgColor="glass" direction="column" width="lg">
      <h2>{props.title}</h2>

      {props.data.length === 0 && <p>Ninguém ainda 😢</p>}

      {props.mode === 'user' &&
        props.data.map(user => (
          <UserIdCard key={user.id} users={user} />
        ))}

      {props.mode === 'follow' &&
        props.data.map(follow => (
          <FollowUserCard
            key={follow.id}
            follow={follow}
          />
        ))}
    </Box>
  )
}

