import { TextInput } from '@tremor/react';
import { useState } from 'react';
import React from 'react'

function RegisterCardForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission here
  };
  return (
    <div>
      <div className='flex items-center justify-center text-center'>
        <form onSubmit={handleSubmit} className="mx-auto max-w-sm space-y-6">
          <div className="mx-auto max-w-sm space-y-6">
            <div className='m-6'>
              <h1 className="text-3xl font-bold mb-4"> Add an Admin </h1>
              <p className="text-md font-bold" > Fill out the necessary details needed </p>
            </div>
            <div >
              <h2 className='text-base my-4 font-bold'> First Name </h2>
              <TextInput
                placeholder='Type here..'
                type='text'
                id="fname"
                className='text-base p-2'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <h2 className='text-base my-2 font-bold'> Last Name </h2>
              <TextInput
                placeholder='Type here..'
                type='text'
                id="lname"
                className='text-base p-2'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <h2 className='text-base my-2 font-bold'> Email </h2>
              <TextInput
                placeholder='Type here..'
                type='text'
                id="email"
                className='text-base p-2'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <h2 className='text-base my-2 font-bold'> Username </h2>
              <TextInput
                placeholder='Type here..'
                type='text'
                id="username"
                className='text-base p-2'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <h2 className='text-base my-2 font-bold'> Password </h2>
              <TextInput
                placeholder='Type here..'
                type='text'
                id="password"
                className='text-base p-2'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <h2 className='text-base my-2 font-bold'> Confirm Password </h2>
              <TextInput
                placeholder='Type here..'
                type='text'
                id="confpassword"
                className='text-base p-2'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-12 mb-2 flex justify-center w-full">
            <button className="btn btn-primary text-base btn-wide mb-6"> Save Admin </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterCardForm