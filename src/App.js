import { Route, Routes } from 'react-router';
import './App.css';
import { Candidates } from './components/Candidates/Candidates';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { useEffect, useState } from 'react';
import { SingleCandidate } from './components/Candidates/SingleCandidate/SingleCandidate';

function App() {
  const [candidates, setCandidates] = useState([]);
  

  const fetchData = () => {
    fetch('http://localhost:3333/api/candidates')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCandidates(data);
      });
  };
  useEffect(() => {
    fetchData();
  },[]);
  // SEARCH
  const filterCnadidates = (e) => {
    const filteredCandidates = candidates.filter((candidate) => {
      return candidate.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setCandidates(filteredCandidates);
  }



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Candidates candidates={candidates} filterFunction ={filterCnadidates} />} />
        <Route path="/candidates/:id" element={<SingleCandidate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;