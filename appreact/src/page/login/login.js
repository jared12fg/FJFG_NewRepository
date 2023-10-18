import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState} from 'react';
import './login.css';


function Login({handleLogin}) {
  
  
  return (
    <div className="container-fluid h-100 d-flex justify-content-center align-items-center login-container">
      <div className="col-md-6">
        <div className="card cardEnd">
          <div className="card-body">
            <h1 className="ma card-title mb-5 text-center">Iniciar sesión</h1>
            <form>
              <div className="mb-5">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control"/>
              </div>
              <div className='text-center mb-4'>
                <button type="submit" className="btn letraboton">Iniciar sesión</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;