import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './Header.css';
export const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        {' '}
        <h1>Interviews Reports</h1>
      </Link>
      <Link to="/">
        <AwesomeButton type="primary">Candidates</AwesomeButton>
      </Link>
    </header>
  );
};
