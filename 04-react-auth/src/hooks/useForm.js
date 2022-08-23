import { useEffect, useState } from 'react';

function useForm(callback, defaults) {
  const [input, setInput] = useState(defaults);

  useEffect(() => {
    setInput({ ...defaults });
  }, []);

  const handleInputChange = (event) => {
    const name = event.target.name; // last_name
    const value = event.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback(input);
  };

  return {
    input,
    handleInputChange,
    handleSubmit,
  }
}

export default useForm;
