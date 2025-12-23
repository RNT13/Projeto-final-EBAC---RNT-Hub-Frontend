import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { logout, setCredentials } from '../slices/authSlice'
import type { RootState } from '../store'

/* ======================================================
   BASE QUERY
====================================================== */
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://rnt-hub.onrender.com/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  }
})

/* ======================================================
   BASE QUERY COM REFRESH
====================================================== */
const baseQueryWithReauth: typeof baseQuery = async (args, api, extra) => {
  let result = await baseQuery(args, api, extra)

  if (result.error?.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: 'api/token/refresh/',
        method: 'POST'
      },
      api,
      extra
    )

    if (refreshResult.data) {
      const { access } = refreshResult.data as RefreshResponse

      api.dispatch(setCredentials({ token: access }))
      result = await baseQuery(args, api, extra)
    } else {
      api.dispatch(logout())

      //força o app a "resetar"
      window.location.href = '/'
    }
  }

  return result
}

/* ======================================================
   API SLICE
====================================================== */
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,

  tagTypes: ['User', 'Post', 'Comment', 'Like', 'Follow', 'Notification'],

  endpoints: builder => ({
    /* ================= AUTH ================= */
    loginUser: builder.mutation<LoginResponse, LoginPayload>({
      query: body => ({
        url: 'api/token/',
        method: 'POST',
        body
      })
    }),

    registerUser: builder.mutation<RegisterResponse, RegisterPayload>({
      query: body => ({
        url: 'api/v1/users/register/',
        method: 'POST',
        body
      })
    }),

    /* ================= USERS ================= */
    getCurrentUser: builder.query<User, void>({
      query: () => 'api/v1/users/me/',
      providesTags: ['User']
    }),

    getUsers: builder.query<PaginatedResponse<User>, void>({
      query: () => 'api/v1/users/',
      providesTags: ['User']
    }),

    getUserById: builder.query<User, number>({
      query: id => `api/v1/users/${id}/`,
      providesTags: ['User']
    }),

    getUserByUsername: builder.query<User, string>({
      query: username => `api/v1/users/${username}/`,
      providesTags: ['User']
    }),

    editUser: builder.mutation<User, { body: Partial<User> }>({
      query: ({ body }) => ({
        url: 'api/v1/users/me/',
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['User']
    }),

    /* ================= POSTS ================= */
    getPosts: builder.query<PaginatedResponse<Post>, void>({
      query: () => 'api/v1/posts/',
      providesTags: ['Post']
    }),

    getPostById: builder.query<PaginatedResponse<Post>, number>({
      query: id => `api/v1/posts/${id}/`,
      providesTags: ['Post']
    }),

    getPostsByUsername: builder.query<PaginatedResponse<Post>, string>({
      query: username => `api/v1/posts/user/${username}/`,
      providesTags: ['Post']
    }),

    createPost: builder.mutation<NewPostResponse, NewPostPayload | FormData>({
      query: body => ({
        url: 'api/v1/posts/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Post']
    }),

    updatePost: builder.mutation<Post, { id: string; body: Partial<Post> }>({
      query: ({ id, body }) => ({
        url: `api/v1/posts/${id}/`,
        method: 'PATCH',
        body
      }),
      invalidatesTags: ['Post']
    }),

    deletePost: builder.mutation<void, string>({
      query: id => ({
        url: `api/v1/posts/${id}/`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Post']
    }),

    /* ================= COMMENTS ================= */
    getPostComments: builder.query<Comment[], string>({
      query: postId => `api/v1/posts/${postId}/comments/`,
      providesTags: ['Comment']
    }),

    createComment: builder.mutation<Comment, { postId: string; content: string }>({
      query: ({ postId, content }) => ({
        url: `api/v1/posts/${postId}/comments/`,
        method: 'POST',
        body: { content }
      }),
      invalidatesTags: ['Comment']
    }),

    /* ================= LIKES ================= */
    likePost: builder.mutation<void, { post: string }>({
      query: body => ({
        url: 'api/v1/likes/',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Post']
    }),

    unlikePost: builder.mutation<void, string>({
      query: id => ({
        url: `api/v1/likes/${id}/`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Post']
    }),

    /* ================= FOLLOWS ================= */
    followUser: builder.mutation<void, string>({
      query: username => ({
        url: `api/v1/users/${username}/follow/`,
        method: 'POST'
      }),
      invalidatesTags: ['User']
    }),

    unfollowUser: builder.mutation<void, string>({
      query: username => ({
        url: `api/v1/users/${username}/follow/`,
        method: 'DELETE'
      }),
      invalidatesTags: ['User']
    }),

    getFollowers: builder.query<PaginatedResponse<User>, number>({
      query: userId => `api/v1/follows/${userId}/followers/`,
      providesTags: ['Follow']
    }),

    getFollowing: builder.query<PaginatedResponse<User>, number>({
      query: userId => `api/v1/follows/${userId}/following/`,
      providesTags: ['Follow']
    }),

    /* ================= FEED ================= */
    userFeed: builder.query<PaginatedResponse<Post>, void>({
      query: () => 'api/v1/feed/user_feed/',
      providesTags: ['Post']
    }),

    exploreFeed: builder.query<PaginatedResponse<Post>, void>({
      query: () => 'api/v1/feed/explore_feed/',
      providesTags: ['Post']
    }),

    imagesFeed: builder.query<PaginatedResponse<Post>, void>({
      query: () => 'api/v1/feed/images_feed/',
      providesTags: ['Post']
    }),

    algorithmFeed: builder.query<PaginatedResponse<Post>, void>({
      query: () => 'api/v1/feed/algorithm_feed/',
      providesTags: ['Post']
    }),

    /* ================= NOTIFICATIONS ================= */
    getNotifications: builder.query<Notification[], void>({
      query: () => 'api/v1/notifications/',
      providesTags: ['Notification']
    }),

    markNotificationRead: builder.mutation<void, string>({
      query: id => ({
        url: `api/v1/notifications/${id}/read/`,
        method: 'PATCH'
      }),
      invalidatesTags: ['Notification']
    }),

    markAllNotificationsRead: builder.mutation<void, void>({
      query: () => ({
        url: 'api/v1/notifications/read_all/',
        method: 'PATCH'
      }),
      invalidatesTags: ['Notification']
    }),

    /* ================= PASSWORD ================= */
    changePassword: builder.mutation<{ detail: string }, { current_password: string; new_password: string }>({
      query: body => ({
        url: 'api/v1/users/me/change-password/',
        method: 'PATCH',
        body
      })
    })
  })
})

/* ======================================================
    EXPORT HOOKS
====================================================== */
export const {
  //====== AUTH ======//
  useLoginUserMutation,
  useRegisterUserMutation,

  //====== USERS ======//
  useGetCurrentUserQuery,
  useGetUsersQuery,
  useGetUserByIdQuery,
  useEditUserMutation,
  useGetUserByUsernameQuery,

  //====== POSTS ======//
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostsByUsernameQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,

  //====== COMMENTS ======//
  useGetPostCommentsQuery,
  useCreateCommentMutation,

  //====== LIKES ======//
  useLikePostMutation,
  useUnlikePostMutation,

  //====== FOLLOWS ======//
  useFollowUserMutation,
  useUnfollowUserMutation,
  useGetFollowersQuery,
  useGetFollowingQuery,

  //====== FEED ======//
  useUserFeedQuery,
  useExploreFeedQuery,
  useImagesFeedQuery,
  useAlgorithmFeedQuery,

  //====== NOTIFICATIONS ======//
  useGetNotificationsQuery,
  useMarkNotificationReadMutation,
  useMarkAllNotificationsReadMutation,

  //====== PASSWORD ======//
  useChangePasswordMutation
} = apiSlice
