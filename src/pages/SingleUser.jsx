import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { usersDb } from './../data/db';
import { usersUrl } from './Users';
import { getData } from './../utils/helper';

const SingleUser = () => {
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  const { userId } = useParams();
  console.log('userId ===', userId);

  useEffect(() => {
    getSingleUser();
  }, []);

  // parsiusti vartotojo kurio id === userId
  // juos irasom i currentUser
  const getSingleUser = async () => {
    const userFound = await getData(`${usersUrl}/${userId}`);
    setCurrentUser(userFound);
  };

  if (!currentUser?.username) {
    console.log('user not found');
    // history.push('/404');
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{currentUser && currentUser.username}</h1>
      <p>{currentUser?.website}</p>
      <p>{currentUser?.email}</p>
      <p>Tel: {currentUser?.phone}</p>
      <div>&#8594; &#x20AC; &#8364; €</div>
    </div>
  );
};

export default SingleUser;
