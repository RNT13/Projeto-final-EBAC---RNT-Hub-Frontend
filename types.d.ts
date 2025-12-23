import 'styled-components'
import { store } from './src/redux/store'

// Tipagem do Redux
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Tipagem global pro React-Redux + RTK
declare module 'react-redux' {
  type DefaultRootState = RootState
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      baseBlack: ColorVariants
      baseBlue: ColorVariants
      baseGreen: ColorVariants
      baseRed: ColorVariants
      baseCyan: ColorVariants
      baseYellow: ColorVariants
      baseglass: ColorVariants

      // cores estáticas
      primaryColor: string
      secondaryColor: string
      thirdColor: string
      forthColor: string
      fifthColor: string
      sixthColor: string
      pinkColor: string
      pinkColor2: string
      pinkColor3: string
      textColor: string
      textColor2: string
      textColor3: string
      bgColor: string

      yellow: string
      yellow2: string
      blue: string
      blue2: string
      gray: string
      gray2: string
      orange: string
      orange2: string
      black: string
      red: string
      redHover: string
      error: string
      green: string
      green2: string
      neonBlue: string
      neonGree: string

      // suporte a nested objects (como neon no darkTheme)
      neon?: {
        [key: string]: string
      }
    }
  }
}

declare global {
  declare interface ColorVariants {
    base: string
    light: string
    light02: string
    light04: string
    light08: string
    light20: string
    light30: string
    light40: string
    light50: string
    dark: string
    dark02: string
    dark04: string
    dark08: string
    dark20: string
    dark30: string
    dark40: string
    dark50: string
  }

  type TagType = keyof typeof TAG_CONFIG

  // -------------------------------------
  // Enums (Status e Roles)
  // -------------------------------------
  enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER'
  }

  // -------------------------------------
  // Entidades do Banco de Dados (Models)
  // -------------------------------------

  export interface User {
    id: number
    email: string
    username: string
    full_name: string
    role: UserRole
    user_tag: string
    bio: string
    avatar: string
    user_bg: string
    website: string
    location: string
    is_verified: boolean
    date_joined: Date
    followers_count: string
    following_count: string
    is_following: boolean
  }

  // -------------------------------------
  // Payloads e Respostas de API
  // -------------------------------------

  // Auth
  interface RegisterPayload {
    email: string
    username: string
    full_name: string
    password: string
    confirm_password: string
  }
  interface RegisterResponse {
    user: User
    token: string
    message: string
    success: boolean
  }
  interface LoginPayload {
    email: string
    password: string
  }
  interface LoginResponse {
    access: string
    user: User
    token: string
    message: string
    success: boolean
  }

  interface RefreshResponse {
    access: string
  }

  type SectionType = 'noticias' | 'videos' | 'fotos' | 'chat' | 'perfil' | 'mensagens' | 'notificacoes' | 'configuracoes' | 'usuarios'

  type SettingsWindow = 'name' | 'password'

  interface Post {
    id: string
    author: User
    author_username: string
    content: string
    is_liked: boolean
    image: string
    created_at: string
    updated_at: string
    likes_count: number
    comments_count: number
  }

  interface NewPostPayload {
    content: string
    image?: File | string
  }

  interface Comment {
    id: number
    user: User
    post_id: number
    content: string
    created_at: string
  }

  interface NewPostResponse {
    id: string
    author: User
    author_username: string
    content: string
    image: string
    createdAt: Date
    updatedAt: Date
    likes_count: number
    comments_count: number
  }

  type BoxProps = {
    direction: 'row' | 'column'
    $justify?: 'center' | 'space-between' | 'space-around' | 'start' | 'end'
    $align?: 'center' | 'space-between' | 'space-around' | 'start' | 'end'
    $bgColor?: 'primary' | 'secondary' | 'tertiary' | 'glass'
    width?: 'xm' | 'sm' | 'md' | 'lg' | 'fit'
    height?: 'xm' | 'sm' | 'md' | 'lg' | 'fit'
    $padding?: 'xm' | 'sm' | 'md' | 'lg' | 'fit'
  }

  interface PaginatedResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
  }

  interface ApiErrorResponse {
    status: number
    data: {
      detail: string
      [key: string]: string
    }
    statusText: string
    message: string
    success: boolean
    error: string
  }
}
