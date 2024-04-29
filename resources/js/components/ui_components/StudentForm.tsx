import { CourseSelect } from './CourseSelect'
import { SchoolSelect } from './SchoolSelection'
import { TextInput } from '@tremor/react';
import { EducationSelect } from './EducationSelect';
import { useState } from 'react';
import React from 'react'


function StudentForm() {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [nationality, setNationality] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Handle form submission here
    };
    return (
        <div>
            <div className='justify-start mt-4 mb-6 gap-4'>
                <h1 className='text-4xl font-bold text-center items-center'> Add Applicant </h1>
                <p className='mt-4 text-center items-center'> Fill out the necessary applicant details </p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex w-full gap-12 mb-8">
                    <div className="grid h-20 flex-grow">
                        <h2 className='text-base font-bold mb-2'> First Name </h2>
                        <TextInput
                            placeholder='Type here..'
                            type='text'
                            id="fname"
                            className='text-base p-2'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="grid h-20 flex-grow">
                        <h2 className='text-base font-bold mb-2'> Middle Name </h2>
                        <TextInput
                            placeholder='Type here..'
                            type='text'
                            id="mname"
                            className='text-base p-2'
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                        />
                    </div>
                </div>
                <div className='mt-8'>
                    <h2 className='text-base font-bold mb-2'> Last Name </h2>
                    <TextInput
                        placeholder='Type here..'
                        type='text'
                        id="lname"
                        className='text-base p-2'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='mt-8'>
                    <h2 className='text-base font-bold mb-2'> Birthday </h2>
                    <TextInput
                        placeholder='Type here..'
                        type='text'
                        id="bday"
                        className='text-base p-2'
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                </div>
                <div className='mt-8'>
                    <h2 className='text-base font-bold mb-2'>  Nationality </h2>
                    <TextInput
                        placeholder='Type here..'
                        type='text'
                        id="nationality"
                        className='text-base p-2'
                        value={nationality}
                        onChange={(e) => setNationality(e.target.value)}
                    />
                </div>
                <div className='mt-8'>
                    <EducationSelect />
                </div>
                <div className='mt-8'>
                    <h2 className='text-base font-bold mb-2'> Email </h2>
                    <TextInput
                        placeholder='Type here..'
                        type='text'
                        id="email"
                        className='text-base p-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mt-8 mb-5' id='genderselect'>
                    <h2 className='text-base font-bold mb-2'> Select Gender </h2>
                    <div className='flex gap-12 mt-4 mb-6'>
                        <label className="label cursor-pointer gap-4">
                            <span className="label-text"> Female </span>
                            <input
                                type="radio"
                                id='female'
                                name="gender"
                                className="radio checked:bg-red-500"
                                checked={gender === 'female'}
                                onChange={() => setGender('female')}
                            />
                        </label>
                        <label className="label cursor-pointer gap-4">
                            <span className="label-text"> Male </span>
                            <input
                                type="radio"
                                id='male'
                                name="gender"
                                className="radio checked:bg-blue-500"
                                checked={gender === 'male'}
                                onChange={() => setGender('male')}
                            />
                        </label>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-12 justify-between items-center'>
                    <SchoolSelect />
                    <CourseSelect />
                </div>
                <div className='mt-24 mb-2 flex justify-center'>
                    <button className="btn btn-wide btn-primary text-base"> Save information </button>
                </div>
            </form>
        </div>
    )
}

export default StudentForm