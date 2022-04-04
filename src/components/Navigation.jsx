import { NavLink } from 'react-router-dom';

const navData = [
  {
    id: 1,
    link: '/',
    title: 'Home page',
  },
  {
    id: 2,
    link: '/about',
    title: 'About page',
  },
  {
    id: 3,
    link: '/contact',
    title: 'Contact page',
  },
  {
    id: 4,
    link: '/users',
    title: 'Our Users',
  },
];

const Navigation = () => {
  return (
    <nav>
      {navData.map((navObj) => (
        <NavLink exact key={navObj.id} className='nav-link' to={navObj.link}>
          {navObj.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
