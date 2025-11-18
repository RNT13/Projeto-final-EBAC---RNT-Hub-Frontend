
    import { BiSolidError } from "react-icons/bi";
import { ErrorMessageContainer, ErrorMessageContent } from "./ErrorMessageStyles";


type Props = {
  message: string
}

export const ErrorMessage = ({ message }: Props) => (
  <ErrorMessageContainer role="alert" aria-label="Mensagem de erro" className="container">
    <ErrorMessageContent>
      <BiSolidError />
      {message}
    </ErrorMessageContent>
  </ErrorMessageContainer>
)

    