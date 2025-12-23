
import { useCreatePostMutation, useGetCurrentUserQuery } from "@/redux/slices/apiSlice";
import { Box, CloseButton } from "@/styles/globalStyles";
import { handleApiError } from "@/utils/handleApiError";
import { FormikProvider, useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import * as yup from 'yup';
import Button from "../Button/Button";
import { FormikMaskedInput } from "../MaskedInput/FormikMaskedInput";
import UserAvatarImage from "../UserAvatar/UserAvatarImage";
import { PostWindowBody, PostWindowContainer, PostWindowContent, PostWindowDetails, PostWindowFooter, PostWindowHeader } from "./PostWindowStyles";

type PostWindowProps = {
  onClose: () => void;
};

export default function PostWindow({ onClose }: PostWindowProps) {
  const form = useFormik({
    initialValues: {
      content: '',
      image: null as File | null,
    },
    validationSchema: yup.object({
      content: yup.string().required('Campo obrigatório'),
    }),
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("content", values.content);

        if (values.image) {
          formData.append("image", values.image);
        }

        await createPost(formData).unwrap();

        toast.success("Publicação criada com sucesso!");
        form.resetForm();
        onClose();
      } catch (err) {
        handleApiError(err);
      }
    }

  })

  const { data: user } = useGetCurrentUserQuery();
  const [createPost, { isLoading: createPostLoading }] = useCreatePostMutation();
  const [uploading, setUploading] = useState(false)

  return (
    <PostWindowContainer>
      <PostWindowContent>
        <Box $bgColor="glass" direction="column" height="lg" width="lg" >
          <PostWindowHeader>
            <div>
              <h2>Criar publicação</h2>
              <CloseButton />
            </div>
            <PostWindowDetails>
              <div>
                <UserAvatarImage user={user} size="small" position="flex" border="true" />
              </div>
              <div>
                <p>{user?.username}</p>
                <p>{user?.user_tag}</p>
              </div>
            </PostWindowDetails>
          </PostWindowHeader>

          <FormikProvider value={form} >
            <form onSubmit={form.handleSubmit}>
              <PostWindowBody>
                <FormikMaskedInput variant="textarea" name="content" showError={false} placeholder="Em que Você esta pensando..." />
              </PostWindowBody>

              <PostWindowFooter>
                <label htmlFor="image">Imagem</label>
                <FormikMaskedInput
                  name="image"
                  variant="file"
                  fileMode="cloudinary"
                  cloudName="dvonqxpbc"
                  uploadPreset="ImageUp"
                  showError={false}
                  onUploadingChange={setUploading}
                />
                <Button variant="glass" type="submit" loading={createPostLoading || uploading} fullWidth  >Postar</Button>
              </PostWindowFooter>
            </form>
          </FormikProvider>
        </Box>
      </PostWindowContent>
    </PostWindowContainer>
  )
}
