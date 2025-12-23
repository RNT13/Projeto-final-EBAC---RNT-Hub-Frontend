'use client'

import LeftSidebar from "@/components/ui/LeftSidebar/LeftSidebar";
import { ModalWrapper } from "@/components/ui/ModalWrapper/ModalWrapper";
import PostButton from "@/components/ui/PostButton/PostButton";
import PostWindow from "@/components/ui/PostWindow/PostWindow";
import RenderSection from "@/components/ui/RenderSection/RenderSection";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppDispatch";
import { setRenderSection } from "@/redux/slices/renderSectionSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { FeedContainer, FeedContent } from "./feedStyles";

export default function Feed() {
  const dispatch = useAppDispatch();
  const { activeSection } = useAppSelector((state: RootState) => state.renderSection);
  const [ispostModalOpen, setpostModalOpen] = useState(false);

  const handleSectionChange = (newSection: unknown) => {
    dispatch(setRenderSection(newSection));
  };

  return (
    <FeedContainer className="container">
      <FeedContent >
        <LeftSidebar activeSection={activeSection} setActiveSection={handleSectionChange} />

        <RenderSection activeSection={activeSection} />
      </FeedContent>

      <PostButton onClick={() => setpostModalOpen(!ispostModalOpen)} />

      <ModalWrapper isOpen={ispostModalOpen} onClose={() => setpostModalOpen(false)}>
        <PostWindow onClose={() => setpostModalOpen(false)} />
      </ModalWrapper>
    </FeedContainer>
  )
}
