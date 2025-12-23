'use client'

import { Box } from "@/styles/globalStyles";
import { FaVideo } from "react-icons/fa";
import { IoMdChatbubbles, IoMdPhotos } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import Button from "../Button/Button";
import { LeftSidebarContainer, LeftSidebarContent } from "./LeftSidebarStyles";

interface LeftSidebarProps {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

export default function LeftSidebar({ activeSection, setActiveSection }: LeftSidebarProps) {
  return (
    <LeftSidebarContainer>
      <Box $bgColor="glass" direction="column" height="lg" width="lg" >
        <LeftSidebarContent>

          <Button variant="glass" size="sm"
            leftIcon={<LuLayoutDashboard />}
            $isActive={activeSection === 'noticias'}
            onClick={() => setActiveSection('noticias')}
          >
            Noticias
          </Button>

          <Button variant="glass" size="sm"
            leftIcon={<FaVideo />}
            $isActive={activeSection === 'videos'}
            onClick={() => setActiveSection('videos')}
          >
            Videos
          </Button>

          <Button variant="glass" size="sm"
            leftIcon={<IoMdPhotos />}
            $isActive={activeSection === 'fotos'}
            onClick={() => setActiveSection('fotos')}
          >
            Fotos
          </Button>

          <Button variant="glass" size="sm"
            leftIcon={<IoMdChatbubbles />}
            $isActive={activeSection === 'chat'}
            onClick={() => setActiveSection('chat')}
          >
            Chat
          </Button>
        </LeftSidebarContent>
      </Box>
    </LeftSidebarContainer>
  )
}
