import { useParams } from 'react-router-dom';

const SingleUser = () => {
  const { userId } = useParams();
  console.log('userId ===', userId);

  return (
    <div>
      <h1>I am SingleUser page for user with ID: {userId}</h1>
      <p>This is our SingleUsers data</p>
    </div>
  );
};

export default SingleUser;
