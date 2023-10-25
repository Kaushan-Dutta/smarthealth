import React from "react";
import Ai from "@/api/Ai";

const predict = () => {
  const {loading,disease,predictDisease,askai,setAskai}=Ai();
  return (
  <div className="text-black base-container">
    <p className=' text-4xl font-alata'><b>Predict the possible &nbsp;<span className='text-shade2'>cause,</span> </b></p>
    <section className="flx-col justify-center my-5">
      <div className="w-2/3 ">
        {disease.map((obj,id)=>(
            <div className="rounded-lg border border-shade2 p-5 my-5">
              <p className="font-alata text-xl"><b>{obj.group}</b></p>
              <div className=" my-5 ">
                {obj.effects.map((effect)=>(
                  
                  <>
                  <input type="checkbox" value={effect} checked={askai.includes(effect)} onChange={()=>{
                    askai.includes(effect)?setAskai(askai.replace(effect+',','')):setAskai(askai +effect+',')
                  }} /><span className="text-md font-inter">&nbsp;{effect}</span>&nbsp;&nbsp;&nbsp;
                  </>
                ))}
              </div>
                
            </div>
        ))}
        
      </div>
      <button onClick={predictDisease} className="primary-btn w-[200px] mx-auto">Predict</button>
      <div className="text-lg font-inter w-2/3 my-5">
        <p className="font-bold">Fast Refresh had to perform a full reload when ./pages/ai/predict.js changed. Read more: https://nextjs.org/docs/messages/fast-refresh-reload </p>
      </div>
    </section>
  </div>);
};

export default predict;
