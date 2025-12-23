"use client";

import Image from "next/image";
import { JSX, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineSearch,
} from "react-icons/ai";
import { IMaskInput } from "react-imask";

import {
  ErrorDiv,
  FileTrigger,
  MaskedInputContainer,
  PasswordToggle,
  PreviewImageDiv,
  SearchIcon,
} from "./NewMaskedInputStyles";

/* ============================================================
 * TYPES
 * ============================================================ */

type FileChangePayload = {
  files: File[];
  previews: string[];
};

type Variant =
  | "default"
  | "masked"
  | "password"
  | "textarea"
  | "select"
  | "file"
  | "search";

type BaseMaskedInputProps = {
  value: any;
  onChange: (value: any) => void;

  error?: string;
  touched?: boolean;

  variant?: Variant;
  placeholder?: string;
  className?: string;
  id?: string;
  type?: string;
  children?: React.ReactNode;
  showError?: boolean;
  mask?: string;

  /* Upload */
  fileMode?: "local" | "cloudinary";
  multiple?: boolean;
  onFileChange?: (payload: FileChangePayload) => void;
  onUploadingChange?: (uploading: boolean) => void;

  /* Cloudinary */
  uploadPreset?: string;
  cloudName?: string;
  previewMode?: "normal" | "replace";

  onClick?: () => void;
};

/* ============================================================
 * COMPONENT
 * ============================================================ */

export const BaseMaskedInput = ({
  value,
  onChange,
  error,
  touched,

  variant = "default",
  placeholder,
  className,
  id,
  type = "text",
  children,
  showError = true,
  mask,

  fileMode = "cloudinary",
  multiple = false,
  onFileChange,
  onUploadingChange,
  uploadPreset,
  cloudName,
  previewMode = "normal",
  onClick,
}: BaseMaskedInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [internalPreviews, setInternalPreviews] = useState<string[]>([]);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const previousPreviews = useRef<string[]>([]);

  const hasError = touched && Boolean(error);

  const commonProps = {
    id,
    placeholder,
    className: `${className ?? ""} ${hasError ? "error" : ""}`,
  };

  /* ============================================================
   * CLOUDINARY
   * ============================================================ */

  const uploadToCloudinary = async (files: File[]) => {
    if (!uploadPreset || !cloudName) return;

    onUploadingChange?.(true);
    const urls: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      try {
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          { method: "POST", body: formData }
        );
        const data = await res.json();
        urls.push(data.secure_url);
      } catch {
        toast.error(`Erro ao enviar ${file.name}`);
      }
    }

    onChange(multiple ? urls : urls[0]);
    toast.success("Upload concluído!");
    onUploadingChange?.(false);
  };

  /* ============================================================
   * FILE CHANGE
   * ============================================================ */

  const handleFileChange = (fileList: FileList | null) => {
    if (!fileList) return;

    const files = Array.from(fileList);
    const previews = files.map((file) => URL.createObjectURL(file));

    previousPreviews.current.forEach(URL.revokeObjectURL);
    previousPreviews.current = previews;

    if (previewMode !== "replace") {
      setInternalPreviews(previews);
    }

    onFileChange?.({ files, previews });

    if (fileMode === "local") {
      onChange(multiple ? files : files[0]);
    } else {
      uploadToCloudinary(files);
    }
  };

  useEffect(() => {
    return () => previousPreviews.current.forEach(URL.revokeObjectURL);
  }, []);

  /* ============================================================
   * VARIANTS
   * ============================================================ */

  const variants: Record<Variant, JSX.Element> = {
    default: (
      <input
        {...commonProps}
        type={type}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
    ),

    masked: (
      <IMaskInput
        {...commonProps}
        mask={mask!}
        value={String(value ?? "")}
        onAccept={(val) => onChange(val)}
      />
    ),

    password: (
      <>
        <input
          {...commonProps}
          type={showPassword ? "text" : "password"}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
        <PasswordToggle onClick={() => setShowPassword((s) => !s)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </PasswordToggle>
      </>
    ),

    textarea: (
      <textarea
        {...commonProps}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      />
    ),

    select: (
      <select
        {...commonProps}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
      >
        {children}
      </select>
    ),

    file: (
      <>
        <input
          type="file"
          ref={fileInputRef}
          multiple={multiple}
          hidden
          onChange={(e) => handleFileChange(e.target.files)}
        />

        <FileTrigger type="button" onClick={() => fileInputRef.current?.click()}>
          {multiple ? "Selecionar imagens" : "Selecionar imagem"}
        </FileTrigger>

        {previewMode !== "replace" && internalPreviews.length > 0 && (
          <PreviewImageDiv>
            {internalPreviews.map((src, i) => (
              <Image key={i} src={src} alt="Preview" width={88} height={88} />
            ))}
          </PreviewImageDiv>
        )}
      </>
    ),

    search: (
      <>
        <SearchIcon>
          <AiOutlineSearch />
        </SearchIcon>
        <input
          {...commonProps}
          onClick={onClick}
          type="search"
          value={value ?? ""}
          placeholder={placeholder ?? "Pesquisar..."}
          onChange={(e) => onChange(e.target.value)}
        />
      </>
    ),
  };

  return (
    <MaskedInputContainer $variant={variant}>
      {variants[variant]}
      {showError && hasError && <ErrorDiv>{error}</ErrorDiv>}
    </MaskedInputContainer>
  );
};
