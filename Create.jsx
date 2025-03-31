import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Create = () => {
  let navigate = useNavigate()
  let formik = useFormik({
    initialValues: {
      name: "",
      degree: "",
      yop: "",
      percentage: ""
    },
    onSubmit: (finalData) => {
      axios.post("http://localhost:3000/students", finalData)
      toast.success('Successfully Registered')
      setTimeout(()=>{
        navigate('/')
      },3000)
    }
  })
  let { name, degree, yop, percentage } = formik.values
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" value={name} onChange={formik.handleChange} />
      <br /><br />
      <label htmlFor="degree">Degree:</label>
      <input type="text" name="degree" id="degree" value={degree} onChange={formik.handleChange} />
      <br /><br />
      <label htmlFor="yop">Yop:</label>
      <input type="tel" name="yop" id="yop" value={yop} onChange={formik.handleChange} />
      <br /><br />
      <label htmlFor="percentage">Percentage:</label>
      <input type="text" name="percentage" id="percentage" value={percentage} onChange={formik.handleChange} />
      <br /><br />
      <input type="submit" value="Register" />
      <button onClick={() => navigate("/")}>GO BACK</button>
      <ToastContainer />
    </form>
  )
}

export default Create