import { Button, Dialog, DialogPanel } from '@tremor/react';
import React, { ReactNode } from 'react';
import { TextInput } from '@tremor/react';

export function EditAdminDialog({ children }: { children: (params: { toggle: () => void }) => ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            {children({ toggle })}
            <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
                <DialogPanel>
                    <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong"> Edit Admin Info  </h3>
                    <p className="mt-2 leading-6 text-tremor-primary text-tremor-content dark:text-dark-tremor-content">
                        Carefully fill out the necessary details needed to update the admin's information
                    </p>
                    <div >
                        <h2 className='text-base my-4 font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong'> First Name </h2>
                        <TextInput placeholder='e.g Juan' type='text' className='text-base p-2' id='fname' />
                    </div>
                    <div>
                        <h2 className='text-base my-2 font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong'> Last Name </h2>
                        <TextInput placeholder='e.g Dela Cruz' type='text' className='text-base p-2' id='lname' />
                    </div>
                    <div>
                        <h2 className='text-base my-2 font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong'> Email </h2>
                        <TextInput placeholder='Email' type='email' className='text-base p-2' id='email' />
                    </div>
                    <div>
                        <h2 className='text-base my-2 font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong'> Username </h2>
                        <TextInput placeholder='super awesome username' type="text" className='text-base p-2' id='username' />
                    </div>
                    <div>
                        <h2 className='text-base my-2 font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong'> Password </h2>
                        <TextInput placeholder='Superawesomepassword' type="password" className='text-base p-2' id='password' />
                    </div>
                    <div>
                        <h2 className='text-base my-2 font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong'> Confirm Password </h2>
                        <TextInput placeholder='Superawesomepassword' type="password" className='text-base p-2' id='confpassword' />
                    </div>
                    <div className="flex justify-end mt-8 space-x-4">
                        <Button onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button color="green" onClick={() => {
                            // Add your save logic logic here
                            setIsOpen(false);
                        }}>
                            Save to database
                        </Button>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    );
}