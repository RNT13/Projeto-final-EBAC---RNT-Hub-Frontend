import { useChangePasswordMutation, useGetCurrentUserQuery } from "@/redux/slices/apiSlice";
import { Box, CloseButton } from "@/styles/globalStyles";
import { handleApiError } from "@/utils/handleApiError";
import { FormikProvider, useFormik } from "formik";
import toast from "react-hot-toast";
import { IoCloseCircleSharp } from "react-icons/io5";
import * as yup from 'yup';
import Button from "../Button/Button";
import { FormikMaskedInput } from "../MaskedInput/FormikMaskedInput";
import UserAvatarImage from "../UserAvatar/UserAvatarImage";
import { PasswordFormBody, PasswordFormContainer, PasswordFormFooter, PasswordFormHeader } from "./PasswordFormStyles";

interface PasswordFormProps {
  onClose: () => void
}

export default function PasswordForm({ onClose }: PasswordFormProps) {
  const [changePassword] = useChangePasswordMutation()
  const { data: user } = useGetCurrentUserQuery()

  const form = useFormik({
    initialValues: {
      current_password: '',
      new_password: '',
    },
    validationSchema: yup.object({
      current_password: yup.string().required('Senha atual obrigatória'),
      new_password: yup
        .string()
        .min(6, 'Mínimo de 6 caracteres')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)/, 'Use letras e números')
        .required('Nova senha obrigatória'),
    }),
    onSubmit: async values => {
      try {
        await changePassword(values).unwrap()

        toast.success('Senha alterada com sucesso!')
        onClose()
      } catch (err) {
        handleApiError(err)
      }
    },
  })

  return (
    <Box $bgColor="glass" direction="column" height="lg" width="lg" $align="center" $justify="center">
      <PasswordFormContainer>
        <CloseButton onClick={onClose}>
          <IoCloseCircleSharp />
        </CloseButton>

        <PasswordFormHeader>
          <UserAvatarImage user={user} size="small" position="flex" border="true" />
          <h2>Editar senha</h2>
        </PasswordFormHeader>

        <FormikProvider value={form}>
          <form onSubmit={form.handleSubmit}>
            <PasswordFormBody>
              <div>
                <label htmlFor="current_password">Senha atual</label>
                <FormikMaskedInput
                  id="current_password"
                  name="current_password"
                  variant="password"
                  showError
                />
              </div>

              <div>
                <label htmlFor="new_password">Nova senha</label>
                <FormikMaskedInput
                  id="new_password"
                  name="new_password"
                  variant="password"
                  showError
                />
              </div>
            </PasswordFormBody>

            <PasswordFormFooter>
              <Button type="button" variant="glass" fullWidth onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" variant="glass" fullWidth>
                Salvar
              </Button>
            </PasswordFormFooter>
          </form>
        </FormikProvider>
      </PasswordFormContainer>
    </Box>
  )
}


