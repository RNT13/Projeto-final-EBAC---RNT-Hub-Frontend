'use client'

import { theme } from '@/styles/theme'
import styled, { css, keyframes } from 'styled-components'

type LoadingProps = {
  size?: 'sm' | 'md' | 'lg'
  fullHeight?: boolean
}

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

const sizeVariants = {
  sm: css`
    width: 24px;
    height: 24px;
    border-width: 3px;
  `,
  md: css`
    width: 36px;
    height: 36px;
    border-width: 4px;
  `,
  lg: css`
    width: 56px;
    height: 56px;
    border-width: 5px;
  `,
}

const LoadingContainer = styled.div<{ $fullHeight?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;

  width: 100%;
  height: ${({ $fullHeight }) => ($fullHeight ? '100%' : 'auto')};
`

const Spinner = styled.div<{ $size: 'sm' | 'md' | 'lg' }>`
  border-style: solid;
  border-color: ${theme.colors.gray2};
  border-top-color: ${theme.colors.blue2};
  border-radius: 50%;

  animation: ${spin} 0.9s linear infinite;

  ${({ $size }) => sizeVariants[$size]}
`

export default function Loading({
  size = 'md',
  fullHeight = true,
}: LoadingProps) {
  return (
    <LoadingContainer $fullHeight={fullHeight}>
      <Spinner $size={size} />
    </LoadingContainer>
  )
}
