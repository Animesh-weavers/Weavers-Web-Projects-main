import React from "react";

const CustomInput = React.forwardRef((props, ref) => {
  return (
    <>
      <input {...props} ref={ref} />
    </>
  );
});

export default CustomInput;
