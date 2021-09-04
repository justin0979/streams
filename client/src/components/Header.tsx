import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header: React.FC = () => {
  return (
    <div className="menu menu__split">
      <Link to="/" className="menu__item">
        Streamer
      </Link>
      <div className="menu__split-right">
        <Link to="/" className="menu__item">
          Streams
        </Link>
        <GoogleAuth className="menu__item" />
      </div>
    </div>
  );
};

export default Header;
