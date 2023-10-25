import React from 'react'
import { RiGalleryLine } from 'react-icons/ri';
import Ai from '@/api/Ai'

const prescribe = () => {
  const {loading,askai,setAskai,prescibeReport}=Ai();
  return (
    <div className='text-black base-container '>
      <p className=' text-4xl font-alata'><b>Submit your <span className='text-shade2'>report,</span> </b></p>
      
      <section className='  mx-auto '>
        <div className='my-10 border-2 border-dotted rounded-md p-3 w-1/2  border-shade1 flx-col justify-center mx-auto'>
            <RiGalleryLine className='text-5xl text-shade1'/>
            <p className='ml-3 text-lg font-inter'>Upload Report</p>
        </div>
        <button onClick={prescibeReport} className="primary-btn w-[200px] mx-auto">Upload</button>

        <div className="text-md font-inter w-2/3 my-5">
            <p className="">Fast Refresh had to perform a full reload when ./pages/ai/predict.js changed. Read more: https://nextjs.org/docs/messages/fast-refresh-reload </p>
        </div>

      </section>
    </div>
  )
}

export default prescribe