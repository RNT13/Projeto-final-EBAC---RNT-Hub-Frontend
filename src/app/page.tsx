
'use client'

// 🏠 PÁGINA INICIAL - Exemplo com Styled Components
// ⚠️ ARQUIVO DELETÁVEL - Pode ser removido ao criar sua própria página

import { FaReact, FaCode, FaRocket } from 'react-icons/fa'
import styled from 'styled-components'
import { theme } from '@/styles/theme'

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, ${theme.colors.baseBlack.light20}, ${theme.colors.baseBlack.dark30});
  padding: 60px 20px;
`

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 80px;

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    color: ${theme.colors.textColor};
    margin-bottom: 20px;
    background: linear-gradient(360deg, ${theme.colors.baseBlue.base}, ${theme.colors.baseBlue.light20});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.25rem;
    color: ${theme.colors.baseBlue.light30};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`

export default function Home() {
  return (
    <MainContainer>
      <HeroSection>
        <h1>RNT Next CLI</h1>
        <p>
          Projeto criado com RNT Next CLI. Configurado com Styled Components e pronto para desenvolvimento.
        </p>
      </HeroSection>
    </MainContainer>
  )
}
        