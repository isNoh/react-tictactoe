import React from "react";
export function Winner({ winner, gameReset }) {
  return (
    <div className="winner-modal">
      <div style={{ marginTop: "300px" }}>Winner Winner Chicken Dinner!</div>
      <div>『{winner === "x" ? "X" : "O"}』 플레이어의 승리!</div>
      <div>
        <button onClick={gameReset}>다시하기</button>
      </div>
    </div>
  );
}
