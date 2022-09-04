import React, { useState } from "react";
import Layout from "../components/Layout";
import ParticipantTab from "../components/Sports/ParticipantTab";
import universityFixtures from "../util/fixtures_uni";
import ogsFixtures from "../util/fixtures_ogs";

const Sports_Fest = () => {
  // true if ogs are selected
  const [selectedParticipant, setSelectedParticipant] = useState(true);
  return (
    <Layout title={"Sports Fest"}>
      <div className="flex flex-col mt-20">
        <div className="flex justify-center font-vogue font-bold text-7xl mb-6">
          Sports Fest
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center text-4xl font-montserrat">
            Fixtures
          </div>
          <div className="flex flex-row justify-evenly mt-6">
            <button
              className={` text-white px-4 py-2 rounded-t-xl text-2xl font-mont w-80
              ${selectedParticipant ? "bg-tyrian-purple" : "bg-ultra-red"}`}
              onClick={() => {
                setSelectedParticipant(true);
              }}
            >
              Orientation Guides
            </button>

            <button
              className={`text-white px-4 py-2 rounded-t-xl text-2xl font-mont w-80
              ${selectedParticipant ? "bg-ultra-red" : "bg-tyrian-purple"}`}
              onClick={() => {
                setSelectedParticipant(false);
              }}
            >
              Inter-University
            </button>
          </div>
        </div>

        <div className="bg-blue-700">
          {selectedParticipant ? (
            <ParticipantTab type={true} fixtures={ogsFixtures} />
          ) : (
            <ParticipantTab fixtures={universityFixtures} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Sports_Fest;