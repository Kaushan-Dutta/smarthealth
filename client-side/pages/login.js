import React from 'react'
import Login from '../api/Login';
import Link from 'next/link';

const login = () => {
  const {loading,loginList}=Login();

  return (
    <div className='container-center'>
      <div className='border rounded-md p-5 w-96 flex flex-col gap-5'>
        {loginList.map((obj,id)=>(
          <div key={id} className='font-alata'>
            <p htmlFor={obj.text}>{obj.label}</p>
            <input {...obj} className='w-full outline-none p-2 '/>
          </div>
        ))}
        <p>Not Registered?&nbsp;<Link href="/register" className='text-shade1 font-bold'>Click Here</Link></p>
      </div>
    </div>
  )
}

export default login