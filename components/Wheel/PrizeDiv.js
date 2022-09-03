import React from "react";

const PrizeDiv = ({ spinDone, hideOnMobile }) => {
  return (
    <div
      className={`md:py-0 py-4 md:w-full sm:w-3/4 w-full my-4 md:my-0
    ${hideOnMobile ? "hidden md:flex" : "flex md:hidden"}`}
    >
      <div
        className={`text-base sm:text-xl md:text-base lg:text-xl
        bg-tyrian-purple dark:bg-ultra-red
        rounded-xl text-white font-mont text-center p-4`}
      >
        <div className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl mb-2 font-montserrat">
          OG Activities
        </div>
        Orientation Guides will do some fun activities with the freshmen
<<<<<<< HEAD
        students. Spin the wheel to find out which one you'll be doing!
=======
        students. Spin the wheel to find out which one you&apos;ll be doing!
>>>>>>> 07bf41de4407a8a473b49c8de655d7f35c958705
      </div>
    </div>
  );
};

export default PrizeDiv;
