// It defines an interface named PostProps which describes the properties of a post.
// The Post component is a functional component that receives the PostProps as its props.
// It renders the name and body of the post along with the post ID and user ID.

// Import styles
import './post.scss';

interface PostProps {
  id: number;
  userId: number;
  name: string;
  body: string;
}

const Post: React.FC<PostProps> = ({ id, userId, name, body }) => {
  return (
    <div className='container'>
      <div className='thumbnail'>
        <div className='thumbnail-id'>{id}</div>
        <h2>{name}</h2>
        <p>{body}</p>
        <p>User: {userId}</p>
      </div>
    </div>
  );
};

export default Post;

