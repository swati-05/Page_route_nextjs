import React from 'react';
import axios from '@/utils/axios';

export default function Login() {



    const handleSubmit = async()=>{
        const res = await axios.post(`/auth/user-login`);
        
    }
  return (
    <div>Login</div>
  )
}
