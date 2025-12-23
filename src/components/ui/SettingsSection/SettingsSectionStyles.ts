import { theme } from '@/styles/theme'
import { styled } from 'styled-components'

export const SettingsSectionContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const SettingsSectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 24px;

  h2 {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 12px;

  &:hover {
    background-color: ${theme.colors.baseglass.light02};
    cursor: pointer;
    transition: background-color 0.5s ease-in-out;
  }
`
