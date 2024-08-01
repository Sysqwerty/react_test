import { useState } from 'react';

const LoginForm2 = () => {
  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    // Значення полів
    console.log(values);

    setValues({
      login: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        value={values.login}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm2;
