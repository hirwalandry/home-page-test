import React, { useState, useEffect, useRef } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import FormController from "../components/common/FormController";
import FormModal from "../components/common/FormModal";
import { useStateContext } from "../contexts/ContextProvider";
import { Button, Box } from "@mui/material";
import PlacesAutocomplete, {geocodeByAddress} from "react-places-autocomplete";

// import { loginUser } from "../services/authService";

const countries = [
  {
    value: "United States",
  },
  {
    value: "Rwanda",
  },
  {
    value: "Engalnd",
  },
  {
    value: "Japan",
  },
];
//initial values related to input
const initialValues = {
  pickLocation: "",
  dropLocation: "",
  verhicleType: "",
  bookNow: "",
};

//validation Schema related to input
const validationSchema = Yup.object({
  email: Yup.string().required("required"),
  country: Yup.string().required("required"),
});

//submit method when submit form is perfomed

function AddBookings(props) {
  // const { state } = useLocation();
  const placeInputRef = useRef(null);
  const [address, setAddress] = useState("")
  const [pickAddress, setPickAddress] = useState("")
  const [errors] = useState({});
  const { currentColor } = useStateContext();

  const onSubmit = async (values) => {};
  const btnstyle = { margin: "8px 0" };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  const GooglePlacesAutocompleteComponent = ({  ...field }) => {
    console.log(field)
    return (
      <div>
       
        {/* {error && <div style={{ color: "red" }}>{error.message}</div>} */}
      </div>
    );
  };
  const handleSelect = () => {

  }
  return (
    <FormModal title="Add Bookings" link="/" buttonName="Book now">
      {/* Formik callback method that takes formik as argument and perfom some login on Form componet */}
      <Box>
        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* FormController Component takes attribute to specify the specified input */}
<PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>{({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
  <div>
  <FormController {...getInputProps({control: "input", type: "text", label: "pick location", placeholder: "select pick country"})} />
  
  <div>{loading ? <div>...loading</div> : ""}
  
  {suggestions.map(suggestion => {
    // const style = {}

    return (
      <div key={suggestion.description} {...getSuggestionItemProps({})}>{suggestion.description}</div>
    )
  })}</div>
  </div>
)}</PlacesAutocomplete>
<PlacesAutocomplete value={pickAddress} onChange={setPickAddress} onSelect={handleSelect}>{({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
  <Box>

  <FormController {...getInputProps({control: "input", type: "text", label: "drop location", placeholder: "select drop country"})} />
  <Box>{loading ? <Box>...loading</Box> : ""}
  
  {suggestions.map(suggestion => {
    // const style = {}

    return (
      <Box key={suggestion.description} {...getSuggestionItemProps({})}>{suggestion.description}</Box>
    )
  })}</Box>
  </Box>
)}</PlacesAutocomplete>
          <FormController
            control="input"
            type="text"
            label="pick location"
            id="pickLocation"
            name="pickLocation"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.pickLocation}
            
     
            errors={
              (formik.touched.email && formik.errors.email) ||
              (formik.touched.email && errors.email)
            }
          />
          {/* <FormController
            control="input"
            type="text"
            label="Select Drop Country"
         
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            sx={{ marginTop: "10px", width: "100%" }}
            fullWidth
            value={formik.values.dropLocation}
            className="form-control"
            errors={
              (formik.touched.email && formik.errors.email) ||
              (formik.touched.email && errors.email)
            }
          /> */}

          <Box sx={{ display: "flex", width: "100%" }}>
            <FormController
              control="select"
              type="text"
              label="Select Vehicle type"
              options={countries}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.initialValues.verhicleType}
              className="form-control"
              fullWidth
              sx={{ marginRight: "10px", width: "98%" }}
              errors={
                (formik.touched.email && formik.errors.email) ||
                (formik.touched.email && errors.email)
              }
            />

            <FormController
              control="select"
              type="text"
              label="Book Now"
              options={countries}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.initialValues.bookNow}
              fullWidth
              className="form-control"
              errors={
                (formik.touched.email && formik.errors.email) ||
                (formik.touched.email && errors.email)
              }
            />
          </Box>
         
        </form>
      </Box>

      {/* Form */}
    </FormModal>
  );
}

export default AddBookings;
