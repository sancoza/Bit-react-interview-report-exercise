import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './Header.css';
export const Header = () => {
  return (
    <header>
      <div className='container header'>
      <Link className="logo" to="/">
        {' '}
        <h1>Interviews Reports</h1>
      </Link>
      <div className='candidates-btn'>
         <Link to="/">
        <AwesomeButton type="primary">Candidates</AwesomeButton>
      </Link>
      <Link className='margin-left' to="/reports">
        <AwesomeButton type="primary">Reports</AwesomeButton>
      </Link>
      </div>
     
      </div>
      
    </header>
  );
};

