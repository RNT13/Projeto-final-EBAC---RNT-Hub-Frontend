import { FaPlus } from "react-icons/fa";
import Button from "../Button/Button";
import { PostButtonContainer, PostButtonContent } from "./PostButtonStyles";

type PostButtonProps = {
  onClick?: () => void
}

export default function PostButton({ onClick }: PostButtonProps) {
  return (
    <PostButtonContainer>
      <PostButtonContent>
        <Button onClick={onClick} variant="glass" size="lg" leftIcon={<FaPlus />} fullWidth ></Button>
      </PostButtonContent>
    </PostButtonContainer>
  )
}
