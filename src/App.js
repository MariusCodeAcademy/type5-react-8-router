import { Route, Link } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <nav>
        <Link className='nav-link' to='/home'>
          Home page
        </Link>
        <Link to='/about'>About page</Link>
        <Link to='/contact'>Contact page</Link>
      </nav>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </div>
  );
}

export default App;
