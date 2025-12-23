import { styled } from 'styled-components'

export const UserSectionContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const UserSectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    img {
      object-fit: cover;
      overflow: hidden;
    }
  }
`
