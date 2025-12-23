import { useGetCurrentUserQuery } from "@/redux/slices/apiSlice";
import { Box } from "@/styles/globalStyles";
import { useState } from "react";
import { FaBell, FaLock, FaUser } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import Button from "../Button/Button";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper";
import PasswordForm from "../PasswordForm/PasswordForm";
import UsernameForm from "../UsernameForm/UsernameForm";
import { Section, SettingsSectionContainer, SettingsSectionContent } from "./SettingsSectionStyles";

export default function SettingsSection() {
  const { data: user } = useGetCurrentUserQuery();

  const [isUsernameFormOpen, setUsernameFormOpen] = useState(false);
  const [isPasswordFormOpen, setPasswordFormOpen] = useState(false);

  return (
    <SettingsSectionContainer>
      <SettingsSectionContent>
        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="start" $justify="center">
          <h2>Configurações</h2>
          <p>Gerencie suas preferências e configurações da conta</p>
        </Box>

        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="start" $justify="center">
          <h2><FaUser />Conta</h2>
          <Section onClick={() => setUsernameFormOpen(true)}>
            <h2>Trocar nome de usuário</h2>
            <p>{user?.username}</p>
          </Section>
          <Section onClick={() => setPasswordFormOpen(true)}>
            <h2>Trocar senha</h2>
            <p>Mantenha a senha segura</p>
          </Section>
        </Box>

        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="start" $justify="center">
          <h2><FaBell />Privacidade</h2>
          <Section>
            <h2>Notificação push</h2>
            <Button variant="toggle" size="sm" />
          </Section>
          <Section>
            <h2>Notificação email</h2>
            <Button variant="toggle" size="sm" />
          </Section>
          <Section>
            <h2>Notificação SMS</h2>
            <Button variant="toggle" size="sm" />
          </Section>
        </Box>

        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="start" $justify="center">
          <h2><FaLock />Privacidade e segurança</h2>
          <Section>
            <h2>Conta privada</h2>
            <Button variant="toggle" size="sm" />
          </Section>
          <Section>
            <h2>Contas bloqueadas</h2>
            <p>Gerenciar contas bloqueadas</p>
          </Section>
        </Box>

        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="start" $justify="center">
          <h2><TbWorld />Idioma</h2>
          <Section>
            <h2>Portugues (Brasil)</h2>
            <p>Selecione o idioma preferido</p>
          </Section>
        </Box>

        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="start" $justify="center">
          <h2><IoIosColorPalette />Aparencia</h2>
          <Section>
            <h2>Modo escuro</h2>
            <Button variant="toggle" size="sm" />
          </Section>
        </Box>

        <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="start" $justify="center">
          <h2>Ajuda e suporte</h2>
          <Section>
            <h2>Central de ajuda</h2>
            <p>Encontre soluções para seus problemas</p>
          </Section>

          <Section>
            <h2>Termos de uso e privacidade</h2>
            <p>Leia nossos termos de uso e privacidade</p>
          </Section>

          <Section>
            <h2>Politica de Privacidade</h2>
            <p>Como usamos seus dados pessoais</p>
          </Section>
        </Box>

        <ModalWrapper isOpen={isUsernameFormOpen} onClose={() => setUsernameFormOpen(false)}>
          <UsernameForm onClose={() => setUsernameFormOpen(false)} />
        </ModalWrapper>

        <ModalWrapper isOpen={isPasswordFormOpen} onClose={() => setPasswordFormOpen(false)}>
          <PasswordForm onClose={() => setPasswordFormOpen(false)} />
        </ModalWrapper>
      </SettingsSectionContent>
    </SettingsSectionContainer>
  )
}
