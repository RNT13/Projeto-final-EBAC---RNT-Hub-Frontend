import { useEditUserMutation, useGetCurrentUserQuery } from "@/redux/slices/apiSlice";
import { Box, CloseButton } from "@/styles/globalStyles";
import { cleanPatchPayload } from "@/utils/clearPatch";
import { handleApiError } from "@/utils/handleApiError";
import { FormikProvider, useFormik } from "formik";
import toast from "react-hot-toast";
import { IoCloseCircleSharp } from "react-icons/io5";
import * as yup from 'yup';
import Button from "../Button/Button";
import { FormikMaskedInput } from "../MaskedInput/FormikMaskedInput";
import UserAvatarImage from "../UserAvatar/UserAvatarImage";
import { UsernameFormBody, UsernameFormContainer, UsernameFormFooter, UsernameFormHeader } from "./UsernameFormStyles";

interface UsernameFormProps {
  onClose: () => void
}

export default function UsernameForm({ onClose }: UsernameFormProps) {
  const [editUser] = useEditUserMutation();
  const { data: user } = useGetCurrentUserQuery();

  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: user?.username || '',
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required('Campo obrigatório')
        .min(3, 'Mínimo de 5 caracteres')
        .max(20, 'Máximo de 20 caracteres')
        .matches(
          /^[A-Za-z0-9\s]+$/,
          'O nome pode conter apenas letras, números e espaços'
        )
        .transform(value =>
          value ? value.charAt(0).toUpperCase() + value.slice(1) : value
        ),
    }),
    onSubmit: async (values) => {
      try {
        const payload = cleanPatchPayload(values)

        await editUser(payload).unwrap()

        toast.success("Usuário editado com sucesso!");
        onClose();
      } catch (err) {
        handleApiError(err);
      }
    }
  })

  return (
    <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
      <UsernameFormContainer>
        <CloseButton type="button" onClick={onClose}><IoCloseCircleSharp /></CloseButton>
        <UsernameFormHeader>
          <UserAvatarImage user={user} size="small" position="flex" border="true" />
          <h2>Editar nome de usuário</h2>
        </UsernameFormHeader>
        <FormikProvider value={form}>
          <form onSubmit={form.handleSubmit}>
            <UsernameFormBody>
              <div>
                <label htmlFor="username">Nome</label>
                <FormikMaskedInput
                  id="username"
                  name="username"
                  type="text"
                  showError
                />
              </div>
            </UsernameFormBody>
            <UsernameFormFooter>
              <Button type="button" variant="glass" size="md" fullWidth onClick={onClose}>Cancelar</Button>
              <Button type="submit" variant="glass" size="md" fullWidth>Salvar</Button>
            </UsernameFormFooter>
          </form>
        </FormikProvider>

      </UsernameFormContainer>
    </Box>
  );
}

