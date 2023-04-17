import { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { HeaderAdmin } from './HeaderAdmin.js/HeaderAdmin';
import moment from 'moment/moment';
import { AiOutlineEye } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import './AdminDashborad.css';
import { Modal } from './Modal/Modal';

export const AdminDashboard = () => {
  const [reports, setReports] = useState([]);
  const [searchCandidate, setSearchCandidate] = useState('');
  const[report, setReport] = useState(null); 
  const[modal, setModal] = useState(false);
  
  const openModal = (report) => {
    setModal(true);
    setReport(report);
}
  useEffect(() => {
    fetch('http://localhost:3333/api/reports')
      .then((res) => res.json())
      .then((data) => {
        setReports(data);
      });
  }, []);

  return (
    <div className="candidate-reports">
     <Modal
            modal={modal}
            setModal={setModal}
            report={report}/>
      <HeaderAdmin />
      <main className="container">
        <input
          type="text"
          className="input"
          placeholder="Search Candidate..."
          onChange={(e) => setSearchCandidate(e.target.value)}
        />
        {reports
          .slice(0, 10)
          .filter((report) => {
            if (searchCandidate.trim() === '') {
              return true;
            } else {
              return report.candidateName
                .toLocaleLowerCase()
                .includes(searchCandidate.trim().toLocaleLowerCase());
            }
          })
          .map((report) => {
            return (
              <table key={report.id}>
              <tbody>
                 <tr >
                  <td>
                    <small>Company</small>
                    <br></br>
                    {report.companyName}
                  </td>
                  <td>
                    <small>Name</small>
                    <br></br>
                    {report.candidateName}
                  </td>
                  <td>
                    <small>Interview Date</small>
                    <br></br>
                    {moment(new Date(report.interviewDate)).format('DD.MM.YYYY')}
                  </td>
                  <td>
                    <small>Status</small>
                    <br></br>
                    {report.status}
                  </td>

                  <td style={{cursor:"pointer"}}>
                    < AiOutlineEye onClick={()=> {
                      openModal(report) }}/>
                  </td>

                  <td style={{cursor:"pointer"}}>
                    <HiOutlineTrash 
                    />
                  </td>
                </tr>
              </tbody>
               
              </table>
            );
          })}
      </main>
      <Footer />
    </div>
  );
};
