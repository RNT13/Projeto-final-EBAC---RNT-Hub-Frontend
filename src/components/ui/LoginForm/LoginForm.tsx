import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useLoginUserMutation } from "@/redux/slices/apiSlice";
import { setCredentials } from "@/redux/slices/authSlice";
import { Box, CloseButton } from "@/styles/globalStyles";
import { handleApiError } from "@/utils/handleApiError";
import { FormikProvider, useFormik } from "formik";
import { toast } from "react-hot-toast";
import { IoIosCloseCircle } from "react-icons/io";
import * as yup from 'yup';
import Button from "../Button/Button";
import { FormikMaskedInput } from "../MaskedInput/FormikMaskedInput";
import { RegisterFormBody } from "../RegisterForm/RegisterFormStyles";
import { LoginFormContainer, LoginFormContent, LoginFormFooter, LoginFormHeader } from "./LoginFormStyles";

type LoginProps = {
  loginSuccess: () => void
  onClose: () => void
}

export function LoginForm({ loginSuccess, onClose }: LoginProps) {
  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
      password: yup.string().min(6, 'Minimo de 6 caracteres').required('Campo obrigatório'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await loginUser(values).unwrap();

        dispatch(setCredentials({ token: response.access, refreshToken: response.refresh, user: response.user }));

        toast.success(response.message || "Login realizado com sucesso!");
        form.resetForm();
        loginSuccess();

        console.log(response)
      } catch (err) {
        handleApiError(err);
      }
    }
  })

  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation()

  const dispatch = useAppDispatch()

  return (
    <LoginFormContainer>
      <CloseButton type="button" onClick={onClose}><IoIosCloseCircle /></CloseButton>
      <LoginFormContent>
        <Box $bgColor="glass" direction="column" $align="center" $justify="center" width="lg" height="lg">
          <LoginFormHeader>
            <h2>Login</h2>
          </LoginFormHeader>

          <FormikProvider value={form}>
            <RegisterFormBody onSubmit={form.handleSubmit}>

              <div>
                <label htmlFor="email">Email:</label>
                <FormikMaskedInput
                  name="email"
                  id="email"
                  placeholder="Digite seu email"
                  showError={false}
                />
              </div>

              <div>
                <label htmlFor="password">Senha:</label>
                <FormikMaskedInput
                  name="password"
                  id="password"
                  placeholder="Digite sua senha"
                  showError={false}
                  variant="password"
                />
              </div>

              <Button variant="glass" type="submit" loading={loginLoading} size="md" fullWidth >Entrar</Button>
            </RegisterFormBody>
          </FormikProvider>

          <LoginFormFooter>
            <p>Faça login para continuar</p>
          </LoginFormFooter>
        </Box>
      </LoginFormContent>
    </LoginFormContainer>
  )
}
