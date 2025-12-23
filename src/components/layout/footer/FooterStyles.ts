import { media, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;

  p {
    color: ${theme.colors.baseBlue.dark50};
    font-weight: 500;
  }

  ${media.mobile} {
    margin-bottom: 70px;
  }
`
