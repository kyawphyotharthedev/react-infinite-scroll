import React from "react";

const Loader = () => {
  return (
    <div className="flex gap-2 items-center justify-center h-screen">
      <h2 className=" text-xl">Loading</h2>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
