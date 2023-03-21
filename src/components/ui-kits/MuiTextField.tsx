import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const MuiTextField = styled(TextField)(() => ({
  '& input': {
    height: `1.2rem`
  },
  '& .MuiSelect-select': {
    minHeight: `1.2rem`
  },
  
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: `transparent`
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: `rgb(229,229,229) !important`,
    borderWidth: `3px !important`
  },
  '&:hover fieldset': {
    border: `3px solid rgb(229, 229, 229) !important`,
  },
  // '& .MuiOutlinedInput-root': {
  //   '& input[type=number]': {
  //     MozAppearance: 'textfield',
  //   },
  //   '& input[type=number]::-webkit-outer-spin-button': {
  //     WebkitAppearance: 'none',
  //     margin: 0,
  //   },
  //   '& input[type=number]::-webkit-inner-spin-button': {
  //     WebkitAppearance: 'none',
  //     margin: 0,
  //   },
  // },
}))

export default MuiTextField;
