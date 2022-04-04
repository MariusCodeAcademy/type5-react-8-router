import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { usersDb } from './../data/db';

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

  if (!currentUser?.username) {
    console.log('user not found');
    // history.push('/404');
    return <div>User not found</div>;
  }

  return (
    <div>
      <h1>{currentUser && currentUser.username}</h1>
      <p>{currentUser?.bio}</p>
    </div>
  );
};

export default SingleUser;
