import { useCreateCommentMutation, useGetCurrentUserQuery, useGetPostCommentsQuery } from "@/redux/slices/apiSlice";
import { Box } from "@/styles/globalStyles";
import { handleApiError } from "@/utils/handleApiError";
import { timeAgo } from "@/utils/timeAgo";
import { FormikProvider, useFormik } from "formik";
import toast from "react-hot-toast";
import { IoIosSend } from "react-icons/io";
import * as yup from 'yup';
import Button from "../Button/Button";
import { FormikMaskedInput } from "../MaskedInput/FormikMaskedInput";
import UserAvatarImage from "../UserAvatar/UserAvatarImage";
import { ComentButtonDiv, ComentsWindowContainer, ComentsWindowContent, ComentTextArea, TextArea, UserComents } from "./ComentsWindowStyles";

type ComentsWindowProps = {
  isOpen: boolean;
  postId: string;
}

export default function ComentsWindow({ isOpen, postId }: ComentsWindowProps) {
  const form = useFormik({
    initialValues: {
      content: '',
    },
    validationSchema: yup.object({
      content: yup.string().required('Campo obrigatório'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await createComment({ postId: Number(postId), content: values.content }).unwrap();

        toast.success("Comentario criada com sucesso!");
        resetForm();
      } catch (err) {
        handleApiError(err);
      }
    }

  })

  const [createComment, { isLoading: commentLoading }] = useCreateCommentMutation();
  const { data: user } = useGetCurrentUserQuery();
  const { data: comments } = useGetPostCommentsQuery(postId);

  return (
    <ComentsWindowContainer>
      <ComentsWindowContent $isOpen={isOpen}>
        <div>
          {comments?.map((comment: Comment) => (
            <UserComents key={comment.id}>
              <div>
                <UserAvatarImage user={comment.user} size="xsmall" position="flex" border="true" />
              </div>
              <Box $bgColor="glass" direction="column" $padding="sm" height="xm" width="lg" $align="start" $justify="space-between">
                <strong>
                  {comment.user.username === user?.username ? 'Você ' : comment.user.username} - {timeAgo(comment.created_at)}
                </strong>
                <p>{comment.content}</p>
              </Box>
            </UserComents>
          ))}
        </div>


        <FormikProvider value={form}>
          <form onSubmit={form.handleSubmit}>
            <ComentTextArea>
              <Box $bgColor="glass" direction="column" $padding="sm" height="xm" width="lg" $align="start" $justify="space-between">
                <TextArea>
                  <div>
                    <UserAvatarImage user={user} size="small" position="flex" border="true" />
                  </div>
                  <FormikMaskedInput
                    name="content"
                    placeholder="Escreva um comentário..."
                    variant="textarea"
                    showError={false}
                  />
                </TextArea>

                <ComentButtonDiv>
                  <Button variant="glass" type="submit" loading={commentLoading} rightIcon={<IoIosSend />} >
                    Enviar
                  </Button>
                </ComentButtonDiv>
              </Box>
            </ComentTextArea>
          </form>
        </FormikProvider>

      </ComentsWindowContent>
    </ComentsWindowContainer>
  )
}
