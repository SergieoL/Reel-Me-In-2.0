import React, { useState } from 'react';
//imported from auth and mutations files
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Signup = () => {
  //will be used to set default state in form element
  //imported from react
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  //declaration for new user, using mutation resolver..
  const [addUser, { error }] = useMutation(ADD_USER);
  // State updates based on user input
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
// event handling 
  const handleFormSubmit = async event => {
    event.preventDefault();
    //checking for errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
      //Authenticating
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

  };


  return (
    <main className='text-center flex-row justify-center mb-4 row'>
      <div className='col-4'></div>
      <div className='col-4'>
        <div className='card bg-warning m-4 border border-danger'>
          <h4 className='card-header bg-success'>Sign Up</h4>
          <div className='card-body p-4 row'>
            <form onSubmit={handleFormSubmit}>
              <input
                className='form-input px-2 m-3 col-8'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
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
              {error && <div>Sign up failed</div>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
