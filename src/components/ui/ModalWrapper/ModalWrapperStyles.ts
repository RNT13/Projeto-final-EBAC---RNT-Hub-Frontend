import { media } from '@/styles/theme'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;

  background-color: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;

  overflow-y: auto;
  overscroll-behavior: contain;
`

export const ModalContainer = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;

  ${media.tablet} {
    padding: 0px 6px;
  }
`

export const ModalContent = styled.div`
  width: 100%;
  max-width: 420px; /* 🔥 limite essencial */

  margin: auto;

  /* garante que nunca estoure no mobile */
  box-sizing: border-box;
`
