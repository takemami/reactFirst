/*eslint  react-hooks/exhaustive-deps:off*/
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlg, setfaceShowFlg] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlg = () => {
    setfaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlg || setfaceShowFlg(true);
    } else {
      faceShowFlg && setfaceShowFlg(false);
    }
  }, [num]);

  return (
    <>
      {/* React.Fragment */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlg}>on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>( ^ ^ )</p>}
    </>
  );
};

export default App;
