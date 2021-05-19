import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom";

const styleArgument = { fontSize: '20px', color: 'gray' };
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));

const Enput = () => {

  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  var output = [];
  output.push(<p></p>)
  output.push(<TextField id="account" label="Email Address*" variant="outlined" />)
  output.push(<p></p>)
  output.push(<TextField id="pass" label="Password*" type="password" variant="outlined" />)
  output.push(<p></p>)
  output.push(<Button variant="contained" color="primary"><Link to="/index2/">Sign In</Link></Button>)

  return output
}
export default Enput