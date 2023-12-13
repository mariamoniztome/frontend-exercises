// This is a TypeScript file named Header.tsx that defines a functional component called Header.
// It imports a SCSS file named 'header.scss' and exports the Header component as default.

import { Link } from 'react-router-dom';

// Import styles
import './header.scss';

// Import the logo image
import logo from '../../assets/img/7skin_logo.webp'; 

const Header = () => {
  return (
    <header className="header">
       <nav>
        <div className="header__inner">
          <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Logo" loading="lazy" width={100} height={100}/>
          </Link>
          </div>
          <div className="header__navigation">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
