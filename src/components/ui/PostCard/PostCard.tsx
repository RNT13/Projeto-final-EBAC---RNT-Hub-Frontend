"use client"

import { useToggleLikeMutation } from "@/redux/slices/apiSlice";
import { Box } from "@/styles/globalStyles";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
  const route = useRouter();
  const [toggleLike, { isLoading: toggleLikeLoading }] = useToggleLikeMutation();
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleClick = () => {
    route.push(`/${post.author.username}`);
  }

  return (
    <PostCardContainer>
      <PostCardContent>
        <Box $bgColor="glass" direction="column" height="fit" width="fit" $align="center" $justify="center">
          <PostCardHeader onClick={handleClick}>
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
                  disabled={toggleLikeLoading}
                  fullWidth
                  onClick={() => toggleLike(post.id)}
                >
                  <p>{post.likes_count}</p>
                </Button>


                <Button variant="ghost" size="xs" leftIcon={<FaComment />} fullWidth onClick={() => setIsCommentsOpen(!isCommentsOpen)}>
                  <p>{post.comments_count}</p>
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
