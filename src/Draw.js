import React from "react";

export function Draw({ gameReset }) {
  return (
    <div className="winner-modal">
      <div style={{ marginTop: "300px" }}>무승부 입니다!</div>
      <div> 아래버튼을 눌러 재시작해주세요!</div>
      <div>
        <button onClick={gameReset}>다시하기</button>
      </div>
    </div>
  );
}
