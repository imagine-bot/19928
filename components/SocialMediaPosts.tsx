// ./components/SocialMediaPosts.tsx
import React from 'react';
import SocialMediaCard from './SocialMediaCard';

type Post = {
  username: string;
  content: string;
};

type SocialMediaPostsProps = {
  posts: Post[];
};

const SocialMediaPosts: React.FC<SocialMediaPostsProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <SocialMediaCard key={index} post={post} />
      ))}
    </div>
  );
};

export default SocialMediaPosts;