import { CloseButton } from '@/styles/globalStyles'
import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const LoginFormContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${CloseButton} {
    z-index: 100;
    top: 5px;
    right: 5px;
  }
`

export const LoginFormContent = styled.div`
  height: 100%;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
`

export const LoginFormHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.baseglass.light02};
`

export const LoginFormBody = styled.div``

export const LoginFormFooter = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  border-top: 1px solid ${theme.colors.baseglass.light02};
`
