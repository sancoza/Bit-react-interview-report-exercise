import { FaRegWindowClose } from 'react-icons/fa';
import './Modal.css';
import moment from 'moment';
export const Modal = ({ modal, setModal, report }) => {
  if (modal) {
    return (
      <div onClick={() => setModal(false)} className="popup">
        <div className="popup-inner">
          <div className="report-head">
            <h2>{report.candidateName}</h2>
            <button
              style={{ border: 'none' }}
              onClick={() => setModal(false)}
              className="close-btn"
            >
              <FaRegWindowClose />
            </button>
          </div>
          <hr></hr>
          <div className="report-box">
            <div className="report-data">
              <small>Company</small>
              <p>{report.companyName}</p>
              <small>Interview Date</small>
              <p>
                {' '}
                {moment(new Date(report.interviewDate)).format('DD.MM.YYYY')}
              </p>
              <small>Phase</small>
              <p>{report.phase}</p>
              <small>Status</small>
              <p>{report.status}</p>
            </div>
            <div className="report-note">
              <small>Note</small>
              <p>{report.note}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
