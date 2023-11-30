import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/navigation';


export async function getServerSideProps({req,query}) {
  const id = query?.id
  const res = await axios.get(`http://192.168.0.128:5000/api/crud/crud-get/${id}`)
  const data = await res.data
  console.log("data", data)
  return { props: { data } }
}
export default function Update({data}) {
  const router = useRouter()
 


  const initialValues = {
    name: data?.name,
    email: data?.email,
    mobile: data?.mobile,
    address: data?.address,
  }

  const formik = useFormik({
    initialValues: initialValues,
    // Handle form submission
    enableReinitialize: true,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      postCrudData(values)
    },
  });

  const postCrudData = (data) => {
    axios.post("http://192.168.0.128:5000/api/crud/crud-post", {
      name: data?.name,
      email: data?.email,
      mobile: data?.mobile,
      address: data?.address,
    })
      .then((response) => {
        console.log("response", response);
      });
  }
  return (
    <div>
      
      <form onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
        <div className='mx-auto '>
          <label >Name -</label>
          <input
            type="text"
            name="name"
            className='border bg-gray-200 '
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <label >Email -</label>
          <input
            type="text"
            name="email"
            className='border bg-gray-200 '
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label >Mobile no -</label>
          <input
            type="text"
            name="mobile"
            className='border bg-gray-200'
            onChange={formik.handleChange}
            value={formik.values.mobile}
          />
          <label >Address -</label>
          <input
            type="text"
            name="address"
            className='border bg-gray-200 '
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <button className='bg-amber-500 px-2 py-1'>submit</button>
        </div>

      </form>
    </div>
  )
}
