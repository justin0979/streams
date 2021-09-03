import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header: React.FC = () => {
  return (
    <div className="menu">
      <Link to="/" className="menu__item">
        Streamer
      </Link>
      <div className="menu--right">
        <Link to="/" className="menu__item">
          Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
