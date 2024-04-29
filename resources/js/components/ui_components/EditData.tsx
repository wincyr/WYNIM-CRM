import { Button, Dialog, DialogPanel } from '@tremor/react';
import React, { ReactNode } from 'react';
import { TextInput } from '@tremor/react';

export function EditData({ children }: { children: (params: { toggle: () => void }) => ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            {children({ toggle })}
            <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
                <DialogPanel>
                    <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong"> Edit Data  </h3>
                    <p className="mt-2 leading-6 text-tremor-primary text-tremor-content dark:text-dark-tremor-content">
                        Carefully fill out the necessary details needed to update the data
                    </p>
                    <div className='divider'></div>
                    <div className="grid h-20 flex-grow">
                        <h2 className='text-base font-bold mb-2'> Full Name </h2>
                        <TextInput placeholder='Type here..' type='text' id="fullname" className='text-base p-2' />
                    </div>
                    <div className='my-4'>
                        <h2 className='text-base font-bold mb-2'> Resume </h2>
                        <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                    </div>
                    <div className='my-4'>
                        <h2 className='text-base font-bold mb-2'> Transcript of Records </h2>
                        <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                    </div>
                    <div className='my-4'>
                        <h2 className='text-base font-bold mb-2'> Diploma </h2>
                        <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                    </div>
                    <div className='my-4'>
                        <h2 className='text-base font-bold mb-2'> Passport </h2>
                        <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                    </div>
                    <div className='my-4'>
                        <h2 className='text-base font-bold mb-2'> English Proficiency Test Result </h2>
                        <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                    </div>
                    <div className='my-4'>
                        <h2 className='text-base font-bold mb-2'> School Application Fee Receipt </h2>
                        <input type="file" className="file-input file-input-bordered w-full max-w-full" />
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