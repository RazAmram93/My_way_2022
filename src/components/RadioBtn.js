import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioBtn(props) {

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Location</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel onClick={(e)=>{props.setLocation(e.target.value)}}  value="Home" control={<Radio />} label="Home" />
        <FormControlLabel onClick={(e)=>{props.setLocation(e.target.value)}} value="Friend" control={<Radio />} label="Friend" />
      </RadioGroup>
    </FormControl>
  );
}