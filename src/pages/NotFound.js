import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="card">
      <div className="text-center hero-content">
        <h1 className="text-8xl font-bold mb-8">Oops!</h1>
        <p className="text-5xl mb-8">404 - Page not found!</p>
        <Link to="/" className="btn btn-primary btn-lg">
          Back To Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
