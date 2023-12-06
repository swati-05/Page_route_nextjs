import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';



export async function getServerSideProps(req, query) {

    const res = await axios.get('http://192.168.0.128:5000/api/crud/crud-get-all')
    const data = await res.data
    console.log("data", data)
    return { props: { data } }
}

function read({ data }) {

    const router = useRouter()


    const deleteFun = (id) => {
        alert("")
        axios.delete(`http://192.168.0.128:5000/api/crud/crud-delete/${id}`)
            .then((res) => {
                console.log("response", res?.data)
            })
            .catch((err) => {
                console.log("error", err)
            })
    }

    return (
        <div>
            {data?.crud?.map((items) => (
                <>
                    <div className='mb-4'>
                        <h1>Name : - {items?.name}  </h1>
                        <h1>Email : - {items?.email} </h1>
                        <h1>Mobile no. : - {items?.mobile} </h1>
                        <h1>Address : - {items?.address} </h1>
                        <button className='bg-amber-500 px-4 py-1' onClick={() => router.push(`/crud/update/${items?._id}`)}>update</button>
                        <button className='bg-red-500 px-4 py-1' onClick={() => deleteFun(items?._id)}>Delete</button>
                    </div>
                </>
            ))}
        </div>
    )
}

export default read