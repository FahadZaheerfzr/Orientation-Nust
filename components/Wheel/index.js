import React, { useState, useEffect } from "react";
import { Wheel } from "react-custom-roulette";
import { TbFidgetSpinner } from "react-icons/tb";
import { IoReload } from "react-icons/io5";
import PrizeDiv from "./PrizeDiv";
import Btn from "./Btn";
import activities from "../../util/activities.js";
import { useTheme } from "next-themes";

let spinCount = 0;

const colors = [];
colors["tyrianPurple"] = "rgb(114, 2, 64)";
colors["ultraRed"] = "rgb(242, 110, 131)";
colors["palePink"] = "rgb(249, 216, 215)";
colors["lapisLazuli"] = "rgb(18, 98, 158)";
colors["prussianBlue"] = "rgb(17, 46, 73)";

const Spinner = () => {
  let data = [...activities];
  const { theme } = useTheme();

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [spinDone, setSpinDone] = useState(false);
  const [hover, setHover] = useState(false);
  const [selected, setSelected] = useState(() => {
    let array = [];
    for (let i = 0; i < 10; i++) {
      let random = data.splice(Math.floor(Math.random() * data.length), 1);
      // let random = data.splice(i[0], 1);
      array.push(random[0]);
    }
    return array;
  });

  const handleSpinClick = () => {
    // console.log("handling spin click");
    if (spinCount === 5) {
      alert("You are out of spins!!!");
      return;
    }
    const prizeIndex = Math.floor(Math.random() * selected.length);
    setPrizeNumber(selected[prizeIndex].option);
    // console.log("winning number is", selected[prizeIndex].option);
    setMustSpin(true);
    spinCount++;
    // console.log("SPIN COUNT IS ", spinCount);
  };

  const onFinishedSpinning = () => {
    // console.log("running onFinishedSpinning");
    const randomIndex = selected.findIndex((x) => x.option === prizeNumber);
    const newNumber = data.splice(
      Math.floor(Math.random() * data.length),
      // 0,
      1
    )[0];
    setSelected((prevState) => {
      return [
        ...prevState.slice(0, randomIndex),
        newNumber,
        ...prevState.slice(randomIndex + 1),
      ];
    });
    setSpinDone(false);
  };

  return (
    <>
      <div className="flex flex-col pb-10">
        <div className="flex text-prussian-blue dark:text-tyrian-purple justify-center text-5xl sm:text-7xl font-vogue font-bold pb-2 md:pb-10">
          Spinner
        </div>
        <div className="flex flex-col md:flex-row justify-evenly ">
          <div className="flex flex-col items-center justify-center sm:p-0 p-2">
            <PrizeDiv prize={prizeNumber} hideOnMobile={false} />
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={selected.findIndex((x) => x.option === prizeNumber)}
              data={selected}
              onStopSpinning={() => {
                setMustSpin(false);
                setSpinDone(true);
              }}
              backgroundColors={
                theme === "dark"
                  ? [colors.prussianBlue, colors.palePink]
                  : [colors.tyrianPurple, colors.palePink]
              }
              textColors={
                theme === "dark"
                  ? ["white", colors.tyrianPurple]
                  : ["white", colors.prussianBlue]
              }
              outerBorderColor={
                theme === "dark" ? colors.tyrianPurple : colors.prussianBlue
              }
              outerBorderWidth={5}
              // innerRadius={10}
              // innerBorderColor={
              //   theme === "dark" ? colors.tyrianPurple : colors.prussianBlue
              // }
              // innerBorderWidth={2}
              radiusLineColor={
                theme === "dark" ? colors.tyrianPurple : colors.prussianBlue
              }
              radiusLineWidth={2}
              fontSize={15}
              textDistance={50}
              spinDuration={1}
            />
            <div
              className={`flex flex-col items-center text-center justify-center 
            text-white font-montserrat my-8
            lg:p-4 lg:text-2xl
            md:p-2 md:px-4
            p-4 text-xl
            md:my-4
            dark:bg-prussian-blue bg-tyrian-purple rounded-lg`}
            >
              {spinDone ? (
                <div className="">
                  Your Activity:{" "}
                  <span className="italic text-2xl lg:text-3xl">
                    {prizeNumber}
                  </span>
                </div>
              ) : (
                <div className="">Spin to get an exciting activity!</div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/3 ">
            <div className="my-auto">
              <PrizeDiv prize={prizeNumber} hideOnMobile={true} />
            </div>
            <div className="mt-auto mb-4">
              <Btn
                show={!spinDone}
                onClick={handleSpinClick}
                hover={hover}
                setHover={setHover}
                Icon={TbFidgetSpinner}
                text="Spin!"
              />

              <Btn
                show={spinDone}
                onClick={onFinishedSpinning}
                hover={hover}
                setHover={setHover}
                Icon={IoReload}
                text="Spin Again!"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
