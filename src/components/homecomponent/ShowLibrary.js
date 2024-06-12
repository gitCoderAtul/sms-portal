import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { sharelibraryData } from '../../redux/slices/librarySlice';

export default function ShowLibrary() {
  let [libData,setLibData] = useState(null);

  let dispatch = useDispatch();

  function fetchData(){
    try{
      fetch(process.env.REACT_APP_API+'/libraries')
      .then(res=>res.json())
      .then(value=>{
        console.log(value);
        setLibData(value)
      })
    }catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
      fetchData()
  },[])

  function fncLib(id){
    // console.log(id);
    // alert(id)
    dispatch(sharelibraryData(id))

  }
  return (
    <section>
        <h2> Library </h2>
        <ul>
        {
                libData && libData.length>0 && libData.map(value=>
                <li key={value.id} onClick={()=>{fncLib(value.id)}}>{value.libraryName}</li>
                )
         }
         </ul>
    </section>    
  )
}
