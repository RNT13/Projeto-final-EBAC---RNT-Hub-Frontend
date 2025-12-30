import { Box } from '@/styles/globalStyles'
import { media } from '@/styles/theme'
import { styled } from 'styled-components'

export const PostCardContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const PostCardContent = styled.div`
  width: 100%;
  height: 100%;

  ${media.tablet} {
    ${Box} {
      padding: 6px;
      gap: 6px;
    }
  }
`

export const PostCardHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.baseglass.light02};
`

export const PostAuthorInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;
`

export const PostCardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const PostImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`

export const PostCardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 10px;
  border-top: 1px solid ${props => props.theme.colors.baseglass.light02};
`

export const PostButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  svg {
    width: 25px;
    height: 25px;
  }
`
