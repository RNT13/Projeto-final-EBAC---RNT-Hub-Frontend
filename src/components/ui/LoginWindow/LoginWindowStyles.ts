import { theme } from '@/styles/theme'
import styled from 'styled-components'

export const LoginWindowContainer = styled.div``

export const LoginWindowContent = styled.div``

export const LoginWindowHeader = styled.div``

export const LoginWindowBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const LoginWindowFooter = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  border-top: 1px solid ${theme.colors.baseBlue.light30};
`
