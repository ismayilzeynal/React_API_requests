import React from 'react'
import './index.scss'

function Datas(props) {

  // const


  React.useEffect(() => {
    const fetchedData = fetch('https://636398d98a3337d9a2e1d68d.mockapi.io/jirono/users');
    fetchedData.then(response => response.json())
      .then(data => props.setAllPeople(data));
    console.log("data came here");                     // silmek
  }, [])




  return (
    <>
      <div className='datas-printed-area'>
        <table className='data-table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
                  <td>1</td>
                  <td>İsmayıl</td>
                  <td>Zeynalov</td>
                </tr> */}
            {props.allPeople.map((item) => {
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.surname}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Datas