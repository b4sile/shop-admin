import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification, defaultTheme } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import './loginPage.css';

const MyLoginPage = ({ theme }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();
  const notify = useNotify();
  const submit = (e) => {
    e.preventDefault();
    login({ email, password }).catch(() => notify('Invalid email or password'));
  };

  return (
    <ThemeProvider theme={createMuiTheme(defaultTheme)}>
      <div className="wrapper">
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '300px',
            height: '200px',
          }}
          onSubmit={submit}
        >
          <TextField
            variant="filled"
            name="email"
            label="Почта"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="filled"
            label="Пароль"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button color="primary" variant="contained" type="submit">
            Войти
          </Button>
        </form>
      </div>
      <Notification />
    </ThemeProvider>
  );
};

export default MyLoginPage;
