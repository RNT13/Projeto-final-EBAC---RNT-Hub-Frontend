import { useGetCurrentUserQuery } from "@/redux/slices/apiSlice";
import Button from "../Button/Button";
import UserAvatarImage from "../UserAvatar/UserAvatarImage";
import { UserSectionContainer, UserSectionContent } from "./UserSectionStyles";

type UserSectionProps = {
  onClick: () => void
}

export default function UserSection({ onClick }: UserSectionProps) {
  const { data: user } = useGetCurrentUserQuery();

  return (
    <UserSectionContainer>
      <UserSectionContent >
        <Button onClick={onClick} variant="glass" size="sm" leftIcon={<UserAvatarImage size="xsmall" position="flex" border="false" user={user} />}>
          {user?.full_name
            ?.split(' ')[0]
            ?.toLowerCase()
            ?.replace(/^\w/, c => c.toUpperCase())}
        </Button>
      </UserSectionContent>
    </UserSectionContainer>
  )
}
