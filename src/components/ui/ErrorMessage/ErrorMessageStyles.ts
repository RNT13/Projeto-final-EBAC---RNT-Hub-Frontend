
import { theme } from '@/styles/theme';
import { styled } from 'styled-components';

export const ErrorMessageContainer = styled.div``;

export const ErrorMessageContent = styled.div`
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem;
  text-align: center;
  color: ${theme.colors.baseBlue.light40};
  background-color: ${theme.colors.baseRed.dark08};

  svg {
    font-size: 2rem;
    margin-right: 0.5rem;
  }
`;
    