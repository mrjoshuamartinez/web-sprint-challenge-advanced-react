// write your custom hook here to control your checkout form
import { useState } from "react";

// Build out the logic needed for a form custom hook (see the useForm.js file)
export const useForm = (key, initialValue) => {
    const [values, setValues] = useState(key, initialValue);
    const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    };

    return [values, handleChanges];
};