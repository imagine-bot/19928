// ./components/SocialMediaCard.tsx
import React from 'react';

type Post = {
  username: string;
  content: string;
};

type SocialMediaCardProps = {
  post: Post;
};

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ post }) => {
  return (
    <div className="card">
      <h2>{post.username}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default SocialMediaCard;