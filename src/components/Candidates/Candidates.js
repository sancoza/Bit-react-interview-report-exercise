import { useNavigate } from 'react-router';
import './Candidates.css';
import { useState } from 'react';

export const Candidates = (props) => {
  const [search, setSearch] = useState('');
  console.log(search);

  // SINGLE CANDIDATE
  const navigate = useNavigate();

  const onCardClick = (id) => {
    navigate(`/candidates/${id}`);
  };

  return (
    <main className="container">
      <section className="main-header">
        <h3>Candidates</h3>
        <input
          type="text"
          className="input"
          placeholder="Search Candidate..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>
      <setion className="main-body">
        {props.candidates
          .slice(0, 6)
          .filter((candidate) => {
            if (search.toLocaleLowerCase() === '') {
              return candidate;
            } else {
              return candidate.name.toLocaleLowerCase().includes(search);
            }
          })
          .map((candidate) => {
            return (
              
                <div className="card"key={candidate.id}
                onClick={() => {
                  onCardClick(candidate.id);
                }}>
                  <img className="img" src={candidate.avatar} alt="avatar" />
                  <div className="card-body">
                    <h4>{candidate.name}</h4>
                    <p>{candidate.email}</p>
                  </div>
                </div>
             
            );
          })}
      </setion>
    </main>
  );
};
