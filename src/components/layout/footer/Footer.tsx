'use client'

import { FooterContainer } from './FooterStyles'

const getCurrentYear = () => {
  const date = new Date()
  return date.getFullYear()
}

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {getCurrentYear()} RNT Projects. Todos os direitos reservados.</p>
    </FooterContainer>
  )
}

