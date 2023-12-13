// This is a TypeScript file named index.tsx.
// It contains a React functional component called PostsPage that fetches and displays a list of posts.

import { useEffect, useState } from 'react';
import Post from '../../components/post/Post';

// Import styles
import './posts.scss';

// Interface with the data that will be received from the API
interface PostData {
  id: number;
  title: string;
  body: string;
}

const PostsPage: React.FC = () => {

  // Store the posts
  const [posts, setPosts] = useState<PostData[]>([]);

  // useEffect hook to fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Request to the API endpoint
        const response = await fetch('https:// jsonplaceholder.typicode.com/posts');
        // Parse the response as JSON and update the state with the fetched data
        const data: PostData[] = await response.json();
        setPosts(data.slice(0, 10)); // Only the first 10 posts
      } catch (error) {
        // Log an error if there's any problem
        console.error('Error:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main>
    <div className='container'>
      <h1 className='title'>Posts</h1>
      <div className='row'>
        {posts.map((post) => (
          <div key={post.id} className='col-4'>
            <div className="post-wrapper">
            <Post
              id={post.id}
              userId={post.id}
              name={post.title}
              body={post.body}
            />
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
  );
};

export default PostsPage;
