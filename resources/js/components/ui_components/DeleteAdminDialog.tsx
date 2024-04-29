import { Button, Dialog, DialogPanel } from '@tremor/react';
import React, { ReactNode } from 'react';

export function DeleteAdminDialog({ children }: { children: (params: { toggle: () => void }) => ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            {children({ toggle })}
            <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
                <DialogPanel>
                    <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong"> Permanently Delete Admin? </h3>
                    <p className="mt-2 leading-6 text-tremor-primary text-tremor-content dark:text-dark-tremor-content">
                        Warning! Deleting will permanently remove this user from the database and will be unable to use nor access the WYNIM CRM System
                    </p>
                    <div className="flex justify-end mt-8 space-x-4">
                        <Button onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button color="red" onClick={() => {
                            // Add your delete logic here
                            setIsOpen(false);
                        }}>
                            Proceed
                        </Button>
                    </div>
                </DialogPanel>
            </Dialog>
        </>
    );
}