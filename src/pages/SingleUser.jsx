import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { usersDb } from './../data/db';
import { usersUrl } from './Users';

const SingleUser = () => {
  const [currentUser, setCurrentUser] = useState({});
  const history = useHistory();
  const { userId } = useParams();
  console.log('userId ===', userId);

  useEffect(() => {
    console.log('usersDb ===', usersDb);
    // is usersDb masyvo, atrinkti ta objekta kurio id === userId
    const foundUser = usersDb.find((uObj) => uObj.id === +userId);
    // suradus ta objekta nustatyti currentUser lygu tam objekui
    setCurrentUser(foundUser);
  }, []);
  // parsiusti vartotojo kurio id === userId
  // juos irasom i currentUser
  const getSingleUser = async () => {};

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
    </div>
  );
};

export default SingleUser;
