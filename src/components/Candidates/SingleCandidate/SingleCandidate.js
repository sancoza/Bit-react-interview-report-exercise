import { BsFillPersonFill } from 'react-icons/bs';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdEmail, MdSchool } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SingleCandidate.css';
import { SingleCandidateReports } from './SingleCandidateReports';

export const SingleCandidate = () => {
  const [SingleCandidate, setSingleCandidate] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3333/api/candidates/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
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
    
    <section className="container">
    <div className='row flex'>
     <div className='img-container col'>
      <img className="img" src={SingleCandidate.avatar} alt="avatar" />
     </div>
     <div className='col'>  
        <div className="d-flex-data">
            <p>
             <small><BsFillPersonFill /> </small> Name:
            </p>
            <span>{SingleCandidate.name}</span>
          </div>
          <div className="d-flex-data">
            <p>
              <small><FaBirthdayCake /></small>
              Date of birth:
            </p>
            <span>{formattedDate}</span>
          </div>
           <div className="d-flex">
          <div className="d-flex-data">
            <p>
              <small><MdEmail /></small>
              Email:
            </p>
            <span>{SingleCandidate.email}</span>
          </div>
          <div className="d-flex-data">
            <p>
              <small><MdSchool /></small>
              Education:
            </p>
            <span>{SingleCandidate.education}</span>
          </div></div>
        </div>

       
     <div className='col'><h1>Reports</h1>
        <SingleCandidateReports /></div>
</div>
   
    </section>
  );
};
