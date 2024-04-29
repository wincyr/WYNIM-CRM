import { UserRoundPlus } from 'lucide-react';
import StudentForm from '../ui_components/StudentForm'
import { X } from 'lucide-react';

function Heading() {

  return (
    <div>
      <div className='flex justify-between items-center mx-6 mb-8 '>
        <h1 className='text-4xl font-bold'> Dashboard </h1>
        <div className='flex justify-between'>
          <button className="btn btn-primary text-base-100" onClick={() => (document.getElementById('addStudentModal') as HTMLDialogElement).showModal()}> Add Applicant <UserRoundPlus /> </button>
          <dialog id="addStudentModal" className="modal">
            <div className="modal-box w-11/12 max-w-5xl p-12">
              <StudentForm />
              <form method="dialog">
                <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2"> <X /> </button>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  )
}

export default Heading