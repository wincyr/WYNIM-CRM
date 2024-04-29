import Navbar from '../ui/Navbar'
import SearchFunction from '../ui_components/SearchFunction'
import InfoCards from '../ui_components/InfoCards'
import CourseInfo from '../ui_components/CourseInfo';
import React from 'react'

function ProgramsAndSchools() {
  return (
    <div>
      <Navbar />
      <SearchFunction />
      <div className='grid grid-cols-4 gap-12 mx-6'>
        <InfoCards />
        <CourseInfo />
      </div>
    </div>
  )
}

export default ProgramsAndSchools