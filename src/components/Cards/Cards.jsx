import React from 'react'

const Cards = ( {jobDetails} ) => {
  return (
    <div>
        {jobDetails.map((data) => (
                <div key={data.jdUid}>
                    <p>{data.jobDetailsFromCompany} </p>
                </div>
            ))
        }
    </div>
  )
}

export default Cards