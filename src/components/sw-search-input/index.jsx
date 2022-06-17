import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue',
      color: 'white',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        
        color: 'white',
        
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'purple',
        color: 'white',
      },
    },
    '& .MuiInputBase-inputTypeSearch':{
        color:'white',
        borderColor: 'white',
    },
    '& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root':{
      color: 'white',
    }
  });
export default function CustomizedInputs() {
    return (
        <CssTextField label="Search field" type="search" id="custom-css-outlined-input" />
        
        
    );
}