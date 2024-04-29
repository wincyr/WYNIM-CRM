import { UserRoundPlus } from 'lucide-react';
import { X } from 'lucide-react';
import RegisterCardForm from './RegisterCardForm';
import React from 'react'

function AddAnAdmin() {
    return (
        <div>
            <div>
                <div className='flex justify-between mx-6 mb-4 '>
                    <h1 className='text-4xl font-bold'> Admin Data </h1>
                    <div className='flex justify-between'>
                        <button className="btn btn-primary text-base-100" onClick={() => (document.getElementById('addAdminModal') as HTMLDialogElement).showModal()}> Register an Admin <UserRoundPlus /> </button>
                        <dialog id="addAdminModal" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl p-8">
                                <RegisterCardForm />
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2"> <X /> </button>
                                </form>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAnAdmin