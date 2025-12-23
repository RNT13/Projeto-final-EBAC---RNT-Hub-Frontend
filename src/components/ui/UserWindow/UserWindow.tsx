import { useAppDispatch } from "@/hooks/useAppDispatch";
import { apiSlice, useGetCurrentUserQuery } from "@/redux/slices/apiSlice";
import { logout } from "@/redux/slices/authSlice";
import { Box } from "@/styles/globalStyles";
import { useRouter } from "next/navigation";
import { FaRegBell, FaSignOutAlt, FaUser } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import Button from "../Button/Button";
import UserAvatarImage from "../UserAvatar/UserAvatarImage";
import { UserWindowAvatar, UserWindowContainer, UserWindowContent, UserWindowFooter, UserWindowHeader, UserWindowInfo } from "./UserWindowStyles";

type UserWindowProps = {
  isOpen: boolean
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

export default function UserWindow({ isOpen, activeSection, setActiveSection }: UserWindowProps) {
  const { data: user } = useGetCurrentUserQuery();
  const router = useRouter();
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
    dispatch(apiSlice.util.resetApiState())
    router.push("/");
  }

  return (
    <UserWindowContainer $isOpen={isOpen}>
      <UserWindowContent>
        {isOpen ? (
          <Box $bgColor="glass" direction="column" height="fit" width="fit" $align="center" $justify="center">
            <UserWindowHeader>

              <UserWindowAvatar>
                <UserAvatarImage size="small" position="relative" border="true" user={user} />
              </UserWindowAvatar>

              <UserWindowInfo>
                <p>{user?.username}</p>
                <p>{user?.user_tag}</p>
              </UserWindowInfo>

            </UserWindowHeader>

            <Box direction="column" height="fit" width="fit" $align="center" $justify="center">
              <Button
                variant="glass"
                size="md" leftIcon={<FaUser />}
                fullWidth
                $isActive={activeSection === "perfil"}
                onClick={() => { router.push("/feed"); setActiveSection("perfil") }}
              >
                Perfil
              </Button>

              <Button
                variant="glass"
                size="md"
                leftIcon={<FiMessageSquare />}
                fullWidth
                $isActive={activeSection === "mensagens"}
                onClick={() => { router.push("/feed"); setActiveSection('mensagens') }}
              >
                Mensagens
              </Button>

              <Button
                variant="glass"
                size="md"
                leftIcon={<FaRegBell />}
                fullWidth
                $isActive={activeSection === "notificacoes"}
                onClick={() => { router.push("/feed"); setActiveSection('notificacoes') }}
              >
                Notificações
              </Button>

              <Button
                variant="glass"
                size="md"
                leftIcon={<GoGear />}
                fullWidth
                $isActive={activeSection === "configuracoes"}
                onClick={() => { router.push("/feed"); setActiveSection('configuracoes') }}
              >
                Configurações
              </Button>

            </Box>

            <UserWindowFooter>
              <Button variant="ghost" size="md" leftIcon={<FaSignOutAlt />} fullWidth onClick={handleLogout} >Logout</Button>
            </UserWindowFooter>
          </Box>
        ) : null}
      </UserWindowContent>
    </UserWindowContainer>
  )
}
