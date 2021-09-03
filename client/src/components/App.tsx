import { Router, Route } from 'react-router-dom';
import history from '&src/history';
import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow,
} from '&streams';
import Header from './Header';
import Nav from './Nav';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div className="container">
        <Nav />
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route
          path="/streams/edit"
          exact
          component={StreamEdit}
        />
        <Route
          path="/streams/new"
          exact
          component={StreamCreate}
        />
        <Route
          path="/streams/delete"
          exact
          component={StreamDelete}
        />
        <Route
          path="/streams/show"
          exact
          component={StreamShow}
        />
      </div>
    </Router>
  );
};

export default App;
