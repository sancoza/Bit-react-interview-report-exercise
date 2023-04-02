import { BsFillPersonFill } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdEmail, MdSchool } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SingleCandidate.css';

export const SingleCandidate = () => {
  const [SingleCandidate, setSingleCandidate] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3333/api/candidates/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleCandidate(data);
      });
  }, [params.id]);

  if (!SingleCandidate) {
    return null;
  }
  // FORMATING THE DATE
  const date = new Date(SingleCandidate.birthday);
  const formattedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  return (
    <section className="single-candidate">
    
      <img className="img" src={SingleCandidate.avatar} alt="avatar" />
    
      
      <article>
      <div className='candidate-data'>
         <p>
          <span>
            <BsFillPersonFill /> Name:<br></br>
          </span>
          {SingleCandidate.name}
        </p>
        <p>
          <span>
            <FaBirthdayCake />
            Date of birth:<br></br>
          </span>
          {formattedDate}
        </p>
        <p>
          <span>
            <MdEmail />
            Email:
          </span>
          <br></br>
          {SingleCandidate.email}
        </p>
        <p>
          <span>
            <MdSchool />
            Education:<br></br>
          </span>
          {SingleCandidate.education}
        </p>
      </div>
       
      </article>
      <article className='candidate-table'>
        
      </article>
    </section>
  );
};
