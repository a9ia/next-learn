'use client'
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles'

const MuiButton = styled(Button)(() => ({
  '&': {
    padding: `6px`,
    height: `35px`,
    width: `35px`,
    minWidth: `0px`
  }
}))

export default MuiButton;
