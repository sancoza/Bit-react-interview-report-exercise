import React from 'react'
import { useNavigate } from 'react-router';

export default function UserCard({ candidate }) {
  const navigate = useNavigate();

  return (
    <div className="card"
    onClick={() => {
      navigate(`/candidates/${candidate.id}`);
    }}>
      <img className="img" src={candidate.avatar} alt="user" />
      <div className="card-body">
        <h4>{candidate.name}</h4>
        <p>{candidate.email}</p>
      </div>
    </div>
  )
}
