import { AnimatePresence } from "framer-motion"
import { ReactNode } from "react"
import { ModalContainer, ModalContent, Overlay } from "./ModalWrapperStyles"

type ModalWrapperProps = {
  isOpen: boolean
  children: ReactNode
  onClose: () => void
}

export const ModalWrapper = ({
  isOpen,
  children,
  onClose,
}: ModalWrapperProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <ModalContainer>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              {children}
            </ModalContent>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  )
}
