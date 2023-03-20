'use client'

import { useState } from "react";
import { Select, FormControl, MenuItem, Button, TextField } from "@mui/material"
import { SelectChangeEvent } from '@mui/material/Select'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchInput() {
  const [filter, setFilter] = useState('All Filter');
  const [input, setInput] = useState('');
  const textContent = [
    'All Filter',
    'Addresses',
    'Tokens',
    'Name Tags',
    'Labels',
    'Websites'
  ]
  const handleSelectChange = (event: SelectChangeEvent) => {
    // console.log(event);
    setFilter(event.target.value);
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    console.log(input)
    setInput(event.target.value);
  };
  return (
    <div className="flex">
      {/* <button>{textContent[filter]}</button> */}
      <FormControl sx={{minWidth: 150 }} className="mr-2">
        <Select
          value={filter}
          onChange={handleSelectChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >{textContent.map((value:string, index:number) => {
          return <MenuItem key={index} value={value}>{value}</MenuItem>
        })}</Select>
      </FormControl>
      <TextField
        value={input}
        onChange={handleTextChange}
        label="Search by Address / Txn Hash / Block / Token / Domain Name"
        className="w-[500px]"
      />
      <Button variant="outlined" className="ml-2">
        <SearchIcon/>
      </Button>
    </div>
  )
}