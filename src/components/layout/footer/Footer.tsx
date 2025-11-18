
'use client'

// 🦶 FOOTER COMPONENT - Rodapé da aplicação
// ⚠️ ARQUIVO DELETÁVEL - Pode ser removido ao criar seu próprio footer

import styled from 'styled-components'
import { theme } from '@/styles/theme'

const FooterContainer = styled.footer`
  background-image: linear-gradient(90deg, ${theme.colors.baseBlack.base}, ${theme.colors.baseBlack.light});
  border-top: 2px solid ${theme.colors.baseBlue.base};
  padding: 40px 20px 20px;
  margin-top: auto;
  text-align: center;

  p {
    color: ${theme.colors.baseBlue.light30};
    font-size: 14px;
    opacity: 0.8;
  }
`

const getCurrentYear = () => {
  const date = new Date()
  return date.getFullYear()
}

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {getCurrentYear()} RNT Projects. Todos os direitos reservados.</p>
    </FooterContainer>
  )
}

export default Footer
        