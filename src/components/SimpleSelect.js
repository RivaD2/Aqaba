import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = props => {
  const classes = useStyles();
  const [size, setSize] = useState('');
  const onChange = e => {
    setSize(e.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={size}
          onChange={onChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
           {props.items.map(item => (
             <MenuItem value={item}>{item}</MenuItem>
           ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SimpleSelect;