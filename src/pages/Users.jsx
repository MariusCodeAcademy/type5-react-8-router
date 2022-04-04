import SingleUserCard from '../components/SingleUserCard';

// importuoti usersDb i UsersPage ir generuoti <SingleUserCard /> paduodant username kaip prop

const Users = () => {
  return (
    <div>
      <h1>I am Users page</h1>
      <p>This is list of our users</p>
      <div className='grid'>
        <SingleUserCard />
        <SingleUserCard />
        <SingleUserCard />
      </div>
    </div>
  );
};

export default Users;
