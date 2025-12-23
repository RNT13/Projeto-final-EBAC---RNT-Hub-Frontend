import { media, theme } from '@/styles/theme'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100%;
  color: ${theme.colors.textColor};
`

export const HomeContent = styled.div`
  width: 100%;
  height: 100%;
`

export const HomeTitle = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;

  h1 {
    font-size: 3rem;
  }

  ${media.tablet} {
    text-align: center;
  }
`

export const HomeMain = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  display: flex;
  gap: 5px;

  ${media.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
`

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`

export const RightDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
