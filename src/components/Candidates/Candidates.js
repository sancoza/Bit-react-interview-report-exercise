import './Candidates.css';
import { useEffect, useState } from 'react';
import UserCard from './UserCard/UserCard';

export const Candidates = () => {
  const [search, setSearch] = useState('');
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3333/api/candidates')
      .then((res) => res.json())
      .then((data) => {
        setCandidates(data);
      });
  });

  return (
    <div>
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
          {candidates
            .slice(0, 6)
            .filter((candidate) => {
              if (search.trim() === '') {
                return true;
              } else {
                return candidate.name
                  .toLocaleLowerCase()
                  .includes(search.trim().toLocaleLowerCase());
              }
            })
            .map((candidate) => {
              return <UserCard key={candidate.id} candidate={candidate} />;
            })}
        </setion>
      </main>
    </div>
  );
};
