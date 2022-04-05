import SingleUserCard from '../components/SingleUserCard';
import { usersDb } from '../data/db';
import { useState, useEffect } from 'react';
export const usersUrl = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {
  console.log('Users componet start ran');
  const [usersArr, setUsersArr] = useState([]);

  useEffect(() => {
    console.log('useEffect ran');
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await fetch(usersUrl);
    const usersFromApi = await resp.json();
    console.log('usersFromApi ===', usersFromApi);
    setUsersArr(usersFromApi);
  };

  console.log('Users componet end ran');

  return (
    <div>
      <h1>I am Users page</h1>
      <p>This is list of our users</p>
      <div className='grid'>
        {usersArr.map((uObj) => (
          <SingleUserCard key={uObj.id} name={uObj.username} id={uObj.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
