'use client'

import { LoginForm } from "@/components/ui/LoginForm/LoginForm"
import LoginWindow from "@/components/ui/LoginWindow/LoginWindow"
import { ModalWrapper } from "@/components/ui/ModalWrapper/ModalWrapper"
import { RegisterForm } from "@/components/ui/RegisterForm/RegisterForm"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { HomeContainer, HomeContent, HomeMain, HomeTitle, LeftDiv, RightDiv } from "./homeStyles"

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const router = useRouter();

  return (
    <HomeContainer className="container">
      <HomeContent>
        <HomeTitle>
          <Image src='/assets/logo_rnt_hub.png' alt="Logo" width={150} height={150} loading="eager" />
          <h1>RNT Hub</h1>
        </HomeTitle>
        <HomeMain>
          <LeftDiv>
            <h2>Conecte-se com o mundo</h2>
            <p>Compartilhe momentos, descubra conteúdo e conecte-se com pessoas ao redor do mundo no RNT Hub.</p>
          </LeftDiv>
          <RightDiv>
            <LoginWindow onLogin={() => setIsLoginOpen(true)} onRegister={() => setIsRegisterOpen(true)} />
          </RightDiv>
        </HomeMain>
      </HomeContent>

      <ModalWrapper isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginForm onClose={() => setIsLoginOpen(false)} loginSuccess={() => { setIsLoginOpen(false); router.push('/feed') }} />
      </ModalWrapper>

      <ModalWrapper isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
        <RegisterForm onClose={() => setIsRegisterOpen(false)} registerSuccess={() => { setIsRegisterOpen(false); setIsLoginOpen(true); }} />
      </ModalWrapper>

    </HomeContainer>
  )
}
