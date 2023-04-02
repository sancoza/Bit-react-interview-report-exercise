import { useNavigate } from 'react-router';
import './Candidates.css';

export const Candidates = (props) => {
  // SINGLE CANDIDATE
  const navigate = useNavigate();

  const onCardClick = (id) => {
    navigate(`/candidates/${id}`);
  };

  return (
    <main>
      <section className="main-header">
        <h3>Candidates</h3>
        <input
          type="text"
          className="input"
          placeholder="Search Candidate..."
          onChange={props.filterFunction}
        />
      </section>
      <setion className="main-body">
        {props.candidates.slice(0, 7).map((candidate) => {
          return (
            <article
              className="candidates-container"
              key={candidate.id}
              onClick={() => {
                onCardClick(candidate.id);
              }}
            >
              <div className="card">
                <img className="img" src={candidate.avatar} alt="avatar" />
                <div className="card-body">
                  <h4>{candidate.name}</h4>
                  <p>{candidate.email}</p>
                </div>
              </div>
            </article>
          );
        })}
      </setion>
    </main>
  );
};
