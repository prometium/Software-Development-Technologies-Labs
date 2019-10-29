import React from 'react';

export default function useForm() {
  const [inputs, setInputs] = React.useState({});

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
