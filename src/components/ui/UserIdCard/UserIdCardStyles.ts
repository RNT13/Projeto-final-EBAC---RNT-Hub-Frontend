import { media, theme } from '@/styles/theme'
import styled from 'styled-components'

export const UserIdCardContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${theme.colors.textColor};
`

export const UserIdCardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 5px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.baseglass.light02};

  &:hover {
    background-color: ${props => props.theme.colors.baseglass.light04};
    cursor: pointer;

    h2 {
      color: ${props => props.theme.colors.baseBlue.dark20};
    }
  }

  ${media.tablet} {
    flex-direction: column;
    position: relative;
    gap: 40px;
  }
`

export const UserIdCardInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 12px;
  }
`

export const AvatarContainer = styled.div`
  ${media.tablet} {
    z-index: 2;
    position: relative;
    top: 40px;
  }
`

export const UserIdCardHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 4px;
  padding: 5px;
  z-index: 1;

  ${media.tablet} {
    position: absolute;
    top: 0;
    width: 100%;
    height: 90px;
    justify-content: start;
  }
`

export const UserBgDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
  overflow: hidden;
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet} {
    top: 0px;
  }
`

export const UserIdCardBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  p {
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
    white-space: normal;
  }

  ${media.tablet} {
    display: none;
  }
`

export const UserIdCardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  padding: 5px;
`
