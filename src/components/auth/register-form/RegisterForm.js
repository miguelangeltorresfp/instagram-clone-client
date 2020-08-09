import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { REGISTER } from '../../../gql/user';
import './RegisterForm.scss';

export default function RegisterForm(props) {
  const { setShowLogin } = props;
  const [register] = useMutation(REGISTER);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required('Tu nombre es obligatorio'),
      username: Yup.string()
        .matches(
          /^[a-zA-Z0-9]*$/,
          'El nombre del usuario no puede tener espacios'
        )
        .required('El nombre de usuario es obligatorio'),
      email: Yup.string()
        .email('El email no es válido')
        .required('El email es obligatorio'),
      password: Yup.string()
        .required('La contraseña es obligatoria')
        .oneOf([Yup.ref('repeatPassword')], 'Las contraseñas no son iguales'),
      repeatPassword: Yup.string()
        .required('La contraseña es obligatoria')
        .oneOf([Yup.ref('password')], 'Las contraseñas no son iguales'),
    }),
    onSubmit: async (formData) => {
      try {
        const newUser = formData;
        delete newUser.repeatPassword;

        await register({
          variables: {
            input: newUser,
          },
        });

        toast.success('Usuario registrado correctamente');
        setShowLogin(true);
      } catch (error) {
        // console.log(error);
        toast.error(error.message);
      }
    },
  });

  return (
    <>
      <h2 className="register-form-title">
        Regístrate para ver fotos y vídeos de tus amigos
      </h2>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Nombre y apellidos"
          name="name"
          onChange={formik.handleChange}
          error={formik.errors.name && true} // para simplemente se marque en rojo sin el texto
        />
        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          onChange={formik.handleChange}
          error={formik.errors.username && true}
        />
        <Form.Input
          type="text"
          placeholder="Correo eletrónico"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email && true}
        />
        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password && true}
        />
        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="repeatPassword"
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword && true}
        />
        <Button type="submit" className="btn-submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}

const initialValues = {
  name: '',
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
};
