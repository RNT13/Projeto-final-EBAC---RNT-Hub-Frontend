import { useRegisterUserMutation } from "@/redux/slices/apiSlice";
import { Box, CloseButton } from "@/styles/globalStyles";
import { handleApiError } from "@/utils/handleApiError";
import { FormikProvider, useFormik } from "formik";
import toast from "react-hot-toast";
import { IoIosCloseCircle } from "react-icons/io";
import * as yup from 'yup';
import Button from "../Button/Button";
import { FormikMaskedInput } from "../MaskedInput/FormikMaskedInput";
import { RegisterFormBody, RegisterFormContainer, RegisterFormContent, RegisterFormFooter, RegisterFormHeader } from "./RegisterFormStyles";

export type RegisterProps = {
  registerSuccess: () => void
  onClose: () => void
};

export function RegisterForm({ registerSuccess, onClose }: RegisterProps) {
  const form = useFormik({
    initialValues: {
      email: '',
      username: '',
      full_name: '',
      password: '',
      confirm_password: '',
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .transform(value =>
          value ? value.charAt(0).toUpperCase() + value.slice(1) : value
        )
        .min(5, 'Mínimo de 5 caracteres')
        .required('Campo obrigatório'),

      email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
      password: yup.string().min(6, 'Minimo de 6 caracteres').required('Campo obrigatório'),

      confirm_password: yup
        .string()
        .required('Confirme sua senha')
        .oneOf([yup.ref('password'), ''], 'As senhas não coincidem'),
    }),
    onSubmit: async (values: RegisterPayload) => {
      try {
        const response = await registerUser(values).unwrap();

        toast.success(response.message || "Cadastro realizado com sucesso!");
        form.resetForm();
        registerSuccess();

        form.resetForm();
        console.log(response);


      } catch (err) {
        handleApiError(err);
      }

    }

  })

  const [registerUser, { isLoading: registerLoading }] = useRegisterUserMutation()

  return (
    <RegisterFormContainer>
      <CloseButton onClick={onClose}><IoIosCloseCircle /></CloseButton>
      <RegisterFormContent>
        <Box $bgColor="glass" direction="column" $align="center" $justify="center" width="lg" height="lg">
          <RegisterFormHeader>
            <h2>Registre-se no RNT Hub</h2>
          </RegisterFormHeader>

          <FormikProvider value={form}>
            <RegisterFormBody onSubmit={form.handleSubmit}>
              <div>
                <label htmlFor="username">Username:</label>
                <FormikMaskedInput
                  name="username"
                  id="username"
                  placeholder="Digite seu nome"
                  showError={false}
                />
              </div>

              <div>
                <label htmlFor="full_name">Nome completo:</label>
                <FormikMaskedInput
                  name="full_name"
                  id="full_name"
                  placeholder="Digite seu nome completo"
                  showError={false}
                />
              </div>

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

              <div>
                <label htmlFor="confirm_password">Confirme sua senha:</label>
                <FormikMaskedInput
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirme sua senha"
                  showError={false}
                  variant="password"
                />
              </div>

              <Button variant="glass" type="submit" loading={registerLoading} size="md" fullWidth >Registrar</Button>
            </RegisterFormBody>
          </FormikProvider>

          <RegisterFormFooter>
            <p>É o primeiro passo para se juntar a milhares de pessoas ao redor do mundo.</p>
          </RegisterFormFooter>
        </Box>
      </RegisterFormContent>
    </RegisterFormContainer>
  )
}
