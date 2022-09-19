import React from 'react'
import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

function CreateProd() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>CreateProd</h1>
      <button onClick={() => signout(() => navigate('/', {replace: true}))}>
        Logout
      </button>
    </div>

  )
}

export default CreateProd;