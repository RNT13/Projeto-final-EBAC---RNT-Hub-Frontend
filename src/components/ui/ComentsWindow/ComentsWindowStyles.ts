import { drawer } from '@/styles/animations'
import { media } from '@/styles/theme'
import { styled } from 'styled-components'

export const ComentsWindowContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const ComentsWindowContent = styled.div<{ $isOpen: boolean }>`
  width: 100%;
  height: 100%;
  ${drawer}
`

export const UserComents = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 12px;
  display: flex;
  gap: 10px;

  img {
    object-fit: cover;
    border-radius: 12px;
  }
`

export const ComentTextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  textarea {
    resize: none;
    border: none;
    width: 100%;
    height: 100%;
    min-height: 30px;
    font-size: 0.9rem;
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.baseglass.light02};
    margin-bottom: 10px;

    &::placeholder {
      color: ${props => props.theme.colors.textColor};
    }

    &:focus {
      outline: none;
      border: none;
      color: ${props => props.theme.colors.textColor};
      background-color: ${props => props.theme.colors.baseglass.light02};
    }
  }

  ${media.tablet} {
    textarea {
      font-size: 1rem;
    }
  }
`

export const TextArea = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.baseglass.light02};

  img {
    object-fit: cover;
    border-radius: 12px;
  }
`

export const ComentButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`
