import Loading from "@/app/loading";
import { useFollowUserMutation, useGetCurrentUserQuery, useGetPostsByUsernameQuery, useUnfollowUserMutation } from "@/redux/slices/apiSlice";
import { Box } from "@/styles/globalStyles";
import { displayWebsite, normalizeWebsite } from "@/utils/website";
import { skipToken } from "@reduxjs/toolkit/query";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaCalendarAlt, FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";
import Button from "../Button/Button";
import PostCard from "../PostCard/PostCard";
import { Profile, ProfileAvatarSection, ProfileBg, ProfileFooter, ProfileInfo } from "../ProfileSection/ProfileSectionStyles";
import UserAvatarImage from "../UserAvatar/UserAvatarImage";
import { PostContainer, PublicProfileSectionContainer, PublicProfileSectionContent, UserButtonDiv, UserInfo } from "./PublicProfileSectionStyles";

type PublicPublicProfileSectionProps = {
  user: User
}

export default function PublicPublicProfileSection({ user }: PublicPublicProfileSectionProps) {
  const { data: currentUser } = useGetCurrentUserQuery();
  const { data: userPosts } = useGetPostsByUsernameQuery(user?.username ?? skipToken);
  const [followUser, { isLoading: followingLoading }] = useFollowUserMutation();
  const [unfollowUser, { isLoading: unfollowingLoading }] = useUnfollowUserMutation();


  if (!user) return (
    <PublicProfileSectionContainer>
      <Box $bgColor="glass" $padding="fit" direction="column" height="lg" width="lg" $align="center" $justify="center">
        <Loading />
      </Box>
    </PublicProfileSectionContainer>
  );

  const handleFollow = async () => {
    try {
      await followUser(user.username).unwrap();
      toast.success(`Seguindo ${user.username}`);
    } catch {
      toast.error("Erro ao seguir usuário");
    }
  };

  const handleUnfollow = async () => {
    try {
      await unfollowUser(user.username).unwrap();
      toast.success(`Você deixou de seguir ${user.username}`);
    } catch {
      toast.error("Erro ao deixar de seguir");
    }
  };


  return (
    <PublicProfileSectionContainer>
      <Box $bgColor="glass" $padding="fit" direction="column" height="lg" width="lg" $align="center" $justify="center">
        <PublicProfileSectionContent>
          <ProfileBg>
            <Image src={user.user_bg || '/assets/default_bg.avif'} alt="Background" fill loading="eager" />
          </ProfileBg>
          <Profile>
            <ProfileAvatarSection>
              <div>
                <UserAvatarImage user={user} size="large" position="relative" border="true" />
              </div>
              <UserInfo>
                <h2>{user?.full_name}</h2>
                <h2>{user?.user_tag}</h2>
              </UserInfo>
              <UserButtonDiv>
                {user.is_following ? (
                  // 👉 ESTÁ seguindo → pode deixar de seguir
                  <Button
                    variant="glass"
                    size="sm"
                    fullWidth
                    loading={followingLoading || unfollowingLoading}
                    disabled={currentUser?.username === user.username}
                    onClick={handleUnfollow}
                    leftIcon={<RiUserUnfollowFill />}
                  >
                    {currentUser?.username === user.username ? 'Você' : 'Deseguir'}
                  </Button>
                ) : (
                  // 👉 NÃO está seguindo → pode seguir
                  <Button
                    variant="glass"
                    size="sm"
                    fullWidth
                    loading={followingLoading || unfollowingLoading}
                    disabled={currentUser?.username === user.username}
                    onClick={handleFollow}
                    leftIcon={<RiUserFollowFill />}
                  >
                    {currentUser?.username === user.username ? 'Você' : 'Seguir'}
                  </Button>
                )}
              </UserButtonDiv>

            </ProfileAvatarSection>
            <ProfileInfo>
              <p>{user?.bio || 'Ainda sem biografia'}</p>
              <div>
                <p><FaLocationDot /> {user?.location || 'Ainda sem localização'}</p>
                <p>
                  {user?.website ? (
                    <Button
                      variant="ghost"
                      size="xs"
                      href={normalizeWebsite(user.website)}
                      target="_blank"
                      rel="noopener noreferrer"
                      leftIcon={<FaLink />}
                    >
                      {displayWebsite(user.website)}
                    </Button>
                  ) : (
                    <><FaLink />Ainda sem website</>
                  )}
                </p>
                <p><FaCalendarAlt />Conta criada em {user?.date_joined ? new Date(user.date_joined).toLocaleDateString("pt-BR") : ''}</p>
              </div>
            </ProfileInfo>
            <ProfileFooter>
              <p>{user?.followers_count} Seguidores</p>
              <p>{user?.following_count} Seguindo</p>
            </ProfileFooter>
          </Profile>
        </PublicProfileSectionContent>
      </Box>
      <PostContainer>
        <h2>Posts de {user?.full_name}</h2>
        {userPosts?.results.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostContainer>
    </PublicProfileSectionContainer>
  );
}

