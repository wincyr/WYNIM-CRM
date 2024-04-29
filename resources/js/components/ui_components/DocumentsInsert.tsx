import { TextInput } from '@tremor/react';
import { useState } from 'react';

function DocumentsInsert() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    // ... add more states for each file input

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Handle form submission here
    };
    return (
        <div>
            <div className='justify-start mt-4 mb-6 gap-4'>
                <h1 className='text-4xl font-bold text-center items-center'> Upload Documents </h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="grid h-20 flex-grow">
                    <h2 className='text-base font-bold mb-2'> Full Name </h2>
                    <TextInput
                        placeholder='Type here..'
                        type='text'
                        id="fullname"
                        className='text-base p-2'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div className="my-4">
                    <h2 className='text-base font-bold mb-2'> Email </h2>
                    <TextInput
                        placeholder='Type here..'
                        type='email'
                        id="email"
                        className='text-base p-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
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
                <div className='mt-8 mb-2 flex justify-center'>
                    <button className="btn btn-wide btn-primary text-base"> Save </button>
                </div>
            </form>
        </div>
    )
}

export default DocumentsInsert