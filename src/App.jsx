import React, { useState } from 'react';

export default function App() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const passwordSetter = passwordValue => {
    setPassword({ Password: passwordValue.target.value });
  };

  const loginSetter = loginValue => {
    setLogin({ Login: loginValue.target.value });
  };

  const toConsole = () => {
    console.log(password);
    console.log(login);
  };
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <input
        style={{ marginBottom: '20px' }}
        onChange={e => loginSetter(e)}
        placeholder="Введите Login"
        type="text"
      />
      <input
        style={{ marginBottom: '20px' }}
        onChange={e => passwordSetter(e)}
        placeholder="Введите пароль"
        type="password"
      />
      <button type="button" onClick={() => toConsole()}>
        Ввод
      </button>
    </div>
  );
}
