import { Box } from "@/styles/globalStyles";
import NewsSection from "../NewsSection/NewsSection";
import ProfileSection from "../ProfileSection/ProfileSection";
import SettingsSection from "../SettingsSection/SettingsSection";
import { UserIdSection } from "../UserIdSection/UserIdSection";

interface RenderSectionProps {
  activeSection: SectionType;
}

export default function RenderSection({ activeSection }: RenderSectionProps) {

  switch (activeSection) {
    case 'noticias':
      return (
        <NewsSection />
      );

    case 'videos':
      return (
        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Seção de Vídeos</h2>
        </Box>
      );

    case 'fotos':
      return (
        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Seção de Fotos</h2>
        </Box>
      );

    case 'chat':
      return (
        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Seção de Chat</h2>
        </Box>
      );

    case 'perfil':
      return (
        <ProfileSection />
      );

    case 'mensagens':
      return (
        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Seção de Mensagens</h2>
        </Box>
      );

    case 'notificacoes':
      return (
        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
          <h2>Seção de Notificação</h2>
        </Box>
      );

    case 'configuracoes':
      return (
        <SettingsSection />
      );

    case 'usuarios':
      return (
        <UserIdSection />
      );

    default:
      return null;
  }
}
