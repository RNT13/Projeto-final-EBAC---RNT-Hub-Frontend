import { Box } from "@/styles/globalStyles";
import ExploreFeed from "../ExploreFeed/ExploreFeed";
import HypeFeed from "../HypeFeed/HypeFeed";
import ProfileSection from "../ProfileSection/ProfileSection";
import SettingsSection from "../SettingsSection/SettingsSection";
import UserFeed from "../UserFeed/UserFeed";
import { UserIdSection } from "../UserIdSection/UserIdSection";

interface RenderSectionProps {
  activeSection: SectionType;
}

export default function RenderSection({ activeSection }: RenderSectionProps) {

  switch (activeSection) {
    case 'feed':
      return (
        <UserFeed />
      );

    case 'explore':
      return (
        <ExploreFeed />
      );

    case 'trending':
      return (
        <HypeFeed />
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
