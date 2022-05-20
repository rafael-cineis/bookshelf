import '@reach/dialog/styles.css'

import * as React from 'react';
import ReactDOM from 'react-dom'
import {Logo} from 'components/logo'
import Dialog from '@reach/dialog';

function LoginForm({ onSubmit, buttonText }) {
  const onSubmitHandler = (e) => {
    e.preventDefault()
    const { username, password } = e.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = React.useState('none')
  const closeDialog = () => setOpenModal('none')

  const onSubmitLogin = (formData) => {
    console.log('login', formData)
  }

  const onSubmitRegister = (formData) => {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>

      <Dialog aria-label="Login Form" isOpen={openModal === 'login'} onDismiss={closeDialog}>
        <button type="button" onClick={closeDialog}>
          Close
        </button>
        <h3>Login</h3>
        <LoginForm buttonText="Login" onSubmit={onSubmitLogin} />
      </Dialog>

      <Dialog aria-label="Registration Form" isOpen={openModal === 'register'} onDismiss={closeDialog}>
        <button type="button" onClick={closeDialog}>
          Close
        </button>
        <h3>Register</h3>
        <LoginForm buttonText="Register" onSubmit={onSubmitRegister} />
      </Dialog>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
