// ./pages/posts.tsx
import React from 'react';
import SocialMediaPosts from '../components/SocialMediaPosts';

const posts = [
  { username: 'user1', content: 'This is a post' },
  { username: 'user2', content: 'This is another post' },
];

const PostsPage: React.FC = () => {
  return <SocialMediaPosts posts={posts} />;
};

export default PostsPage;