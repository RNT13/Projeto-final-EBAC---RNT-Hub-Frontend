import { media } from '@/styles/theme'
import { styled } from 'styled-components'

export const PostButtonContainer = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 99;

  ${media.tablet} {
    bottom: 60px;
    right: 0px;
  }
`

export const PostButtonContent = styled.div`
  width: fit-content;
`
