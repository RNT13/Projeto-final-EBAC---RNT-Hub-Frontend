"use client"

import { useLikePostMutation, useUnlikePostMutation } from "@/redux/slices/apiSlice";
import { Box } from "@/styles/globalStyles";
import Image from "next/image";
import { useState } from "react";
import { FaComment, FaHeart } from "react-icons/fa";
import Button from "../Button/Button";
import ComentsWindow from "../ComentsWindow/ComentsWindow";
import UserAvatarImage from "../UserAvatar/UserAvatarImage";
import { PostAuthorInfo, PostButtonContainer, PostCardBody, PostCardContainer, PostCardContent, PostCardFooter, PostCardHeader, PostImage } from "./PostCardStyles";

interface PostCardProps {
  post: Post;
}



export default function PostCard({ post }: PostCardProps) {
  const [likePost, { isLoading: likeLoading }] = useLikePostMutation();
  const [unlikePost, { isLoading: unlikeLoading }] = useUnlikePostMutation();

  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  return (
    <PostCardContainer>
      <PostCardContent>
        <Box $bgColor="glass" direction="column" height="fit" width="fit" $align="center" $justify="center">
          <PostCardHeader>
            <div>
              <UserAvatarImage user={post.author} size="small" position="flex" border="true" />
            </div>
            <PostAuthorInfo>
              <h2>{post.author.username}</h2>
              <small>{new Date(post.created_at).toLocaleDateString("pt-BR")} - {new Date(post.created_at).toLocaleTimeString("pt-BR")}</small>
            </PostAuthorInfo>
          </PostCardHeader>

          <PostCardBody>
            <div>
              <p>{post.content}</p>
            </div>

            <PostImage>
              {post.image && (
                <Image src={post.image} width={500} height={500} loading="eager" alt="Post Image" />
              )}
            </PostImage>
          </PostCardBody>

          <PostCardFooter>

            <PostCardFooter>
              <PostButtonContainer>
                <Button
                  variant="ghost"
                  size="xs"
                  leftIcon={<FaHeart color={post.is_liked ? "red" : "white"} />}
                  disabled={likeLoading || unlikeLoading}
                  fullWidth
                  onClick={() => post.is_liked ? unlikePost(post.id) : likePost({ postId: post.id })}
                >
                  {post.likes_count}
                </Button>


                <Button variant="ghost" size="xs" leftIcon={<FaComment />} fullWidth onClick={() => setIsCommentsOpen(!isCommentsOpen)}>
                  {post.comments_count}
                </Button>
              </PostButtonContainer>
            </PostCardFooter>

          </PostCardFooter>
          <ComentsWindow postId={post.id.toString()} isOpen={isCommentsOpen} />
        </Box>
      </PostCardContent>
    </PostCardContainer>
  );
}
