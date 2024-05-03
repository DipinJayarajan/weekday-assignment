import React from 'react'
import "./Cards.css"

const Cards = ( {jobDetails} ) => {
  return (
    <div className='jobDetails-main'>
        {jobDetails.map((data) => (
                <div key={data.jdUid} className='cards-main'>
                    {/* <p>{data.jobDetailsFromCompany} </p> */}
                </div>
            ))
        }
    </div>
  )
}

export default Cards