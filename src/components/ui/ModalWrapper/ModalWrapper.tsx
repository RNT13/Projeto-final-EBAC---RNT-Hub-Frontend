
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

type ModalWrapperProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
};

export const ModalWrapper = ({ isOpen, children, onClose }: ModalWrapperProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            padding: "24px",

            backgroundColor: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(4px)",

            overflowY: "auto",
            overscrollBehavior: "contain",
            scrollbarWidth: "none"
          }}
          onClick={onClose}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </motion.div>

      )}
    </AnimatePresence>
  );
};

