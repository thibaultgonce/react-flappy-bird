import { GLView } from "expo";
import React from "react";

export default ({ createGame, gameSettings, ...props }) => (
  <GLView
    style={{ flex: 1, backgroundColor: "black" }}
    onContextCreate={(context) => createGame(context, gameSettings)}
  />
);
