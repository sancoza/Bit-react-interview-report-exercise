import { useEffect } from 'react';
import './ReportOverview.css';

export const ReportOverview = (props) => {
  const closePopup = props.closePopup;
  const report = props.report;
  
  useEffect(() => {
    // kada se modal prikaze na ekranu
    document.body.classList.add('modal-opened'); // pure js
    return () => {
      // kad se komponenta brise sa ekrana tj. kad se modal zatvori
      document.body.classList.remove('modal-opened'); // pure js
    };
  }, []);
  
  const dateString = `${report.interviewDate}`;
  const date = new Date(dateString);
  const formattedDate = date.toDateString();

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h1>{report.candidateName}</h1>
        <div>
          {
            <div>
              <div>
                <span>Company: </span>
                <h3>{report.companyName}</h3>
              </div>
              <div>
                <span>Interview Date: </span>
                <h3>{formattedDate}</h3>
              </div>
              <div>
                <span>Phase: </span>
                <h3>{report.phase}</h3>
              </div>
              <div>
                <span>Status: </span>
                <h3>{report.status}</h3>
              </div>
              <div>
                <span>Note: </span>
                <p>{report.note}</p>
              </div>
            </div>
          }
        </div>
        <div className="close" onClick={closePopup}>
        &times;
      </div>
      </div>
      
    </div>
  );
};
