import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import './RegisterForm.scss';

export default function RegisterForm(props) {
  const { setShowLogin } = props;

  const onSubmit = () => {
    console.log('Formulario enviado');
  };

  return (
    <>
      <h2 className="register-form-title">
        Regístrate para ver fotos y vídeos de tus amigos
      </h2>
      <Form className="register-form" onSubmit={onSubmit}>
        <Form.Input type="text" placeholder="Nombre y apellidos" name="name" />
        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
        />
        <Form.Input type="text" placeholder="Correo eletrónico" name="email" />
        <Form.Input type="password" placeholder="Contraseña" name="password" />
        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="repeatPassword"
        />
        <Button type="submit" className="btn-submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}
