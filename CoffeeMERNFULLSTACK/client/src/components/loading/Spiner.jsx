import React, { useEffect, useState } from "react";

const Spiner = () => {
  const [text, setText] = useState("");
  const [showImg, setShowImg] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowImg(false);
      setText("I wanted for 3 second to be loaded did you see the spiner?");
    }, 3000);
  }, []);

  return <div>{showImg ? <img src="./sp.svg" alt="" /> : <h3>{text}</h3>}</div>;
};

export default Spiner;
