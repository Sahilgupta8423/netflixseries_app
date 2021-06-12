import React, {useState} from "react";
import Card from "./Card";
import Sdata from "./Sdata";

console.log(Sdata);
const ncard = (val, index) => {
  console.log(val);
  console.log(index);
  return (
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
};
// These below are not compponents
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputEvent = (event) => {
    setSearchTerm(event.target.value)
  };
  return (
    <>
      <div className="text-center search">
        <input type="text" onChange={inputEvent} placeholder="Search By Name" />
      </div>
      {Sdata.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (val.sname.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map(ncard)}
    </>
  );
};
export default App;
