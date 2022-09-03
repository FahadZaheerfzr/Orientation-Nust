import React from "react";
import FixtureCard from "./FixtureCard";

const CategoryCard = ({ category, fixtures }) => {
  console.log("category is ", category);
  return (
    <div className="border-2 px-8 py-4 rounded-lg my-4">
      <div className="flex justify-center text-3xl font-montserrat ">
        {category}
      </div>
      {fixtures.map((fixture, index) => {
        return <FixtureCard fixture={fixture} key={index} />;
      })}
    </div>
  );
};

export default CategoryCard;

/*  bigger 2 arrays of participants
    inside each array are category objects

    each category object has a category and an array of fixtures

    array of fixtures has objects with team 
    names and logos and fixture details

*/
