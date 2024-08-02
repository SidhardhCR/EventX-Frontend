import React from 'react'

import { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {

    const [userdata,setUserdata] = useState({})
    const getUser =async()=>{
        try{
            const response = await axios.get('http://localhost:3000/login/success',{withCredentials:true})
            console.log('response',response)
            setUserdata(response.data.user)
        } catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getUser();
    },[])
  return (
    <>
    <div>Home</div>
    <div><h1>{userdata.displayName}</h1></div>
    </>
  )
}

export default Home