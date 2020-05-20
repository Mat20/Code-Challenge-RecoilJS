import React from 'react';
import { Link } from 'react-router-dom';


export default function HoemPage() {
  return(
    <div>
        <h1>Home Page</h1>

        <Link to="/users">Got to Users Page</Link>
    </div>
  )
}