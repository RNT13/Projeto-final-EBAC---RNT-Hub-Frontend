'use client'

import { Box } from "@/styles/globalStyles";
import { BsFire } from "react-icons/bs";
import { FaCompass } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
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
            $isActive={activeSection === 'feed'}
            onClick={() => setActiveSection('feed')}
          >
            Feed
          </Button>

          <Button variant="glass" size="sm"
            leftIcon={<FaCompass />}
            $isActive={activeSection === 'explore'}
            onClick={() => setActiveSection('explore')}
          >
            Explorar
          </Button>

          <Button variant="glass" size="sm"
            leftIcon={<BsFire />}
            $isActive={activeSection === 'trending'}
            onClick={() => setActiveSection('trending')}
          >
            Hype
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
