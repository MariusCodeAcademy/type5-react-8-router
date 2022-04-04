import { Link } from 'react-router-dom';

const SingleUserCard = (props) => {
  return (
    <Link className='card' to={`/users/${props.id}`}>
      User: {props.name}
    </Link>
  );
};

export default SingleUserCard;
