import { Flame } from 'lucide-react';
import { Info } from 'lucide-react';
import React from 'react'

function InfoCards() {
    return (
        <div>
            <div>
                <div className="card w-96 bg-white shadow-xl justify-center items-center text-center" id="schoolinfo">
                    <div className="card-body">
                        <h2 className="card-title"> University of Toronto </h2>
                        <p> 27 King's College Cir, Toronto, ON M5S 1A1, Canada </p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline gap-2 p-4"> Popular <Flame /> </div>
                        </div>
                        <div className="flex justify-center">
                            <a className="btn btn-primary btn-wide mt-4 font-bold text-md" href=""> View Info <Info /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCards