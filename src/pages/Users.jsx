import SingleUserCard from '../components/SingleUserCard';
import { usersDb } from '../data/db';

// importuoti usersDb i UsersPage ir generuoti <SingleUserCard /> paduodant username kaip prop

const Users = () => {
  return (
    <div>
      <h1>I am Users page</h1>
      <p>This is list of our users</p>
      <div className='grid'>
        {usersDb.map((uObj) => (
          <SingleUserCard key={uObj.id} name={uObj.username} />
        ))}
      </div>
    </div>
  );
};

export default Users;
