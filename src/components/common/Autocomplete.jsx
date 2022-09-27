import React from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {Box} from "@mui/material"

//import "./styles.css";
const GooglePlacesAutocompleteComponent = ({ error, ...field }) => {
  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyBG6bUNBCd9TmMpvvYu7Ymj5iHQzo9Pkdk"
        selectProps={{
          ...field,
          isClearable: true,
        }}
      />
      {error && <div style={{ color: "red" }}>{error.message}</div>}
    </div>
  );
};

function AutoComplete1() {
  const { register, control, handleSubmit } = useForm({

  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 4));
  };

  return (
  
        <Box marginBottom={2} minWidth={{xs: 200, sm: 400}}>
      <Controller
        name="location"
        rules={{
          required: "This is a required field"
        }}
        control={control}
        render={({ field, fieldState }) => (
          <GooglePlacesAutocompleteComponent
            {...field}
            error={fieldState.error}
          />
        )}
      />
      </Box>
  );
}

export default AutoComplete1
