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
            <div className="jobCardHeader">
              <Avatar style={{marginTop:"15px"}} aria-label="image"></Avatar>
              <div className="cardHeaderDetails">
              <p>Weekday</p>
              <p>{data.jobRole.toUpperCase()} </p>
              <p style={{fontSize:"11px"}}>{data.location.toUpperCase()}</p>
              </div>
            </div>
            <p style={{fontSize:"14px", fontWeight:"400" }}>Estimated Salary: {data.maxJdSalary} to {data.minJdSalary || ""} LPA </p>
            <div>
            <p className="aboutCompany">About Company :</p>
            <p className="companyDescription">{data.jobDetailsFromCompany} </p>
            </div>
            <p style={{fontSize:"14px", color:"#8B8B8B", fontWeight:"700"}}>Minimum Experience</p>
            <p>{data.minExp || ""} years</p>
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
          <Button>⚡Easy apply</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
