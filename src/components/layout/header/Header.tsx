'use client'

import { BaseMaskedInput } from "@/components/ui/MaskedInput/BaseMaskedInput";
import UserSection from "@/components/ui/UserSection/UserSection";
import UserWindow from "@/components/ui/UserWindow/UserWindow";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { setRenderSection } from "@/redux/slices/renderSectionSlice";
import { setSearch } from "@/redux/slices/searchSlice";
import { RootState } from "@/redux/store";
import { Box } from "@/styles/globalStyles";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HeaderContainer, HeaderContent, LogoContainer, SearchBarContainer, UserContainer } from "./HeaderStyles";



export default function Header() {
  const dispatch = useAppDispatch();
  const { activeSection } = useAppSelector((state: RootState) => state.renderSection);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const route = useRouter();
  const search = useAppSelector((state: RootState) => state.search.value);


  const handleSectionChange = (newSection: SectionType) => {
    dispatch(setRenderSection(newSection));
    setIsMenuOpen(false)
    route.push(`/feed`);
  };

  return (
    <HeaderContainer className="container">
      <HeaderContent>
        <Box $bgColor="glass" $padding="lg" direction="row" height="lg" width="lg" $align="center" $justify="space-between">
          <LogoContainer onClick={() => handleSectionChange('feed')}>
            <Image src="/assets/logo_rnt_hub.png" width={50} height={50} alt="Logo" loading="eager" />
            <p>RNT Hub</p>
          </LogoContainer>

          <SearchBarContainer>
            <BaseMaskedInput
              value={search}
              onChange={(value) => dispatch(setSearch(value))}
              variant="search"
              onClick={() => handleSectionChange('usuarios')}
            />
          </SearchBarContainer>

          <UserContainer>
            <UserSection onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </UserContainer>
        </Box>
      </HeaderContent>
      <UserWindow isOpen={isMenuOpen} activeSection={activeSection} setActiveSection={handleSectionChange} />
    </HeaderContainer>
  )
}

