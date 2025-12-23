import { CloseButton } from '@/styles/globalStyles'
import { styled } from 'styled-components'

export const PasswordFormContainer = styled.div`
  width: 100vw;
  max-width: 400px;
  height: 100%;
  position: relative;

  ${CloseButton} {
    top: -5px;
    right: -5px;
  }
`

export const PasswordFormHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`

export const PasswordFormBody = styled.div`
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

export const PasswordFormFooter = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-top: 1px solid ${props => props.theme.colors.baseglass.light02};
`
