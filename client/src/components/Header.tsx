import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <div className="menu">
      <Link to="/" className="menu__item">
        Streamer
      </Link>
      <div className="right cleared">
        <Link to="/" className="menu__item">
          Streams
        </Link>
      </div>
    </div>
  );
};

export default Header;
