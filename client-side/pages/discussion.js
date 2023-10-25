import React from 'react'

const Comment=()=>(
  <div className='flx-row justify-between w-full shadow-md h-[100px] font-inter rounded-md p-5'>
     <p className='w-2/3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
     <p className='w-1/3 mx-5'>kaushan5409</p>
     <p className='w-1/3'>Wednesday, 23/12/2023</p>
  </div>
)
const discussion = () => {
  return (
    <div className='text-black base-container '>
      <p className=' text-4xl font-alata'><b>Discussion <span className='text-shade2'>forum,</span> </b></p>
      
      <section className='  mx-auto '>
        <div className='h-[70px] my-10 border rounded-full p-3 w-1/2 mx-auto border-shade1 flx-row justify-between'>
          <input type="text" placeholder='Enter your comment ' className='bg-light outline-none font-alata w-full p-3'/>
          <span className='ml-3 primary-btn w-[200px]'><button>Add Comment</button></span>
        </div>
        <div className='flx-col gap-5 w-3/5 mx-auto'>
            <Comment/>
        </div>
      </section>
    </div>
  )
}

export default discussion