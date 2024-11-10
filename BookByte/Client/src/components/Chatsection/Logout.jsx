// src/components/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear(); // Clear session storage
    navigate('/'); // Navigate to home page
  }, [navigate]);

  return (
    <div>
     {/* <h3>Logging out...</h3>*/}
    </div>
  );
}

export default Logout;
