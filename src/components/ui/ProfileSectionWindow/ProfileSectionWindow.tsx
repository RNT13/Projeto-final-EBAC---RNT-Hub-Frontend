import Loading from "@/app/loading";
import defaultAvatar from '@/assets/avatar_default.svg';
import defaultBG from '@/assets/default_bg.avif';
import { useEditUserMutation, useGetCurrentUserQuery } from "@/redux/slices/apiSlice";
import { Box, CloseButton } from "@/styles/globalStyles";
import { cleanPatchPayload } from "@/utils/clearPatch";
import { handleApiError } from "@/utils/handleApiError";
import { FormikProvider, useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoMdCloseCircle } from "react-icons/io";
import * as yup from 'yup';
import Button from "../Button/Button";
import { ImagePicker } from "../ImagePicker/ImagePicker";
import { FormikMaskedInput } from "../MaskedInput/FormikMaskedInput";
import { ProfileSectionWindowAvatar, ProfileSectionWindowBg, ProfileSectionWindowBody, ProfileSectionWindowContainer, ProfileSectionWindowContent, ProfileSectionWindowFooter, ProfileSectionWindowHeader, ProfileSectionWindowInfo } from "./ProfileSectionWindowStyles";

type Props = {
  onClose: () => void
}

export default function ProfileSectionWindow({ onClose }: Props) {
  const { data: user } = useGetCurrentUserQuery();
  const [editUser, { isLoading: editLoading }] = useEditUserMutation();
  const [uploading, setUploading] = useState(false)

  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      user_bg: user?.user_bg || '',
      avatar: user?.avatar || '',
      full_name: user?.full_name || '',
      bio: user?.bio || '',
      location: user?.location || '',
      website: user?.website || '',
    },
    validationSchema: yup.object({
      user_bg: yup.string(),
      avatar: yup.string(),
      full_name: yup.string(),
      bio: yup.string(),
      location: yup.string(),
      website: yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        const payload = cleanPatchPayload(values)

        await editUser(payload).unwrap()

        toast.success("Usuário editado com sucesso!")
        onClose()
      } catch (err) {
        handleApiError(err)
      }
    }
  })

  if (!user) return (
    <ProfileSectionWindowContainer>
      <ProfileSectionWindowContent>
        <Box $bgColor="glass" direction="column" height="lg" width="lg" >
          <Loading />
        </Box>
      </ProfileSectionWindowContent>
    </ProfileSectionWindowContainer>
  );

  return (
    <ProfileSectionWindowContainer className="container">
      <ProfileSectionWindowContent >
        <FormikProvider value={form}>
          <form onSubmit={form.handleSubmit}>
            <Box $bgColor="glass" direction="column" height="lg" width="lg" >
              <CloseButton type="button" onClick={onClose} ><IoMdCloseCircle /></CloseButton>
              <ProfileSectionWindowHeader>
                <p>Editar Perfil</p>
              </ProfileSectionWindowHeader>

              <ProfileSectionWindowBody>

                <ProfileSectionWindowBg>
                  <ImagePicker
                    name="user_bg"
                    label="Background"
                    value={form.values.user_bg}
                    fallback={user.user_bg || defaultBG}
                    shape="rectangle"
                    setUploading={setUploading}
                  />
                </ProfileSectionWindowBg>

                <ProfileSectionWindowAvatar>
                  <ImagePicker
                    name="avatar"
                    label="Avatar"
                    value={form.values.avatar}
                    fallback={user.avatar || defaultAvatar}
                    shape="square"
                    setUploading={setUploading}
                  />
                </ProfileSectionWindowAvatar>

                <ProfileSectionWindowInfo>
                  <p>Nome</p>
                  <FormikMaskedInput
                    showError={false}
                    name='full_name'
                    placeholder={user.full_name || "Seu nome Completo"} />
                </ProfileSectionWindowInfo>

                <ProfileSectionWindowInfo>
                  <p>Bio</p>
                  <FormikMaskedInput
                    showError={false}
                    variant="textarea"
                    name='bio'
                    placeholder={user.bio || "Escreva sua Bio"}
                  />

                </ProfileSectionWindowInfo>

                <ProfileSectionWindowInfo>
                  <p>Local</p>
                  <FormikMaskedInput showError={false} name='location' placeholder={user.location || "Onde você está? "} />
                </ProfileSectionWindowInfo>

                <ProfileSectionWindowInfo>
                  <p>Website</p>
                  <FormikMaskedInput showError={false} name='website' placeholder={user.website || "https://"} />
                </ProfileSectionWindowInfo>

              </ProfileSectionWindowBody>

              <ProfileSectionWindowFooter>
                <Button variant="glass" type="button" fullWidth onClick={onClose}>Cancelar</Button>

                <Button variant="glass" type="submit" loading={editLoading || uploading} fullWidth>Salvar</Button>

              </ProfileSectionWindowFooter>
            </Box>
          </form>
        </FormikProvider>
      </ProfileSectionWindowContent>
    </ProfileSectionWindowContainer>
  )
}
