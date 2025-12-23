import { theme } from '@/styles/theme'
import styled from 'styled-components'

/* ============================================================
 * CONTAINER
 * ============================================================ */

export const MaskedInputContainer = styled.div<{ $variant?: string; $hasToggle?: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;

  input,
  textarea,
  select {
    width: 100%;
    padding: 12px;
    border-radius: 18px;
    border: 2px solid ${theme.colors.baseBlue.light20};
    font-size: 1rem;
    line-height: 1.4;
    color: ${theme.colors.baseBlack.base};
    background-color: ${theme.colors.baseBlue.light50};
    z-index: 2;

    transition:
      border-color 0.2s ease,
      background-color 0.2s ease,
      box-shadow 0.2s ease;

    ${({ $hasToggle }) => $hasToggle && `padding-right: 44px;`}

    input.input-hidden {
      position: absolute;
      inset: 0;
      opacity: 0;
      cursor: pointer;
    }

    /* Hover */
    &:hover {
      border-color: ${theme.colors.baseBlue.base};
    }

    /* Focus */
    &:focus {
      outline: none;
      border-color: ${theme.colors.baseBlue.dark};
      box-shadow: 0 0 0 3px ${theme.colors.baseBlue.light20};
      background-color: #fff;
    }

    /* Disabled */
    &:disabled {
      background-color: ${theme.colors.baseBlue.light20};
      cursor: not-allowed;
      opacity: 0.7;
    }

    /* Error */
    &.error {
      border-color: ${theme.colors.baseRed.base};
      background-color: ${theme.colors.baseRed.light02};
      color: ${theme.colors.baseRed.light30};

      &:focus {
        box-shadow: 0 0 0 3px ${theme.colors.baseRed.light20};
      }
    }

    &::placeholder {
      color: ${theme.colors.baseBlack.light50};
    }

    &.error::placeholder {
      color: ${theme.colors.baseRed.light50};
    }
  }

  input,
  .imask-input,
  select {
    height: 44px;
  }

  /* ===================== TEXTAREA ===================== */

  textarea {
    min-height: 96px;
    resize: none;
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.baseBlue.base} ${theme.colors.baseBlue.light20};
  }

  /* ===================== SELECT ===================== */

  select {
    appearance: none;
    padding-right: 40px;
    cursor: pointer;

    background-image: url("data:image/svg+xml;utf8,<svg fill='%23444' height='16' viewBox='0 0 24 24' width='16' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
    background-repeat: no-repeat;
    background-position: right 14px center;
    background-size: 14px;
  }
`

/* ============================================================
 * SEARCH ICON
 * ============================================================ */

export const SearchIcon = styled.div`
  position: absolute;
  left: 14px;
  top: 12px;
  font-size: 1.1rem;
  color: ${theme.colors.baseBlack.light50};
  pointer-events: none;
`

/* ============================================================
 * PASSWORD TOGGLE
 * ============================================================ */

export const PasswordToggle = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2;
  color: ${theme.colors.baseBlue.light};

  svg {
    font-size: 1.5rem;
  }
`

/* ============================================================
 * FILE PREVIEW
 * ============================================================ */

export const PreviewImageDiv = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  gap: 10px;

  img {
    border-radius: 10px;
    object-fit: cover;
    border: 2px solid ${theme.colors.baseBlue.light20};
    background: #fff;
  }
`

/* ============================================================
 * FILE BUTTON
 * ============================================================ */

export const FileTrigger = styled.button`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 10px;
  border: 2px solid ${theme.colors.baseBlue.light20};
  background: ${theme.colors.baseBlue.light50};

  color: ${theme.colors.baseBlue.dark};
  font-size: 0.95rem;
  font-weight: 500;

  cursor: pointer;

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    border-color: ${theme.colors.baseBlue.base};
    background: #fff;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.baseBlue.light20};
  }
`

/* ============================================================
 * ERROR
 * ============================================================ */

export const ErrorDiv = styled.div`
  color: ${theme.colors.baseRed.light30};
  font-size: 0.85rem;
  font-weight: 500;
  background-color: ${theme.colors.baseRed.light04};
  padding: 6px 12px;
  border-radius: 10px;
`
