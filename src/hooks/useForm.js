import React from "react";

export default function useForm(initialState = {}) {
  const [inputs, setInputs] = React.useState(initialState);

  const handleChange = event => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
  };

  return {
    inputs,
    handleChange
  };
}
