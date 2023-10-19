import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState} from 'react';
import './login.css';


function Login({handleLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit  = (e) => {
    e.preventDefault();

    if (username === 'Jared@gmail.com' && password === '321') {
      handleLogin();
    } else {
      alert('Inténtalo de nuevo.');
    }
  };
  
  return (
    <div className="container-fluid h-100 d-flex justify-content-center align-items-center login-container">
      <div className="col-md-6">
        <div className="card cardEnd">
          <div className="card-body">
            <h1 className="ma card-title mb-5 text-center">Inicio de sesion</h1>
            <form>
              <div className="mb-5">
                <label htmlFor="email" className="form-label">Correo</label>
                <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className='text-center mb-4'>
                <button type="submit" className="btn letraboton" onClick={handleSubmit }>Iniciar sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;