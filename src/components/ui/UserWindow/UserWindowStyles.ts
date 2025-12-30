import { slideFromTop } from '@/styles/animations'
import { media, theme } from '@/styles/theme'
import { styled } from 'styled-components'

type Props = {
  $isOpen: boolean
}

export const UserWindowContainer = styled.div<Props>`
  position: absolute;
  top: 85px;
  right: 20px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;

  button {
    color: ${props => props.theme.colors.textColor};
    font-weight: 500;
    font-size: 1rem;
  }

  ${slideFromTop}

  ${media.mobile} {
    top: 178px;
  }
`

export const UserWindowContent = styled.div``

export const UserWindowHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.baseglass.light02};
`

export const UserWindowAvatar = styled.div``

export const UserWindowInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-left: 10px;

  p {
    color: ${props => props.theme.colors.textColor};
    font-weight: 500;
    font-size: 1rem;
  }
`

export const UserWindowBody = styled.div``

export const UserWindowFooter = styled.div`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.baseglass.light02};

  button {
    color: ${theme.colors.baseRed.dark};
    text-shadow: 1px 1px 2px ${theme.colors.baseBlack.light50};
  }
`
