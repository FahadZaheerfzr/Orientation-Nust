import {
  faFutbol,
  faPeoplePulling,
  faTableTennisPaddleBall,
  faVolleyball,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";
const ogsFixtures = [
  {
    category: "Races",
    icon: faRunning,
    oneTeam: true,
    fixtures: [
      {
        name: "100m Race",
        date: "6th September",
        time: "18:15",
        detailedTime: "06:15 - 06:25 PM",
        venue: "NBS Ground",
      },
      {
        name: "400m Relay Race",
        date: "6th September",
        time: "18:30",
        detailedTime: "06:30 - 06:45 PM",
        venue: "NBS Ground",
      },
    ],
  },
  {
    category: "Volta Freshies",
    icon: faFutbol,
    showType: true,
    fixtures: [
      {
        home: {
          name: "Ottoman",
          logo: "",
        },
        away: {
          name: "Mughal",
          logo: "",
        },
        date: "6th September",
        time: "20:25",
        detailedTime: "08:25 PM",
        venue: "NBS Ground",
        type: "Match 1",
      },
      {
        home: {
          name: "Khilji",
          logo: "",
        },
        away: {
          name: "Mongols",
          logo: "",
        },
        date: "6th September",
        time: "20:28",
        detailedTime: "08:28 PM",
        venue: "NBS Ground",
        type: "Match 2",
      },
      {
        home: {
          name: "Vikings",
          logo: "",
        },
        away: {
          name: "Romans",
          logo: "",
        },
        date: "6th September",
        time: "20:31",
        detailedTime: "08:31 PM",
        venue: "NBS Ground",
        type: "Match 3",
      },
      {
        home: {
          name: "Mughal",
          logo: "",
        },
        away: {
          name: "Samurai",
          logo: "",
        },
        date: "6th September",
        time: "20:34",
        detailedTime: "08:34 PM",
        venue: "NBS Ground",
        type: "Match 4",
      },
      {
        home: {
          name: "Seljuks",
          logo: "",
        },
        away: {
          name: "Winner 1",
          logo: "",
        },
        date: "6th September",
        time: "20:35",
        detailedTime: "08:35 PM",
        venue: "NBS Ground",
        type: "Match 5",
      },
      {
        home: {
          name: "Winner 2",
          logo: "",
        },
        away: {
          name: "Winner 3",
          logo: "",
        },
        date: "6th September",
        time: "20:38",
        detailedTime: "08:38 PM",
        venue: "NBS Ground",
        type: "Semi-Final 1",
      },
      {
        home: {
          name: "Winner 4",
          logo: "",
        },
        away: {
          name: "Winner 5",
          logo: "",
        },
        date: "6th September",
        time: "20:41",
        detailedTime: "08:41 PM",
        venue: "NBS Ground",
        type: "Semi-Final 2",
      },
      {
        home: {
          name: "Winner SF 1",
          logo: "",
        },
        away: {
          name: "Winner SF 2",
          logo: "",
        },
        date: "6th September",
        time: "20:44",
        detailedTime: "08:44 PM",
        venue: "NBS Ground",
        type: "Final",
      },
    ],
  },
  {
    category: "Volta Alumni",
    showType: true,
    oneTeam: true,
    icon: faFutbol,
    fixtures: [
      {
        name: "Alumni",
        date: "6th September",
        detailedTime: "08:15 PM",
        venue: "NBS Ground",
        type: "Match 1",
      },
      {
        name: "Alumni",
        date: "6th September",
        detailedTime: "08:18 PM",
        venue: "NBS Ground",
        type: "Match 2",
      },
      {
        name: "Alumni",
        date: "6th September",
        detailedTime: "08:21 PM",
        venue: "NBS Ground",
        type: "Match 3",
      },
    ],
  },
  {
    category: "Tug of War",
    showType: true,
    icon: faPeoplePulling,
    fixtures: [
      {
        home: { name: "Freshmen" },
        away: { name: "OC" },
        date: "6th September",
        detailedTime: "08:15 PM",
        time: "21:20",
        venue: "NBS Ground",
        type: "Match 1 - Female",
      },
      {
        home: { name: "Freshmen" },
        away: { name: "OC" },
        date: "6th September",
        detailedTime: "08:18 PM",
        time: "21:20",
        venue: "NBS Ground",
        type: "Match 2 - Male",
      },
      {
        home: { name: "OGs" },
        away: { name: "SOCs" },
        date: "6th September",
        detailedTime: "08:21 PM",
        time: "21:20",
        venue: "NBS Ground",
        type: "Match 1 - Female",
      },
      {
        home: { name: "OGs" },
        away: { name: "SOCs" },
        date: "6th September",
        detailedTime: "08:21 PM",
        time: "21:20",
        venue: "NBS Ground",
        type: "Match 2 - Male",
      },
    ],
  },
  {
    category: "Badminton",
    showType: true,
    fixtures: [
      {
        home: {
          name: "Spartans",
          logo: "",
        },
        away: {
          name: "Mughal",
          logo: "",
        },
        date: "7th September",
        time: "17:15",
        detailedTime: "5:15 - 5:30 PM",
        venue: "Old Gymnasium",
        type: "Match 1",
      },
      {
        home: {
          name: "Ottoman",
          logo: "",
        },
        away: {
          name: "Romans",
          logo: "",
        },
        date: "7th September",
        time: "17:30",
        detailedTime: "5:30 - 5:45 PM",
        venue: "Old Gymnasium",
        type: "Match 2",
      },
      {
        home: {
          name: "Seljuks",
          logo: "",
        },
        away: {
          name: "Mongols",
          logo: "",
        },
        date: "7th September",
        time: "17:45",
        detailedTime: "5:45 - 6:00 PM",
        venue: "Old Gymnasium",
        type: "Match 3",
      },
      {
        home: {
          name: "Khilji",
          logo: "",
        },
        away: {
          name: "Vikings",
          logo: "",
        },
        date: "7th September",
        time: "18:00",
        detailedTime: "6:00 - 6:15",
        venue: "Old Gymnasium",
        type: "Match 4",
      },
      {
        home: {
          name: "Samurai",
          logo: "",
        },
        away: {
          name: "Winner 1",
          logo: "",
        },
        date: "7th September",
        time: "18:15",
        detailedTime: "6:15 - 6:30 PM",
        venue: "Old Gymnasium",
        type: "Match 5",
      },
      {
        home: {
          name: "Winner 2",
          logo: "",
        },
        away: {
          name: "Winner 3",
          logo: "",
        },
        date: "7th September",
        time: "18:30",
        detailedTime: "6:30 - 6:45 PM",
        venue: "Old Gymnasium",
        type: "Match 6 - SF",
      },
      {
        home: {
          name: "Winner 4",
          logo: "",
        },
        away: {
          name: "Winner 5",
          logo: "",
        },
        date: "7th September",
        time: "18:45",
        detailedTime: "6:45 - 7:00 PM",
        venue: "Old Gymnasium",
        type: "Match 7 - SF",
      },
      {
        home: {
          name: "Winner 6",
          logo: "",
        },
        away: {
          name: "Winner 7",
          logo: "",
        },
        date: "7th September",
        time: "19:00",
        detailedTime: "7:00 - 7:30 PM",
        venue: "Old Gymnasium",
        type: "Final (3 sets)",
      },
    ],
  },
];
export default ogsFixtures;
