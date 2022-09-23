import React, { useState } from "react";

const GameSettingsButton = ({ handleOnSettingsChange, defaultSettings }) => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  // position
  const [playerHorizontalPosition, setPlayerHorizontalPosition] = useState(
    defaultSettings.playerHorizontalPosition
  );
  const [playerVerticalPosition, setPlayerVerticalPosition] = useState(
    defaultSettings.playerVerticalPosition
  );

  // dimensions
  const [pipeWidth, setPipeWidth] = useState(defaultSettings.pipeWidth);
  const [pipeHeight, setPipeHeight] = useState(defaultSettings.pipeHeight);
  const [minPipeHeight, setMinPipeHeight] = useState(
    defaultSettings.minPipeHeight
  );
  const [pipeVerticalGap, setPipeVerticalGap] = useState(
    defaultSettings.pipeVerticalGap
  );
  const [groundHeight, setGroundHeight] = useState(
    defaultSettings.groundHeight
  );

  // movement
  const [playerFallSpeed, setPlayerFallSpeed] = useState(
    defaultSettings.playerFallSpeed
  );
  const [playerGravity, setPlayerGravity] = useState(
    defaultSettings.playerGravity
  );
  const [gameSpeed, setGameSpeed] = useState(defaultSettings.gameSpeed);

  // useless
  const [playerMaxVelocity, setPlayerMaxVelocity] = useState(
    defaultSettings.playerMaxVelocity
  );

  return (
    <div
      style={{
        position: "absolute",
        right: "16px",
        top: "16px",
      }}
    >
      {!isSettingsVisible && (
        <button
          onClick={() => setIsSettingsVisible(true)}
          style={{
            padding: 8,
          }}
        >
          Settings
        </button>
      )}
      {isSettingsVisible && (
        <div>
          <div>
            <span>playerHorizontalPosition</span>
            <input
              type={"number"}
              value={playerHorizontalPosition}
              onChange={(e) => setPlayerHorizontalPosition(e.target.value)}
            />
          </div>
          <div>
            <span>playerVerticalPosition</span>
            <input
              type={"number"}
              value={playerVerticalPosition}
              onChange={(e) => setPlayerVerticalPosition(e.target.value)}
            />
          </div>
          <div>
            <span>pipeWidth</span>
            <input
              type={"number"}
              value={pipeWidth}
              onChange={(e) => setPipeWidth(e.target.value)}
            />
          </div>
          <div>
            <span>pipeHeight</span>
            <input
              type={"number"}
              value={pipeHeight}
              onChange={(e) => setPipeHeight(e.target.value)}
            />
          </div>
          <div>
            <span>minPipeHeight</span>
            <input
              type={"number"}
              value={minPipeHeight}
              onChange={(e) => setMinPipeHeight(e.target.value)}
            />
          </div>
          <div>
            <span>pipeVerticalGap</span>
            <input
              type={"number"}
              value={pipeVerticalGap}
              onChange={(e) => setPipeVerticalGap(e.target.value)}
            />
          </div>
          <div>
            <span>groundHeight</span>
            <input
              type={"number"}
              value={groundHeight}
              onChange={(e) => setGroundHeight(e.target.value)}
            />
          </div>
          <div>
            <span>playerFallSpeed</span>
            <input
              type={"number"}
              value={playerFallSpeed}
              onChange={(e) => setPlayerFallSpeed(e.target.value)}
            />
          </div>
          <div>
            <span>playerGravity</span>
            <input
              type={"number"}
              value={playerGravity}
              onChange={(e) => setPlayerGravity(e.target.value)}
            />
          </div>
          <div>
            <span>gameSpeed</span>
            <input
              type={"number"}
              value={gameSpeed}
              onChange={(e) => setGameSpeed(e.target.value)}
            />
          </div>
          <button
            onClick={() => {
              handleOnSettingsChange({
                ...defaultSettings,
                playerHorizontalPosition: playerHorizontalPosition,
                playerVerticalPosition: playerVerticalPosition,
                pipeWidth: pipeWidth,
                pipeHeight: pipeHeight,
                minPipeHeight: minPipeHeight,
                pipeVerticalGap: pipeVerticalGap,
                groundHeight: groundHeight,
                playerFallSpeed: playerFallSpeed,
                playerGravity: playerGravity,
                gameSpeed: gameSpeed,
                playerMaxVelocity: playerMaxVelocity,
              });
              setIsSettingsVisible(false);
            }}
          >
            Validate
          </button>
        </div>
      )}
    </div>
  );
};

export default GameSettingsButton;
