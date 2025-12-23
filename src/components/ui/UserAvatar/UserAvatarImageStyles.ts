import { css, styled } from 'styled-components'

interface Props {
  $size: 'xsmall' | 'small' | 'medium' | 'large'
  $position: 'flex' | 'relative'
  $border: 'true' | 'false'
}

const sizeVariants = {
  xsmall: css`
    width: 35px;
    height: 35px;
  `,
  small: css`
    width: 50px;
    height: 50px;
  `,
  medium: css`
    width: 100px;
    height: 100px;
  `,
  large: css`
    width: 150px;
    height: 150px;
  `
}

const positionVariants = {
  flex: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  relative: css`
    position: relative;
  `
}

const borderVariants = {
  true: css`
    border: 3px solid ${props => props.theme.colors.baseglass.light02};
  `,
  false: css`
    border: none;
  `
}

export const UserAvatarImageContainer = styled.div``

export const UserAvatarImageContent = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;

  ${props => borderVariants[props.$border]}

  ${props => sizeVariants[props.$size]}

  ${props => positionVariants[props.$position]}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    width: 100%;
    height: 100%;
    color: ${props => props.theme.colors.baseBlack.light20};
  }
`
