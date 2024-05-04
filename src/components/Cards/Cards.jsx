import React from "react";
import "./Cards.css";
import { Avatar, Box, Button, Chip, Modal, Typography } from "@mui/material";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'transparent',
//   border: '2px solid #000',
//   // boxShadow: 24,
//   p: 4,
// };


const Cards = ({ jobDetails }) => {

  // States for Modal for job description 

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


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
              <p>{data.companyName}</p>
              <p>{data.jobRole.toUpperCase()} </p>
              <p style={{fontSize:"11px"}}>{data.location.toUpperCase()}</p>
              </div>
            </div>
            <p style={{fontSize:"14px", fontWeight:"400" }}>Estimated Salary: ₹{data.maxJdSalary} to {data.minJdSalary || ""} LPA </p>
            <div>
            <p className="aboutCompany">About Company :</p>
            <p style={{
                display: "-webkit-box",
                WebkitLineClamp: 10,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                position: "relative",
                paddingRight: "1rem"
              }}>
                {data.jobDetailsFromCompany}
                <span style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff)"
                }}></span>
            <Button style={{position:"absolute",top:"85%", right:"40%", zIndex:"30", fontWeight:"600"}}>
              Show More
            </Button>
            {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
              <Box style={{position:"absolute", top:"50%", right:"50%", background:"transparent", }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Job Description
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.jobDetailsFromCompany}
          </Typography>
        </Box>
            </Modal> */}
              </p>
            </div>
            <p style={{fontSize:"14px", color:"#8B8B8B", fontWeight:"700"}}>Minimum Experience</p>
            <p>{data.minExp || "0"} years</p>
          </div>
          <div style={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
          <Button variant="contained" style={{width:"100%",marginTop:"8px",backgroundColor:"rgb(0, 230, 150)", paddingTop:"10px", paddingBottom:"10px"}}>⚡Easy Apply</Button>
          <Button variant="contained" style={{width:"100%",marginTop:"8px",backgroundColor:"rgb(0,150, 250)", paddingTop:"10px", paddingBottom:"10px"}}>Unlock Referrals ask</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
