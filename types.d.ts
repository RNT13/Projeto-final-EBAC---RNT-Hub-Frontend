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

  type BoxProps = {
    direction: 'row' | 'column'
    $justify?: 'center' | 'space-between' | 'space-around' | 'start' | 'end'
    $align?: 'center' | 'space-between' | 'space-around' | 'start' | 'end'
    $bgColor?: 'primary' | 'secondary' | 'tertiary' | 'glass'
    width?: 'xm' | 'sm' | 'md' | 'lg' | 'fit'
    height?: 'xm' | 'sm' | 'md' | 'lg' | 'fit'
    $padding?: 'xm' | 'sm' | 'md' | 'lg' | 'fit'
  }

  type SectionType =
    | 'feed'
    | 'explore'
    | 'trending'
    | 'videos'
    | 'fotos'
    | 'chat'
    | 'perfil'
    | 'mensagens'
    | 'notificacoes'
    | 'configuracoes'
    | 'usuarios'

  type SettingsWindow = 'name' | 'password'

  // Tipagem da API

  type User = {
    id: number
    email: string
    username: string
    full_name: string
    role: RoleEnum
    user_tag?: string
    bio?: string
    avatar?: string
    user_bg?: string
    website?: string
    location?: string
    is_verified?: boolean
    date_joined: Date
    followers_count?: number
    following_count?: number
    posts_count?: number
    is_follower: boolean
    is_following?: boolean
  }

  interface UserPublic {
    username?: string
    user_tag?: string
    avatar?: string
    is_verified?: boolean
    is_follower: boolean
    is_following?: boolean
  }

  interface FollowUser {
    id: number
    user: User
  }

  type Follow = {
    id: number
    follower_username?: string
    following_username?: string
  }

  interface Post {
    id: number
    author: UserPublic
    content: string
    image?: string
    is_liked: boolean
    created_at: Date
    likes_count: number
    comments_count: number
  }

  interface PostPayload {
    content: string | null
    image?: string | null
  }

  interface ChangePasswordPayload {
    current_password: string
    new_password: string
  }

  interface FollowResponse {
    id?: number
    follower?: UserPublic
    follower_username?: string
    following?: UserPublic
    following_username?: string
    created_at?: Date
  }

  interface LikeResponse {
    liked: boolean
    likes_count: number
  }

  interface Notification {
    id?: number
    author?: UserPublic
    user_username?: string
    text?: string
    is_read?: boolean
    created_at?: Date
  }

  // Tipagem das respostas da API
  interface RefreshResponse {
    access: string
  }

  interface Comment {
    id: string
    user: UserPublic
    content: string
    image?: string
    is_liked: string
    created_at: string
    likes_count: string
    comments_count: string
  }

  interface LoginRequest {
    email: string
    password: string
  }

  interface LoginResponse {
    user: User
    message: string
    access: string
    refresh: string
    success: boolean
  }

  interface RegisterRequest {
    id?: number
    email: string
    full_name: string
    username: string
    password: string
    confirm_password: string
  }

  interface RegisterResponse {
    message: string
    access: string
    refresh: string
  }

  interface PaginatedResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
  }

  interface ApiResponse {
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
