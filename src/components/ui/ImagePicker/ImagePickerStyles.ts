import styled, { css } from 'styled-components'

interface ImageWrapperProps {
  $shape: 'square' | 'circle' | 'rectangle'
}

const shapeVariants = {
  square: css`
    width: 140px;
    height: 140px;
  `,
  circle: css`
    width: 160px;
    height: 160px;
    border-radius: 50%;
  `,
  rectangle: css`
    width: 100%;
    height: 120px;
  `
}

export const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.45);

  opacity: 0;
  transition: opacity 0.3s ease;

  pointer-events: none;
`

export const Wrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  ${({ $shape }) => shapeVariants[$shape]}

  &:hover ${HoverOverlay} {
    opacity: 1;
  }
`
export const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.baseglass.light02};

  ${({ $shape }) => shapeVariants[$shape]}

  border-radius: 16px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

export const ChangeButton = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;

  font-size: 14px;
  cursor: pointer;

  pointer-events: all;
`
