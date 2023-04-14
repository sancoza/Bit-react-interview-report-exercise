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
    <div className="container">
     
      <div className="data">
          <div className="data-img">
            <img className='img' src={SingleCandidate.avatar} alt="img" />
          </div>
         
        <div className="name-email">
            <p className="name"> <small>
                <BsFillPersonFill />
              </small>Name:</p>
            <p>{SingleCandidate.name}</p>
            <p className="email"> <small>
                <MdEmail />
              </small>Email:</p>
            <p>{SingleCandidate.email}</p>
          </div>
          <div className="birth-education">
            <p className="birthday"> <small>
                <FaBirthdayCake />
              </small>Date of birth:</p>
            <p>{formattedDate}</p>
            <p className="education"> <small>
                <MdSchool />
              </small>Education:</p>
            <p>{SingleCandidate.education}</p>
          </div>
        </div>

          <h1>Reports</h1>
          <SingleCandidateReports />
      
 
    </div>
  );
};
