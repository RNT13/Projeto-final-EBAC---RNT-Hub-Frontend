import { media } from '@/styles/theme'
import { styled } from 'styled-components'

export const LeftSidebarContainer = styled.div`
  width: 280px;
  height: 100%;
  position: sticky;
  top: 120px;

  ${media.tablet} {
    position: fixed;
    width: 100%;
    height: 50px;
    bottom: 0px;
    left: 0px;
    top: unset;
    z-index: 99;
  }
`

export const LeftSidebarContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: sticky;
  top: 100px;

  button {
    width: 100%;
    height: 50px;

    ${media.tablet} {
      width: fit-content;
      height: fit-content;

      font-size: 0.6rem;
    }
  }

  ${media.tablet} {
    flex-direction: row;
  }
`
