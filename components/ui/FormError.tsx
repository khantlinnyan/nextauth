import React from "react";

type Props = {
  error: string[];
};

const FormError = ({ error }: Props) => {
  //   if (!error?.length) return null;
  return (
    <div className="p-2">
      {error?.map((err) => (
        <p className="text-sm font-bold mt-2 text-red-400 list-item" key={err}>
          {err}
        </p>
      ))}
    </div>
  );
};

export default FormError;
