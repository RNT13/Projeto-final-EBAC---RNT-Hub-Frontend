'use client'

import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
}
