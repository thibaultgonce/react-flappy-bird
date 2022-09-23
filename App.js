import * as React from "react";
import { useEffect, useState } from "react";
import { PixelRatio, Text, TouchableWithoutFeedback, View } from "react-native";

import DisableBodyScrollingView from "./components/DisableBodyScrollingView";
import ExpoButton from "./components/ExpoButton";
import GithubButton from "./components/GithubButton";
import KeyboardControlsView from "./components/KeyboardControlsView";
import logyo from "./components/logyo";
import Game from "./src/game";
import FlappyGLView from "./components/FlappyGLView";
import GameSettingsButton from "./components/GameSettingsButton";

logyo("https://twitter.com/baconbrix");

const scale = PixelRatio.get();

console.log("scale", scale);

const App = ({ style, ...props }) => {
  const [game, setGame] = useState();
  const [score, setScore] = useState(0);
  const [gameSettings, setGameSettings] = useState({
    // position
    playerHorizontalPosition: 100 * scale,
    playerVerticalPosition: 200 * scale,

    // dimensions
    pipeWidth: 80 * scale,
    pipeHeight: 500 * scale,
    minPipeHeight: 50 * scale,
    pipeVerticalGap: 190 * scale, //180 is pretty legit
    groundHeight: 100 * scale,

    // movement
    playerFallSpeed: 8 * scale, //* movFactor,
    playerGravity: 0.4 * scale, //* movFactor * 3,
    gameSpeed: 40 * 0.25,

    // useless
    playerMaxVelocity: -3 * scale,
  });

  const [gameContext, setGameContext] = useState();

  const createGame = (context, gameSettings) => {
    if (context) {
      setGameContext(context);
      const game = new Game(context, gameSettings);
      game.onScore = (score) => setScore(score);
      setGame(game);
    }
  };

  useEffect(() => {
    console.log("gameSettings : ", gameSettings);
    game?.setSettings(gameSettings);
  }, [gameSettings]);

  return (
    <View
      style={[{ width: "100vw", height: "100vh", overflow: "hidden" }, style]}
    >
      <DisableBodyScrollingView>
        <KeyboardControlsView
          onKeyDown={({ code }) => {
            if (game) {
              if (code === "Space") {
                game.onPress();
              }
            }
          }}
        >
          <GameSettingsButton
            handleOnSettingsChange={(s) => setGameSettings(s)}
            defaultSettings={gameSettings}
          />
          <TouchableWithoutFeedback onPressIn={() => game?.onPress()}>
            <FlappyGLView createGame={createGame} gameSettings={gameSettings} />
          </TouchableWithoutFeedback>

          <Score>{score}</Score>
        </KeyboardControlsView>
      </DisableBodyScrollingView>
      <ExpoButton />
      <GithubButton />
    </View>
  );
};

const Score = ({ children }) => (
  <Text
    style={{
      position: "absolute",
      left: "16px",
      top: "16px",
      textAlign: "center",
      color: "white",
      fontSize: 48,
      userSelect: "none",
    }}
  >
    {children}
  </Text>
);

export default App;
