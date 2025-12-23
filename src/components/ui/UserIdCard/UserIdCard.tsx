import Loading from '@/app/loading';
import default_bg from '@/assets/default_bg.avif';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import UserAvatarImage from '../UserAvatar/UserAvatarImage';
import { AvatarContainer, UserBgDiv, UserIdCardBody, UserIdCardContainer, UserIdCardContent, UserIdCardFooter, UserIdCardHeader, UserIdCardInfo } from "./UserIdCardStyles";

type UserIdCardProps = {
  users?: User
}

export default function UserIdCard({ users }: UserIdCardProps) {
  const route = useRouter();

  if (!users) {
    return <Loading />
  }

  const handleClick = () => {
    route.push(`/${users.username}`);
  }

  return (
    <UserIdCardContainer onClick={handleClick}>
      <UserIdCardContent>
        <AvatarContainer>
          <UserAvatarImage size="medium" position="flex" border="true" user={users} />
        </AvatarContainer>
        <UserIdCardInfo>
          <UserIdCardHeader>
            <h2>{users.full_name}</h2>
            <p>{users.user_tag}</p>
            <UserBgDiv>
              {users.user_bg ? <Image src={users.user_bg} fill alt="User Background" /> : <Image src={default_bg} fill alt="User Background" />}
            </UserBgDiv>
          </UserIdCardHeader>

          <UserIdCardBody>
            <p>{users.bio}</p>
          </UserIdCardBody>

          <UserIdCardFooter>
            <p>{users.followers_count} seguidores</p>
            <p>{users.following_count} seguindo</p>
          </UserIdCardFooter>
        </UserIdCardInfo>
      </UserIdCardContent>
    </UserIdCardContainer>
  )
}
