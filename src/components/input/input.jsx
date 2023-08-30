import React from "react";

const Input = ({
  width,
  height,
  className,
  type,
  name,
  placeHolder,
  value,
}) => {
  console.log(className, type, name, placeHolder, value);
  return (
    <div>
      <input
        className={
          className +
          `border-none rounded-xl ${width} ${height} bg-white text-backOfficePrimary placeholder-backOfficePrimary text-center text-2xl font-bold italic`
        }
        type={type}
        name={name}
        placeholder={placeHolder}
        value={value}
      />
    </div>
  );
};
export default Input;
