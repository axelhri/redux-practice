import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to={'/'}>Home</Link>
      </div>
      <div>
        <Link to={'/login'}>Login</Link>
      </div>

      <div>
        <Link to={'/login-rhf'}>Login (react-hook-form)</Link>
      </div>

      <div>
        <Link to={'/user'}>User info</Link>
      </div>

      <div>
        <Link to={'/me-login'}>Me Login</Link>
      </div>

      <div>
        <Link to={'/me-info'}>Me Info</Link>
      </div>
    </nav>
  );
};
