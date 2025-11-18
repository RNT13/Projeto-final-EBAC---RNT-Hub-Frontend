
'use client'

// 🧭 HEADER COMPONENT - Cabeçalho da aplicação
// ⚠️ ARQUIVO DELETÁVEL - Pode ser removido ao criar seu próprio header

import Link from 'next/link'
import styled from 'styled-components'
import { theme } from '@/styles/theme'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-image: linear-gradient(90deg, ${theme.colors.baseBlack.base}, ${theme.colors.baseBlack.light});
  border-bottom: 2px solid ${theme.colors.baseBlue.base};
  position: sticky;
  top: 0;
  z-index: 100;
`

const Logo = styled.div`
  h1 {
    color: ${theme.colors.textColor};
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(360deg, ${theme.colors.baseBlue.base}, ${theme.colors.baseBlue.light20});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <h1>RNT</h1>
      </Logo>
    </HeaderContainer>
  )
}

export default Header
      