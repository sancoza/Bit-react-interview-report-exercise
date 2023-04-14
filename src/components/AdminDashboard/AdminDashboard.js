import { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { HeaderAdmin } from './HeaderAdmin.js/HeaderAdmin';
import moment from 'moment/moment';

export const AdminDashboard = () => {
  const [reports, setReports] = useState([]);
  const [searchCandidate, setSearchCandidate] = useState('');

  useEffect(() => {
    fetch('http://localhost:3333/api/reports')
      .then((res) => res.json())
      .then((data) => {
        setReports(data);
      });
  });

  return (
    <div className="candidate-reports">
      <HeaderAdmin />
      <main className="container">
        <input
          type="text"
          className="input"
          placeholder="Search Candidate..."
          onChange={(e) => setSearchCandidate(e.target.value)}
        />
        {reports
          .slice(0, 6)
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
              <div key={report.id}>
                {report.companyName}
                {report.candidateName}
                {moment(report.interviewDate).format('DD.MM.YYYY')}
                {report.status}
              </div>
            );
          })}
      </main>
      <Footer />
    </div>
  );
};
