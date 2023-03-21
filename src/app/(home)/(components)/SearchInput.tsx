'use client'

import { useState } from "react";
import { MenuItem } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import MuiButton from "@/components/ui-kits/MuiButton";
import MuiTextField from "@/components/ui-kits/MuiTextField";

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
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    setFilter(event.target.value);
  };
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    // console.log(input)
    setInput(event.target.value);
  };
  const handleButton = () => {
    console.log(input)
  }
  return (
    <div className="flex bg-white rounded-xl h-[45px] items-center px-2">
      {/* <button>{textContent[filter]}</button> */}
      {/* <FormControl sx={{minWidth: 120 }} className="mr-2 max-md:hidden" size="small">
        
      </FormControl> */}
      <MuiTextField
          select
          value={filter}
          size="small"
          onChange={handleSelectChange}
          className="mr-1 min-w-[128px] max-md:hidden"
        >
          {textContent.map((value:string, index:number) => {
            return <MenuItem key={index} value={value}>{value}</MenuItem>
          })}
        </MuiTextField>
      <MuiTextField
        value={input}
        onChange={handleTextChange}
        placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
        className="flex-grow"
        size="small"
      />
      <MuiButton variant="contained" className="ml-2" onClick={handleButton} >
        <SearchIcon/>
      </MuiButton>
    </div>
  )
}