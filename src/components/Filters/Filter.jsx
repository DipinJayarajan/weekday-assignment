import { TextField } from '@mui/material'
import React, { useState } from 'react'
import "./Filter.css"
import { useAppState } from '../../ContextApi/ContextProvider'

const Filter = ({jobDetails}) => {

  // const [ searchTerm, setSearchTerm ] = useState("")

  // const handleSearchTerm = (event) => {
  //   setSearchTerm(event.target.value)
  // }

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