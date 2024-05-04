import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import "./Filter.css"
import { useAppState } from '../../ContextApi/ContextProvider'

const Filter = ({jobDetails, onRoleChange}) => {

  const { searchTerm, setSearchTerm , handleSearchTerm, handleExpeChange } = useAppState();

  // States for roles
  const [role, setRole] = useState('');
  const [exp, setExp] = useState('');

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    onRoleChange(selectedRole); 
  };

  const expHandleChange = (event) => {
    const selectExp = event.target.value;
    setExp(selectExp)
    handleExpeChange(selectExp);
  }


  return (
    <div className='filter-main'>
      <div>
      <TextField 
      id="outlined-search" 
      label="Search Company" 
      type="search" 
      value={searchTerm}
      onChange={handleSearchTerm}
      />
      </div>
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <InputLabel id="demo-simple-select-helper-label">Roles</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={role}
          label="Role"
          onChange={handleRoleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {jobDetails.map(job => (
            <MenuItem key={job.jobId} value={job.jobRole}>{job.jobRole}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* min experience */}

      <FormControl sx={{ m: 1, minWidth: 195 }}>
        <InputLabel id="demo-simple-select-helper-label">Min Experience</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={exp}
          label="Experience"
          onChange={expHandleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {jobDetails.map(job => (
            <MenuItem key={job.jobId} value={job.minExp}>{job.minExp}</MenuItem>
          ))}
        </Select>
      </FormControl>

    </div>
  )
}

export default Filter