import Form from '@/Component/Home/Form'
import Section1 from '@/Component/Home/Section1'
import React from 'react'

export async function getServerSideProps() {
    const res = await fetch('http://192.168.0.128:5000/api/crud/crud-get-all')
    const data = await res.json()
    
    return { props: { data }}
  }
   


function Home({data}) {
  
  return (
    <div >
        {/* <Section1/> */}
        
    <Form data={data}/>
    </div>
  )
}

export default Home