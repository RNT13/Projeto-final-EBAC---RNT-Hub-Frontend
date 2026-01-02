import { CloseButton } from '@/styles/globalStyles'
import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const UsernameFormContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: ${theme.colors.textColor};

  ${CloseButton} {
    top: -5px;
    right: -5px;
  }
`

export const UsernameFormHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`

export const UsernameFormBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 5px;
  }
`

export const UsernameFormFooter = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid ${props => props.theme.colors.baseglass.light02};
`
