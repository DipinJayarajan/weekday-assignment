import { TextField } from '@mui/material'
import React, { useState } from 'react'
import "./Filter.css"
import { useAppState } from '../../ContextApi/ContextProvider'

const Filter = () => {

  const { searchTerm, setSearchTerm , handleSearchTerm } = useAppState();

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
    </div>
  )
}

export default Filter