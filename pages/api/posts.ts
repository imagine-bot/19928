// ./pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';

const posts = [
  { username: 'user1', content: 'This is a post' },
  { username: 'user2', content: 'This is another post' },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(posts);
};