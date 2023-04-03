import {BsFillSuitHeartFill} from 'react-icons/bs';
import './Footer.css';
export const Footer = () => {

  // show date
 const date = new Date();
 const day= date.getDate();
 const month = date.getMonth() + 1;
 const year = date.getFullYear();
 const curentDate = `${day}.${month}.${year}`;
  const hours = date.toLocaleTimeString();

  return (
    <footer>
      <div className='container footer' >
      <p>Made with <BsFillSuitHeartFill /> Bit student Sandra Balog - exercise </p>
      <section>
        <p>{curentDate}</p>
        <p>{hours}</p>
      </section>
      </div>
    </footer>
  )
}