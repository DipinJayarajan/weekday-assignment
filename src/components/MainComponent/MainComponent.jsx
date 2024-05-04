import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "../Filters/Filter";
import Cards from "../Cards/Cards";
import { useAppState } from "../../ContextApi/ContextProvider";

const MainComponent = () => {
  const [jobDetails, setJobDetails] = useState([]);
  const [filteredRoleJobs, setFilteredRoleJobs] = useState([]);
  const [filteredExp, setFilteredExp] = useState([]);
  const [filteredPay, setFilteredPay] = useState([]);

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
      setFilteredRoleJobs(jdList)
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

  const handleRoleChange = (selectedRole) => {
    if (selectedRole === "") {
      setFilteredRoleJobs(jobDetails); // If no role is selected, show all jobs
    } else {
      const filtered = jobDetails.filter(job => job.jobRole === selectedRole);
      setFilteredRoleJobs(filtered); // Filter jobs based on selected role
    }
  };

  const handleExpeChange = (selectedExp) => {
    if (selectedExp === "") {
      setFilteredExp(jobDetails); // If no role is selected, show all jobs
    } else {
      const filtered = jobDetails.filter(job => job.minExp === selectedExp);
      setFilteredExp(filtered); // Filter jobs based on selected role
    }
  };

  const handlePayChange = (selectPay) =>{
    if (selectPay === ""){
      setFilteredPay(jobDetails);
    }else {
      const filtered = jobDetails.filter(job => job.maxJdSalary === setFilteredPay);
      setFilteredPay(filtered); // Filter jobs based on selected role
    }
  }

  return (
    <div>
      <Filter jobDetails={jobDetails} onRoleChange={handleRoleChange} handleExpeChange={handleExpeChange} handlePayChange={handlePayChange}  />
      <Cards jobDetails={filteredJobs} filteredRoleJobs={filteredRoleJobs} />
    </div>
  );
};

export default MainComponent;
