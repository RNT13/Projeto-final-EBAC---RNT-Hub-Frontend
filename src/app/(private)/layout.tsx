'use client'

import Header from "@/components/layout/header/Header"
import { PrivateLayoutContainer } from "./PrivateLayoutStyles"


export default function PrivateLayout({ children, }: { children: React.ReactNode }) {
  return (
    <PrivateLayoutContainer>
      <Header />
      {children}
    </PrivateLayoutContainer>
  )
}
