import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../Filters/Filter";
import Cards from "../Cards/Cards";
import { useAppState } from "../../ContextApi/ContextProvider";

const MainComponent = () => {
  const [jobDetails, setJobDetails] = useState([]);

  const { searchTerm } = useAppState();

  const fetchJobs = async () => {
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    try {
      const response = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { jdList } = response.data;

      setJobDetails(jdList);
    } catch (error) {
      console.log(error, "Error Fetching Details");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchJobs();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredJobs = jobDetails.filter(job => {
    return job.companyName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <Filter jobDetails={jobDetails} />
      <Cards jobDetails={filteredJobs} />
    </div>
  );
};

export default MainComponent;
