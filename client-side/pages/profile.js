import React from 'react'

const profile = () => {
  return (
    <div className='container-center'>
        <div className='w-96 p-5 border-2 flx-col gap-5'>
            <img src="" alt="Profile Image" className='w-60 h-60 rounded-full border-2 border-shade2'/>
            <p className='text-lg font-inter'>kaushan5409</p>
            <p className='text-lg font-inter'>kaushandutta@gmail.com</p>
            <button className='primary-btn w-full'>Update</button>
        </div>
    </div>
  )
}

export default profile