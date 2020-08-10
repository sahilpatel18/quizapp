import React from "react";

export const Header = ({ count }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1 className='bg-white text-green-900 p-4 rounded-lg shadow-md'>
        Question:{count}
      </h1>
    </div>
  );
};
