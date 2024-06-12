import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { shareGroupData } from '../../redux/slices/groupSlice';

export default function ShowGroup() {

let [grpData, setGrpData] = useState(null);
 
  let dispatch = useDispatch();
 


  function fetchData() {
    fetch(process.env.REACT_APP_API + "/groups")
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        setGrpData(value);
      });
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);


  function fncGrp(id){
  // alert(id)
      dispatch(shareGroupData(id))
  }

  return (
    <section>
        <h2> Group </h2>

        <ul>
          {
              grpData && grpData.length>0 && grpData.map(value =>

                <li onClick={()=>fncGrp(value.id)} key={value.id}> {value.groupName} </li>
              )
          }
        </ul>
      </section>
  )
}
