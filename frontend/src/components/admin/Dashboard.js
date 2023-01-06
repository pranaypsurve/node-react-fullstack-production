import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Dashboard() {
  const [serverState,setServerState] = useState('d');
  const getServerStatus = async () => {
    let {data} = await axios.get('/api/v1');
    console.log(data.message);
    setServerState(data.message)
    return data;
  }
  useEffect(()=>{
    getServerStatus()
  },[]);
  return (
    <div>Dashboard {serverState}</div>
  )
}
