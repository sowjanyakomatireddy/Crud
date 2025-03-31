import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  let [individual, setIndividal] = useState({
    name: "",
    degree: "",
    yop: "",
    percentage: ""
  })
  let { id } = useParams()
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axios.get(`http://localhost:3000/students/${id}`)
      setIndividal(data)
    }
    fetchData()
  }, [])
  let navigate = useNavigate()
  let { name, degree, yop, percentage } = individual

  let handleChange = (e) => {
    let { name, value } = e.target
    setIndividal({...individual,[name]:value})
  }

  let handleUpdate = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:3000/students/${id}`,individual)
    navigate("/")
  }
  return (
    <form onSubmit={handleUpdate}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" value={name} onChange={handleChange} />
      <br /><br />
      <label htmlFor="degree">Degree:</label>
      <input type="text" name="degree" id="degree" value={degree} onChange={handleChange} />
      <br /><br />
      <label htmlFor="yop">Yop:</label>
      <input type="tel" name="yop" id="yop" value={yop} onChange={handleChange} />
      <br /><br />
      <label htmlFor="percentage">Percentage:</label>
      <input type="text" name="percentage" id="percentage" value={percentage} onChange={handleChange} />
      <br /><br />
      <input type="submit" value="UPDATE" />
      <button onClick={()=>navigate("/")}>GO BACK</button>
    </form>
  )
}

export default Edit