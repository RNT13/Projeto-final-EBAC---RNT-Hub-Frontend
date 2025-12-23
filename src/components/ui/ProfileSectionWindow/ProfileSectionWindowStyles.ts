import { media } from '@/styles/theme'
import { styled } from 'styled-components'

export const ProfileSectionWindowContainer = styled.div`
  height: 100%;
`

export const ProfileSectionWindowContent = styled.div`
  width: 450px;
  height: 100%;
  max-height: 100vh;

  display: flex;
  flex-direction: column;

  p {
    text-align: start;
    margin-bottom: 6px;
  }

  input,
  textarea {
    margin-bottom: 12px;
  }

  ${media.mobile} {
  }
`

export const ProfileSectionWindowHeader = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const ProfileSectionWindowBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const ProfileSectionWindowBg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const ProfileSectionWindowAvatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const ProfileSectionWindowInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

export const ProfileSectionWindowFooter = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  gap: 10px;
  border-top: 1px solid ${props => props.theme.colors.baseglass.light02};
`
