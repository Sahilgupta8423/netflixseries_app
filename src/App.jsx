import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const ncard = (val) => {
  return (
    <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
};
// These below are not compponents
const App = () => {
  return <>{Sdata.map(ncard)}</>;
};
export default App;
