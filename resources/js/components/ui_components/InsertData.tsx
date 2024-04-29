import { X } from 'lucide-react';
import { ClipboardPlus } from 'lucide-react';
import DocumentsInsert from './DocumentsInsert';
import CreateApplication from './CreateApplication';

function InsertData() {
    return (
        <div>
            <div>
                <div className='flex justify-between mx-6'>
                    <h1 className='text-4xl font-bold'> Collection of Documents </h1>
                    <div className='flex justify-between'>
                        <button className="btn btn-primary text-base-100" onClick={() => (document.getElementById('addDocuments') as HTMLDialogElement).showModal()}> Upload Documents <ClipboardPlus /> </button>
                        <dialog id="addDocuments" className="modal">
                            <div className="modal-box w-11/12 max-w-5xl p-8">
                                <DocumentsInsert />
                                <form method="dialog">
                                    <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2"> <X /> </button>
                                </form>
                            </div>
                        </dialog>
                        <CreateApplication />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsertData