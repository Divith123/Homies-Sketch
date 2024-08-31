import React from "react";
import ReactDOM from "react-dom/client";

import Linkees, { CHANNEL_TYPES } from "linkees";

import "./css/normalize.css";

const items = [
  {
    title: "Website",
    subtitle: "Look at my work!",
    type: CHANNEL_TYPES.WEBSITE,
    link: "https://divith-portfolio.vercel.app", //your personal website or portfolio  link
  },
  {
    title: "GitHub",
    subtitle: "@ninjaonsteroids | 🏡 to all my open-source projects",
    type: CHANNEL_TYPES.GITHUB,
    link: "https://github.com/ninjaonsteroids", //Github Profile link
  },
  {
    title: "Instagram",
    subtitle: "@ninjaonsteroids |  Shots of my life 🙂",
    type: CHANNEL_TYPES.INSTAGRAM,
    link: "https://instagram.com/ninjaonsteroids", //instagram profile link
  },
  {
    title: "Twitter",
    subtitle: "@ninjaonsteroids | 😉",
    type: CHANNEL_TYPES.TWITTER,
    link: "https://twitter.com/ninjaonsteroids", // twitter profile link
  },
  {
    title: "LinkedIn",
    subtitle: "Know more about my profession 👨‍💼",
    type: CHANNEL_TYPES.LINKEDIN,
    link: "https://www.linkedin.com/in/ninjaonsteroids/", // linkedin
  },
  {
    title: "YouTube",
    subtitle: "ninjaonsteroids | Official channel of mine",
    type: CHANNEL_TYPES.YOUTUBE,
    link: "https://www.youtube.com/channel/ninjaonsteroids", //youtube channel link
  },

  {
    title: "Dribbble",
    subtitle: "@ninjaonsteroids| shots of dezigns ",
    type: CHANNEL_TYPES.DRIBBLE,
    link: "https://dribbble.com/virtuonic", // Dribbble profile link
  },
  {
    title: "Telegram",
    subtitle: "@ninjaonsteroids | Chat with me instantly ",
    type: CHANNEL_TYPES.TELEGRAM,
    link: "https://telegram.me/ninjaonsteroids", //Telegram Pofile
  },
];

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement)?.render(
    <React.StrictMode>
      <Linkees cardItems={items} name={"ninjaonsteroids"} />{" "}
      {/* headerAvatar={'any image url'}*/}
    </React.StrictMode>
  );
}
