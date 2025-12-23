'use client'

import Loading from '@/app/loading';
import { useAuthInit } from '@/hooks/useAuthInit';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  width: 100%;
`

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const { ready } = useAuthInit();

  if (!ready) {
    return (
      <Wrapper>
        <Main>
          <Loading />
        </Main>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
}
