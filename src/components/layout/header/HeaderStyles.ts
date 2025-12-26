import { Box } from '@/styles/globalStyles'
import { media } from '@/styles/theme'
import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  height: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 24px 0px;

  ${media.tablet} {
    height: 100%;
    padding: 12px 0px;
    position: relative;
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;

  ${Box} {
    ${media.mobile} {
      flex-direction: column;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.baseBlue.base};
  }

  p {
    font-size: 24px;
  }

  svg {
    font-size: 32px;
  }
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SearchBarContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    width: 100%;
  }
`
