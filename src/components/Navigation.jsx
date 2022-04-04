import { Link } from 'react-router-dom';

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
];

const Navigation = () => {
  return (
    <nav>
      {navData.map((navObj) => (
        <Link key={navObj.id} className='nav-link' to={navObj.link}>
          {navObj.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
