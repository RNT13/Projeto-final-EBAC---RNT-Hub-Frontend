import { CloseButton } from '@/styles/globalStyles'
import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const RegisterFormContainer = styled.div`
  position: relative;
  width: 100vw;
  max-width: 500px;
  height: 100%;

  ${CloseButton} {
    z-index: 100;
    top: 5px;
    right: 5px;
  }
`

export const RegisterFormContent = styled.div`
  height: 100%;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const RegisterFormHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${theme.colors.baseglass.light02};
`

export const RegisterFormBody = styled.form`
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
    gap: 10px;
    font-size: 1.2rem;
  }

  input {
    border-radius: 16px;
    border-color: ${theme.colors.baseglass.light02};
  }

  button {
    margin-top: 10px;
  }
`

export const RegisterFormFooter = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  border-top: 1px solid ${theme.colors.baseglass.light02};
`
