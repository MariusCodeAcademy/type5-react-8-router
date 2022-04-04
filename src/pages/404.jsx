import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>OOps 404 page was not found</h1>
      <Link to={'/'}>Try home page</Link>
    </div>
  );
};

export default NotFound;
