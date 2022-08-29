import React from "react";

const Btn = ({ show, onClick, setHover, hover, text, Icon }) => {
  return (
    <div className="">
      {show && (
        <button
          className={`bg-prussian-blue dark:bg-tyrian-purple hover:bg-[#1e4b7c] 
                  transition-colors duration-200 text-white font-mont font-bold
                  lg:p-4 lg:text-3xl
                  md:p-2 md:text-2xl
                  sm:p-4 sm:text-3xl
                  p-2 text-2xl                  
                  ${show ? "block" : "hidden"}`}
          onClick={onClick}
          // onClick={handleSpinClick}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Icon className={`inline mr-2 mb-1 ${hover && "animate-spin"}`} />
          {text}
        </button>
      )}
    </div>
  );
};

export default Btn;
