import { TextInput } from '@tremor/react';
import { Card } from '@tremor/react';

function RegisterCardForm() {
    return (
        <div> 
          <div className='flex items-center justify-center h-96 p-96 text-center mt-16'>
            <Card 
            decoration="top"
            decorationColor="indigo">
              <div className="w-20 rounded place-items-center items-center mx-auto">
                  <img src="/Wynim-removebg-preview.png" alt="Wynim-Logo" />
              </div>
              <form action="">
                <div className="mx-auto max-w-sm space-y-6">
                    <div className='m-6 text-center items-center justify-center'>
                          <h1 className="text-2xl font-bold"> Signup </h1>
                          <p> Fill out the necessary details needed </p>
                    </div>
                  <div>
                    <h2 className='text-base m-2'> First Name </h2>
                    <TextInput placeholder='e.g Juan' type='text' className='text-base p-2'  id='fname'/>
                  </div>
                  <div>
                    <h2 className='text-base m-2'> Last Name </h2>
                    <TextInput placeholder='e.g Dela Cruz' type='text' className='text-base p-2' id='lname'/>
                  </div>
                  <div>
                    <h2 className='text-base m-2'> Email </h2>
                    <TextInput placeholder='Email' type='email' className='text-base p-2' id='email'/>
                  </div>
                  <div>
                    <h2 className='text-base m-2'> Password </h2>
                    <TextInput placeholder='Superawesomepassword' type="password" className='text-base p-2' id='password'/>
                  </div>
                  <div>
                    <h2 className='text-base m-2'> Confirm Password </h2>
                    <TextInput placeholder='Superawesomepassword' type="password" className='text-base p-2' id='password'/>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-12 mb-6 w-full">
                  <button className="btn btn-primary text-base btn-wide"> Signup </button>
                </div>
              </form>
              <div>
                <p className="text-center text-sm mt-4">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
              </div>
            </Card>
          </div>
        </div>
      );
}

export default RegisterCardForm