import React from 'react'
import './index.scss';

function Input(props) {

  const tempPerson = {
    name: "",
    surname: ""
  }

  function OccNameValue(e) {
    tempPerson.name = e.target.value;
  }
  function OccSurnameValue(e) {
    tempPerson.surname = e.target.value;
  }

  function addNewPerson() {
    props.setPerson(tempPerson);
    postToAPI(props.person);
  }

  function postToAPI(obj) {
    fetch('https://636398d98a3337d9a2e1d68d.mockapi.io/jirono/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
  }


  return (
    <>
      <div className='inputs-area'>
        <input placeholder='Name' onChange={OccNameValue}></input>
        <input placeholder='Surname' onChange={OccSurnameValue}></input>
        <button onClick={addNewPerson}>Add</button>

      </div>
    </>
  )
}

export default Input