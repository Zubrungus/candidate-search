import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link key={1} to='/' >Search for candidates</Link>
        <Link key={2} to='/SavedCandidates' >Saved candidates</Link>
      </ul>
    </nav>
  )
};

export default Nav;
