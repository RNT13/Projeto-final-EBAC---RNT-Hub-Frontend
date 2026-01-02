
'use client'

// 🎨 GLOBAL STYLES - Estilos globais com Styled Components

import styled, { createGlobalStyle } from 'styled-components';
import { media, theme, themeConfig } from './theme';

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-image: linear-gradient(120deg, ${theme.colors.baseCyan.dark},  ${theme.colors.baseBlue.base}, ${theme.colors.baseRed.light});
      background-attachment: fixed;
      font-family: var(--font-roboto);
    }

    .container {
      max-width: 1024px;
      margin: 0 auto;
      width: 100%;

      ${media.pc}{
        width: 95%;
      }

      ${media.tablet}{
        width: 95%;
      }

      ${media.mobile}{
        width: 95%;
      }
    }
  `;

export const OverlayBlur = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    z-index: 100;
  `

export const OverlayDarck = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
  `

export const CloseButton = styled.button`
    border-radius: 50%;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: transparent;
    cursor: pointer;

    svg {
      font-size: 24px;
      color: ${theme.colors.textColor};
    }

    &:hover {
      svg {
        color: ${theme.colors.baseBlue.light};
      }
    }
  `

export const TitleH2 = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: ${theme.colors.baseBlue.light30};
  `

export const TitleH3 = styled.h3`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
    color: ${theme.colors.baseBlue.dark30};
  `

export const MinorTextH4 = styled.h3`
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 8px;
    color: ${theme.colors.baseBlue.dark30};
  `

export const GradientTextH2 = styled.h2`
    font-size: 38px;
    font-weight: 600;
    color: ${theme.colors.textColor};
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, ${themeConfig.dark.colors.neon.pink1}, ${themeConfig.dark.colors.neon.blue2});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `

export const GradientSpan = styled.span`
    font-size: 38px;
    font-weight: 600;
    color: ${theme.colors.textColor};
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(135deg, ${themeConfig.dark.colors.neon.pink1}, ${themeConfig.dark.colors.neon.blue2});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    &:hover {
      background: linear-gradient(360deg, ${themeConfig.light.colors.neon.blue2}, ${themeConfig.light.colors.neon.pink1});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `

export const Line = styled.span.attrs({ 'aria-hidden': true })`
    width: 80px;
    height: 2px;
    background: ${({ theme }) => theme.colors.baseBlack.light50};
    margin: 0 2px;
  `

export const Dot = styled.span.attrs({ 'aria-hidden': true })`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.baseBlue.base};
    margin: 0 2px;
  `

export const Box = styled.div<BoxProps>`
    width: ${props => {
    switch (props.width) {
      case 'xm':
        return '10%'
      case 'sm':
        return '30%'
      case 'md':
        return '50%'
      case 'lg':
        return '100%'
      case 'fit':
        return 'only fit-content'
      case undefined:
        return '100%'
    }
  }};
    height: ${props => {
    switch (props.height) {
      case 'xm':
        return '10%'
      case 'sm':
        return '30%'
      case 'md':
        return '50%'
      case 'lg':
        return '100%'
      case 'fit':
        return 'only fit-content'
      case undefined:
        return '100%'
    }
  }};
    display: flex;
  gap: 12px;
  padding: ${props => {
    switch (props.$padding) {
      case 'xm':
        return '5px'
      case 'sm':
        return '10px'
      case 'md':
        return '15px'
      case 'lg':
        return '20px'
      case undefined:
        return '12px'
    }
  }};
  border-radius: 16px;

  flex-direction: ${props => props.direction};
  justify-content: ${props => props.$justify};
  align-items: ${props => props.$align};

  background: ${props => {
    switch (props.$bgColor) {
      case 'primary':
        return themeConfig.light.colors.neon.blue1;
      case 'secondary':
        return themeConfig.light.colors.neon.blue2;
      case 'tertiary':
        return themeConfig.light.colors.neon.pink1;
      case 'glass':
        return `
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(7px) saturate(180%);
          -webkit-backdrop-filter: blur(10px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.15);

          /*  brilho lateral suave */
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);

          /* opcional: highlight no topo */
          border-top: 1px solid rgba(255, 255, 255, 0.3);

          /* opcional: highlight na lateral esquerda */
          border-left: 1px solid rgba(255, 255, 255, 0.3);
        `;
      case undefined:
        return 'trasparent';
    }
  }}
`
