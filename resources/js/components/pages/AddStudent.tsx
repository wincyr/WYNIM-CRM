import Navbar from '../ui/Navbar'
import StudentForm from '../ui_components/StudentForm'

function AddStudent() {
  return (
    <div>
      <div>
        <Navbar />
        <div className='justify-start mt-12 mb-12 gap-4'>
          <h1 className='text-4xl font-bold'> Add Applicant </h1>
          <p className='mt-4'> Fill out the necessary applicant details </p>
        </div>
        <div>
          <StudentForm />
        </div>
      </div>
    </div>
  )
}

export default AddStudent