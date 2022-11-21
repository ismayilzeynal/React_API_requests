import React from "react";
import Datas from "../Datas";
import Input from "../Input";
import "./index.scss";

function Home() {

  const [person, setPerson] = React.useState({
    name:"",
    surname: ""
  });

  const [allPeople, setAllPeople] = React.useState([{name: "ismayil", surname: "zeynalov"}]);

  function check()
  {
    console.log(person.name + " " + person.surname);
  }


  return (
    <>
      <div className="half-height half-top">
        <div className='container' >
          <Input person={person} setPerson={setPerson}/>                        

        </div>
      </div>
      <div className="half-height half-bottom">
        <div className='container' onClick={check}>
          <Datas person={person} setPerson={setPerson} allPeople={allPeople} setAllPeople={setAllPeople} />
        </div>
      </div>
    </>
  );
}

export default Home;