import { Box } from '@/styles/globalStyles'
import { media, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const ExploreFeedContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 24px;
  color: ${theme.colors.textColor};

  > div:first-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  ${media.tablet} {
    flex-direction: column;

    ${Box} {
      width: 100%;
    }
  }
`
