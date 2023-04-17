import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import { Link } from 'react-router-dom'
import './HeaderAdmin.css';
export const HeaderAdmin =()=> {
  return (
    <header>
    <div className='container header'>
    <Link className="logo" to="/">
      <h1>Reports Administration</h1>
    </Link>
    <div className='admin-btn'>
      <Link to="/reports">
      <AwesomeButton type="primary">Reports</AwesomeButton>
    </Link>
    <Link  className='margin-left' to='/reports/create'>
    <AwesomeButton  type="primary">Create Reports</AwesomeButton>
    </Link>
    </div>
    
    </div>
    
  </header>
  )
}
