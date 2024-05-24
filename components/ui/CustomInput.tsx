import React from "react";
import FormError from "./FormError";

type Props = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  error?: string;
};

const CustomInput = ({ name, type, label, placeholder, error }: Props) => {
  return (
    <div className="mb-2 w-full">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        name={name}
        type={type}
        id={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
      <FormError error={error} />
    </div>
  );
};

export default CustomInput;
