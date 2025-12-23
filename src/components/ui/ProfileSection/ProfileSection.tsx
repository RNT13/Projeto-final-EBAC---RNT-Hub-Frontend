import Loading from "@/app/loading";
import imageBG from '@/assets/default_bg.avif';
import { useGetCurrentUserQuery } from "@/redux/slices/apiSlice";
import { Box } from "@/styles/globalStyles";
import { displayWebsite, normalizeWebsite } from "@/utils/website";
import Image from "next/image";
import { useState } from "react";
import { FaCalendarAlt, FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Button from "../Button/Button";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import ProfileSectionWindow from "../ProfileSectionWindow/ProfileSectionWindow";
import UserAvatarImage from "../UserAvatar/UserAvatarImage";
import { Profile, ProfileAvatarSection, ProfileBg, ProfileFooter, ProfileInfo, ProfileSectionContainer, ProfileSectionContent, UserButtonDiv, UserInfo } from "./ProfileSectionStyles";

export default function ProfileSection() {
  const { data: user } = useGetCurrentUserQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!user) return (
    <ProfileSectionContainer>
      <Box $bgColor="glass" $padding="fit" direction="column" height="lg" width="lg" $align="center" $justify="center">
        <Loading />
      </Box>
    </ProfileSectionContainer>
  );

  return (
    <ProfileSectionContainer>
      <Box $bgColor="glass" $padding="fit" direction="column" height="lg" width="lg" $align="center" $justify="center">
        <ProfileSectionContent>
          <ProfileBg>
            <Image src={user.user_bg || imageBG} alt="Background" fill />
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
                <Button variant="glass" size="sm" fullWidth onClick={() => setIsModalOpen(true)} >
                  Editar
                </Button>
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
        </ProfileSectionContent>
      </Box>
      <ModalWrapper isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProfileSectionWindow onClose={() => setIsModalOpen(false)} />
      </ModalWrapper>
    </ProfileSectionContainer>
  );
}

