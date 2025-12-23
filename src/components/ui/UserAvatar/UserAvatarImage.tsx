import Loading from "@/app/loading";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { UserAvatarImageContainer, UserAvatarImageContent } from "./UserAvatarImageStyles";

type Props = {
  user?: User
  size: 'xsmall' | 'small' | 'medium' | 'large'
  position: 'flex' | 'relative'
  border: 'true' | 'false'
}

export default function UserAvatarImage({ user, size, position, border }: Props) {
  if (!user) return (
    <UserAvatarImageContainer>
      <UserAvatarImageContent $size={size} $position={position} $border={border}>
        <Loading size="sm" />
      </UserAvatarImageContent>
    </UserAvatarImageContainer>
  )

  return (
    <UserAvatarImageContainer>
      {user?.avatar ? (
        <UserAvatarImageContent $size={size} $position={position} $border={border}>
          <Image src={user?.avatar} fill sizes="100%" loading="eager" alt="User Avatar" />
        </UserAvatarImageContent>
      ) : (
        <UserAvatarImageContent $size={size} $position={position} $border={border}>
          <FaUser />
        </UserAvatarImageContent>
      )}
    </UserAvatarImageContainer>
  )
}
