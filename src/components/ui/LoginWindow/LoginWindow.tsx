import { Box } from "@/styles/globalStyles";
import Button from "../Button/Button";
import { LoginWindowBody, LoginWindowContainer, LoginWindowContent, LoginWindowFooter, LoginWindowHeader } from "./LoginWindowStyles";

type LoginWindowProps = {
  onLogin?: () => void
  onRegister?: () => void
}

export default function LoginWindow({ onLogin, onRegister }: LoginWindowProps) {
  return (
    <LoginWindowContainer>
      <LoginWindowContent>
        <Box $bgColor="glass" direction="column" $align="center" $justify="center" height="lg" >
          <LoginWindowHeader>
            <h2>Junte-se a nós hoje</h2>
          </LoginWindowHeader>

          <LoginWindowBody>
            <Button variant="glass" size="md" fullWidth onClick={onRegister}>Criar conta</Button>
            <Button variant="glass" size="md" fullWidth onClick={onLogin}>Já tenho conta</Button>
          </LoginWindowBody>

          <LoginWindowFooter>
            <p>Ao continuar, você concorda com nossos Termos de Serviço e Política de Privacidade</p>
          </LoginWindowFooter>
        </Box>
      </LoginWindowContent>
    </LoginWindowContainer>
  )
}
