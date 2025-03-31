import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Read = () => {
  let parameter = useParams()
  let [individualData,setIndividualData] = useState("")
  let navigate = useNavigate()
  let {id,name,degree,yop,percentage} = individualData
  console.log(individualData)
  useEffect(()=>{
      let fetchData = async()=>{
        let {data} = await axios.get(`http://localhost:3000/students/${parameter.id}`)
        setIndividualData(data)
      }
      fetchData()
  },[])
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Degree:{degree}</h1>
      <h1>YOP:{yop}</h1>
      <h1>Percentage:{percentage}</h1>
      <button onClick={()=>navigate("/")}>Go Back</button>
      <button onClick={()=>navigate(`/edit/${id}`)}>Edit</button>
    </div>
  )
}

export default Read