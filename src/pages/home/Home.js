import React from 'react';
import useAuth from '../../hooks/useAuth';

export default function Home() {
  const auth = useAuth();

  console.log('auth: ', auth);

  return (
    <div>
      <h1>Estamos en la Home</h1>
    </div>
  );
}
