//imports
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  //declarations for state and login authentication
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  //handling changes by user
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // handling on submit
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

  };


  return (
    //JSX implementing handling events, errors, and state
    <main className='text-center flex-row justify-center mb-4 row'>
      <div className='col-4'></div>
      <div className='col-4'>
        <div className='card bg-warning m-4 border border-danger'>
          <h4 className='card-header bg-success'>Login</h4>
          <div className='card-body p-4 row'>
            
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input px-2 m-3 col-8'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input px-2 m-3 col-8'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn btn-success d-block w-100 mt-4' type='submit'>
                Submit
              </button>
              {error && <div>Login failed</div>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
