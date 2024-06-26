import { TextInput } from '@tremor/react';
import { Card } from '@tremor/react';

export function LoginCardForm() {
  return (
    <div> 
      <div className='flex items-center justify-center h-96 p-96 mt-12'>
        <Card 
        decoration="top"
        decorationColor="indigo"
        className='shadow-md'>
          <div className="w-20 rounded place-items-center items-center mx-auto">
            <img src="/Wynim-removebg-preview.png" alt="Wynim-Logo" />
          </div>
          
          <form action="">
            <div className="mx-auto max-w-sm space-y-6">
                <div className='m-6 text-center items-center justify-center'>
                      <h1 className="card-title"> Welcome to the WYNIM CRM System</h1>
                      <p> login with your email and password </p>
                </div>
              <div>
                <h2 className='text-base m-2'> Email </h2>
                <TextInput placeholder='Email' type='email' className='text-base p-2' />
              </div>
              <div>
                <h2 className='text-base m-2'> Password </h2>
                <TextInput placeholder="Password" type="password" className='text-base p-2' />
              </div>
            </div>
            <div className="flex items-center justify-center mt-12 mb-2 w-full">
              <button className="btn btn-wide btn-primary text-base">Login</button>
            </div>
          </form>
          <div>
            <p className="text-center text-sm mt-4">Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a></p>
          </div>
        </Card>
      </div>
    </div>
  );
}