import axios from 'axios'
import React, { useEffect, useState,Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { SiHandlebarsdotjs } from "react-icons/si";
import { ImCool } from "react-icons/im";

const Home = () => {
  let [studentData, setStudentData] = useState(null)
  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axios.get("http://localhost:3000/students")
      setStudentData(data)
    } 
    fetchData()
  }, [])
   let navigate = useNavigate()
  let handleCreate=()=>{
   navigate("/create")
  }
  let handleDelete=(id)=>{
    axios.delete(`http://localhost:3000/students/${id}`)
    location.reload()
  }
  return (
    <>
     <button onClick={handleCreate}>
     REGISTER <SiHandlebarsdotjs />
     </button>
    <table border={10} style={{width:"100%"}} cellPadding={20}>
      <thead>
        <tr>
          <th>SL.NO</th>
          <th>NAME</th>
          <th>DEGREE</th>
          <th>YOP</th>
          <th>PERCENTAGE</th>
        </tr>
      </thead>
      <tbody>
        {
          studentData == null ? "Loading...." : studentData.map((element,index) => {
            return (
              <Fragment key={element.id}>
                   <tr>
                    <td>{index+1}</td>
                    <td>{element.name}</td>
                    <td>{element.degree}</td>
                    <td>{element.yop}</td>
                    <td>{element.percentage}</td>
                    <td>
                      <button onClick={()=>navigate(`/read/${element.id}`)}>READ <ImCool /></button>
                    </td>
                    <td>
                      <button onClick={()=>navigate(`/edit/${element.id}`)}>EDIT</button>
                    </td>
                    <td>
                      <button onClick={()=>handleDelete(element.id)}>DELETE</button>
                    </td>
                   </tr>
              </Fragment>
            )
          })

        }
      </tbody>
    </table>
  </>
  )
}

export default Home