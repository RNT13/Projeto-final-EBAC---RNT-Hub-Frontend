import { media } from '@/styles/theme'
import { styled } from 'styled-components'

export const PublicProfileSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.textColor};
`

export const PublicProfileSectionContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PublicProfile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`

export const PublicProfileBg = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid ${props => props.theme.colors.baseglass.light02};
`

export const PublicProfileAvatarSection = styled.div`
  position: absolute;
  top: 100px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 24px;
`

export const PublicProfileAvatar = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${props => props.theme.colors.baseglass.light04};
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

  ${media.tablet} {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const PublicProfileInfo = styled.div`
  width: 100%;
  min-height: 80px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;

  p {
    text-align: center;
    margin-bottom: 12px;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 24px;

    p {
      display: flex;
      align-items: center;

      svg {
        width: 14px;
        height: 14px;
        margin-right: 5px;
      }
    }
  }

  button {
    color: ${props => props.theme.colors.textColor};
  }
`

export const PublicProfileFooter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid ${props => props.theme.colors.baseglass.light02};
  padding-top: 12px;
  gap: 12px;
`
