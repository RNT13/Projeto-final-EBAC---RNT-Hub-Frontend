import { styled } from 'styled-components'

export const PostWindowContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const PostWindowContent = styled.div`
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.textColor};
`

export const PostWindowHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${props => props.theme.colors.baseglass.light02};
`

export const PostWindowDetails = styled.div`
  width: 100%;
  padding: 10px 0;
  gap: 10px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  svg {
    font-size: 1.5rem;
    margin-right: 10px;
  }
`

export const PostWindowBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const PostWindowFooter = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
