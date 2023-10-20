// ./pages/posts.tsx
import React, { useEffect, useState } from 'react';
import SocialMediaPosts from '../components/SocialMediaPosts';

type Post = {
  username: string;
  content: string;
};

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return <SocialMediaPosts posts={posts} />;
};

export default PostsPage;