import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usersDb } from './../data/db';

const SingleUser = () => {
  const [currentUser, setCurrentUser] = useState({});
  const { userId } = useParams();
  console.log('userId ===', userId);

  useEffect(() => {
    console.log('usersDb ===', usersDb);
    // is usersDb masyvo, atrinkti ta objekta kurio id === userId
    // suradus ta objekta nustatyti currentUser lygu tam objekui
  }, []);

  return (
    <div>
      <h1>{currentUser.username}</h1>
      <p>{currentUser.bio}</p>
    </div>
  );
};

export default SingleUser;
