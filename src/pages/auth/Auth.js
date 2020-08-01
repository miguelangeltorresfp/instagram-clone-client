import React, { useState } from 'react';
import { Container, Image } from 'semantic-ui-react';
import RegisterForm from '../../components/auth/register-form';
import instaclone from '../../assets/png/instaclone.png';
import './Auth.scss';

export default function Auth() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Container fluid className="auth">
      <Image src={instaclone} />
      <div className="container-form">
        {showLogin ? (
          <p>Formulario de login</p>
        ) : (
          <RegisterForm setShowLogin={setShowLogin} />
        )}
      </div>

      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              ¿No tienes cuenta ?
              <span onClick={() => setShowLogin(!showLogin)}>Regístrate</span>
            </>
          ) : (
            <>
              ¡Entra con tu cuenta!
              <span onClick={() => setShowLogin(!showLogin)}>
                Iniciar sesión
              </span>
            </>
          )}
        </p>
      </div>
    </Container>
  );
}
