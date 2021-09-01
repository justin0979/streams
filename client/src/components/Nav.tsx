import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <Link to="/streams/new">Create</Link>
      <Link to="/streams/edit">Edit</Link>
      <Link to="/streams/delete">Delete</Link>
      <Link to="/streams/show">Show</Link>
    </div>
  );
};

export default Nav;
