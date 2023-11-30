import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';



function Form(props) {
    const router = useRouter()

    const initialValues = {
        name: "",
        email: "",
        mobile: "",
        address: "",
    }

    const formik = useFormik({
        initialValues: initialValues,
        // Handle form submission
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
                console.log("response",response);
            });
    }

    return (
        <div>
           <button className='bg-green-500 text-white px-2 py-1' onClick={()=>router.push(`/crud/read`)}>Read</button>
           
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

export default Form