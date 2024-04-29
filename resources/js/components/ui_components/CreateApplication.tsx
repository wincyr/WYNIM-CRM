import { X } from 'lucide-react';
import { ClipboardPlus } from 'lucide-react';
import UploadApplication from '../ui_components/UploadApplication';
import React from 'react'

function CreateApplication() {
    return (
        <div>
            <div>
                <div className='flex justify-between items-center ml-6 mb-8 '>
                    <div className='flex justify-between items-center'>
                        <button className="btn btn-primary text-base-100" onClick={() => (document.getElementById('createApplication') as HTMLDialogElement).showModal()}> Create Application <ClipboardPlus /> </button>
                        <dialog id="createApplication" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl p-8">
                                <UploadApplication />
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

export default CreateApplication