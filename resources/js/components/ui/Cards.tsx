
function Cards() {
  return (
    <div>
      <div className='grid grid-cols-3 gap-8 justify-between items-center max-h-screen p-12 flex-col max-w-full'>
        <div>
          <div className="card w-full bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title"> Accepted </h2>
              <p> View the data for the Accepted applicants here </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary mt-4 text-base-100"> View Accepted </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-full bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title"> Rejected </h2>
              <p> View the data for the Rejected applicants here </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary mt-4 text-base-100"> View Rejected </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-full bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title"> Pending </h2>
              <p> View the data for the Pending applicants here </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary mt-4 text-base-100"> View Pending </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards