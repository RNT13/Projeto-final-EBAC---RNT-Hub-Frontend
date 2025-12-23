import { Box } from '@/styles/globalStyles'
import { media } from '@/styles/theme'
import { styled } from 'styled-components'

export const ProfileSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.textColor};

  ${media.tablet} {
    ${Box} {
      padding: 6px;
    }
  }
`

export const ProfileSectionContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Profile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;

  ${media.tablet} {
    padding: 6px;
  }
`

export const ProfileBg = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid ${props => props.theme.colors.baseglass.light02};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ProfileAvatarSection = styled.div`
  position: absolute;
  top: 100px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;

  ${media.tablet} {
    width: 100%;
    padding: 0px 6px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 12px;
    top: -80px;
  }
`

export const UserInfo = styled.div`
  width: 60%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;

  ${media.tablet} {
    width: 100%;
    margin-left: 0px;
    margin-top: 10px;
    align-items: center;
  }
`

export const UserButtonDiv = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: end;
`

export const ProfileInfo = styled.div`
  width: 100%;
  min-height: 80px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  p {
    width: 100%;
    display: flex;
    align-items: center;
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: normal;

    svg {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 24px;

    ${media.tablet} {
      gap: 12px;
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-bottom: 12px;
    }
  }

  button {
    color: ${props => props.theme.colors.textColor};
  }

  ${media.tablet} {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`

export const ProfileFooter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.baseglass.light02};
  padding-top: 12px;
  gap: 12px;
`
