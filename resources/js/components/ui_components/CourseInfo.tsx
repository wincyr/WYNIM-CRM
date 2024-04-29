import { BriefcaseBusiness } from 'lucide-react';
import { FileCheck2 } from 'lucide-react';

function CourseInfo() {
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl" id="courseinfo">
                    <div className="card-body">
                        <h2 className="card-title">
                            Bachelor of Science in Computer Science
                        </h2>
                        <h2 className='text-md font-bold'> University of Waterloo </h2>
                        <p> 4 Year Post-Graduate Course </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline gap-2 p-4"> High Demand <BriefcaseBusiness /> </div>
                        </div>
                        <div className='divider'></div>
                        <div className='grid grid-flow-row'>
                            <div>
                                <h2 className='font-bold'> Location : </h2>
                                <p> 200 University Ave W, Waterloo, ON N2L 3G1, Canada </p>
                            </div>
                            <div className='mt-4'>
                                <h2 className='font-bold'> Duration : </h2>
                                <p> 36 Months </p>
                            </div>
                            <div className='mt-4'>
                                <h2 className='font-bold'> Gross Tuition Fee : </h2>
                                <p> $20,000 CAD / Year </p>
                            </div>
                            <div className="flex justify-center">
                                <a className="btn btn-primary btn-wide mt-4 font-bold text-md" href=""> Create Application <FileCheck2 /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseInfo