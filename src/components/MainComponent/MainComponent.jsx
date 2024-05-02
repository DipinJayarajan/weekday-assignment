import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filter from '../Filters/Filter'
import Cards from '../Cards/Cards'

const MainComponent = () => {

    const [ jobdetails, setJobDetails ] = useState([])
    
    const fetchJobs = async () => {
        
            const body = JSON.stringify({
                "limit": 10,
                "offset": 0
               });

        try{
            const response = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", body, {
                headers:{
                    "Content-Type": "application/json",
                }
            })

            const data = response.data;
            setJobDetails(data);
        }catch(error){
            console.log(error, "Error Fetching Details")
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                await fetchJobs();
            }catch(error){
                console.log(error)
            }
        }
        fetchData();
    },[])

  return (
    <div>

    </div>
  )
}

export default MainComponent