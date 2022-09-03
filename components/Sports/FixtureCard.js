import React from "react";

const FixtureCard = ({ fixture }) => {
  console.log("fixture is ", fixture);
  return (
    <div className={`rounded-xl border-2 border-gray-900 
    flex justify-evenly my-2
    p-2`}>
      <div>{fixture.home.name}</div>
      <div>{fixture.away.name}</div>
    </div>
  );
};

export default FixtureCard;
