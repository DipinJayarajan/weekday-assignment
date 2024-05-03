import React from "react";
import "./Cards.css";
import { Avatar, Button, Chip } from "@mui/material";

const Cards = ({ jobDetails }) => {
  return (
    <div className="jobDetails-main">
      {jobDetails?.map((data) => (
        <div key={data.jdUid} className="cards-main">
          <Chip
            label="⏳ Posted 10 days ago"
            sx={{
              background: "transparent",
              boxShadow: "0rem 0rem 0.5rem #00000040",
            }}
            size="small"
          />
          <div>
            <div>
              <Avatar aria-label="image"></Avatar>
              <div>
              <p>Weekday</p>
              <p>{data.jobRole} </p>
              <p>{data.location}</p>
              </div>
            </div>
            <p>Estimated Salary: {data.maxJdSalary} to {data.minJdSalary || ""} LPA </p>
            <div>
            <title>About Company :</title>
            <p>{data.jobDetailsFromCompany} </p>
            </div>
            <p>Minimum Experience</p>
            <p>{data.minExp || ""} years</p>
          </div>
          <Button>⚡Easy apply</Button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
