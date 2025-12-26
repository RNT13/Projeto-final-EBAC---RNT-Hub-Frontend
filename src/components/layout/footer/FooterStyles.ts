import { media, theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  margin-bottom: 90px;

  p {
    color: ${theme.colors.baseBlue.light50};
    font-weight: 500;
  }

  ${media.mobile} {
    margin-bottom: 70px;
  }
`
