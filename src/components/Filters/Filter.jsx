import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import "./Filter.css"
import { useAppState } from '../../ContextApi/ContextProvider'

const Filter = ({jobDetails, onRoleChange}) => {

  const { searchTerm, setSearchTerm , handleSearchTerm } = useAppState();

  // States for roles
  const [role, setRole] = useState('');

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    onRoleChange(selectedRole); 
  };


  return (
    <div className='filter-main'>
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
      <div>
      <TextField 
      id="outlined-search" 
      label="Search Company" 
      type="search" 
      value={searchTerm}
      onChange={handleSearchTerm}
      />
      </div>
    </div>
  )
}

export default Filter