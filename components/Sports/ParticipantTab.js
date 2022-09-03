import React from "react";
import CategoryCard from "./CategoryCard";

const ParticipantTab = ({ type, fixtures }) => {
  return (
    <div className="w-9/12 mx-auto mt-4">
      <div>
        {fixtures.map((category, index) => {
          return (
            <CategoryCard
              category={category.category}
              fixtures={category.fixtures}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ParticipantTab;
