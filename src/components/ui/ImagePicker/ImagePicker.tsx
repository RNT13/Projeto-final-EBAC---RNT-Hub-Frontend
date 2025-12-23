import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";


import { useState } from "react";
import { FormikMaskedInput } from "../MaskedInput/FormikMaskedInput";
import {
  ChangeButton,
  HoverOverlay,
  ImageWrapper,
  Wrapper
} from "./ImagePickerStyles";

type Props = {
  name: string;
  value?: string;
  fallback: string | StaticImport;
  label: string;
  shape: 'square' | 'circle' | 'rectangle';
  setUploading?: (uploading: boolean) => void
};

export function ImagePicker({ name, value, fallback, label, shape, setUploading }: Props) {
  const [tempPreview, setTempPreview] = useState<string | null>(null);

  return (
    <Wrapper $shape={shape}>
      <p>{label}</p>

      <ImageWrapper $shape={shape}>
        <Image src={tempPreview || value || fallback} fill alt={label} />

        <HoverOverlay>
          <ChangeButton>
            Trocar {label.toLowerCase()}

            <FormikMaskedInput
              name={name}
              variant="file"
              fileMode="cloudinary"
              cloudName="dvonqxpbc"
              uploadPreset="ImageUp"
              showError={false}
              onUploadingChange={setUploading}
              previewMode="replace"
              onFileChange={({ previews }) => setTempPreview(previews[0])}
            />
          </ChangeButton>
        </HoverOverlay>
      </ImageWrapper>
    </Wrapper>
  );
}
