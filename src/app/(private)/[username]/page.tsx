'use client'

import Loading from '@/app/loading'
import PublicPublicProfileSection from '@/components/ui/PublicProfileSection/PublicProfileSection'
import {
  useGetPostsByUsernameQuery,
  useGetUserByUsernameQuery,
} from '@/redux/slices/apiSlice'
import { useParams } from 'next/navigation'
import { UserProfilePageContainer, UserProfilePageContent } from './UserProfilePageStyles'

export default function UserProfilePage() {
  const { username } = useParams<{ username: string }>()

  const { data: posts, isLoading: isPostsLoading, } = useGetPostsByUsernameQuery(username)

  const { data: user, isLoading: isUserLoading, } = useGetUserByUsernameQuery(username)

  if (isPostsLoading || isUserLoading) return (
    <UserProfilePageContainer className="container">
      <UserProfilePageContent>
        <Loading size='lg' />
      </UserProfilePageContent>
    </UserProfilePageContainer>
  )

  if (!posts || !user) return (
    <UserProfilePageContainer className="container">
      <UserProfilePageContent>
        <Loading size='lg' />
      </UserProfilePageContent>
    </UserProfilePageContainer>
  )

  return (
    <UserProfilePageContainer className="container">
      <UserProfilePageContent>
        <PublicPublicProfileSection user={user} />
      </UserProfilePageContent>
    </UserProfilePageContainer>
  )
}
