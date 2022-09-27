import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useField } from "formik";


function Input({ font, label, name, errors, ...rest }) {
//  const [field] = useField(rest)
//  console.log(field)
  
  return (
    <Box marginBottom={2} minWidth={{xs: 200, sm: 400}}>
      <TextField
  // {...field}
        {...rest}
        id={name}
        label={label}
        name={name}
        variant="standard"
        fullWidth
      />
      {errors && <Box className="alert alert-warning">{errors}</Box>}
    </Box>
  );
}

export default Input;
