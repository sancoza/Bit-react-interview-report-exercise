import { Outlet, Route, Routes } from 'react-router';
import './App.css';
import { Candidates } from './components/Candidates/Candidates';
import { useEffect, useState } from 'react';
import { SingleCandidate } from './components/Candidates/SingleCandidate/SingleCandidate';
import { AdminDashboard } from './components/AdminDashboard/AdminDashboard';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  const [admin, setAdmin] = useState([]);
  const PageLayout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );

  const FetchAdminData = () => {
    fetch('http://localhost:3333/api/admin')
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data);
      });
  };
  useEffect(() => {
    FetchAdminData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Candidates />} />
          <Route path="/candidates/:id" element={<SingleCandidate />} />
        </Route>

        <Route
          path="/admin/reports"
          element={<AdminDashboard admin={admin} />}
        />
      </Routes>
    </div>
  );
}

export default App;
