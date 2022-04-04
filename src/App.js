import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Users from './pages/Users';
import SingleUser from './pages/SingleUser';
import NotFound from './pages/404';

// create PSL Users
// create PSL SingleUserPage
// create component singleUserCard.jsx
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/contact-us'>
          <Redirect to={'/contact'} />
        </Route>
        <Route path='/users' exact>
          <Users />
        </Route>
        {/* dinaminis routas */}
        <Route path='/users/:userId'>
          <SingleUser />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
