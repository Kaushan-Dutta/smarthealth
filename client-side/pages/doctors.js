import React from 'react'

const Doctor=()=>(
    <div className='rounded-md font-inter w-3/5 mx-auto flx-row justify-between p-5 border border-shade1'>
        <div className=''>
            <img src="" alt="profile"/>
            <p>PK Mukherjee</p>
        </div>
        <p>Cardioloogist</p>
        <p>23 Patients</p>
    </div>
)
const doctors = () => {
  return (
    <div className='base-container'>
        <p className=' text-4xl font-alata'><b>Doctors <span className='text-shade2'>available for you,</span> </b></p>

        <div className='flx-col justify-center gap-10 my-10 '>
            <Doctor/>
        </div>
    </div>
  )
}

export default doctors