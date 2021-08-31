import { Router, Route, Link } from 'react-router-dom';
import history from '&src/history';

const pageOne = () => {
  return (
    <div>
      <h1>Page One</h1>
      <Link to="/two">Page Two</Link>
    </div>
  );
};

const pageTwo = () => {
  return (
    <div>
      <h1>Page Two</h1>
      <Link to="/">Page One</Link>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div>
        <h1>App</h1>
        <Route path="/" exact component={pageOne} />
        <Route path="/two" exact component={pageTwo} />
      </div>
    </Router>
  );
};

export default App;
