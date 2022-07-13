import React, { useState } from 'react';
//imported from auth and mutations files
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Signup = () => {
  //will be used to set default state in form element
  //imported from react
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });


  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Sign Up</h4>
          <div className='card-body'>
            <form>
              <input
                className='form-input'
                placeholder='Your username'
                name='username'
                type='username'
                id='username'
              />
              <input
                className='form-input'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
              />
              <input
                className='form-input'
                placeholder='******'
                name='password'
                type='password'
                id='password'
              />
              <button className='btn d-block w-100' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
