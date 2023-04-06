import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AiOutlineEye } from 'react-icons/ai';

export const SingleCandidateReports = () => {
  const [reports, setReports] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:3333/api/reports?candidateId=${params.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setReports(data);
      });
  }, [params.id]);
  if(!SingleCandidateReports) {
    return null;
  }
  // FORMATING THE DATE
  const getFullDate = (date) => {
    let a = new Date(date);
    let month = a.getMonth() + 1;
    let fullYear = a.getFullYear();
    let day = a.getDate();
    return `${day}-${month}-${fullYear}`;
  }
 
  return (
   <table className='table'>
    <thead>
      <tr>
        <th>Company</th>
        <th>Interview Data</th>
        <th colSpan={2}>Status</th>
      </tr>
    </thead>
    <tbody>
      {reports.map((report) => {
        return (
          <tr key={report.id}>
            <td>{report.companyName}</td>
            <td>{getFullDate(report.interviewDate)}</td>
            <td>{report.status}</td>
            <td>
              <span>
              <AiOutlineEye />
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
   </table>
  )
};
