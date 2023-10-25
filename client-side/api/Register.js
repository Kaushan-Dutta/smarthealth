import React,{useState,useCallback,useEffect} from 'react'


const Register = () => {
  const [loading,setLoading]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [name,setName]=useState();
  
  const registerList=[
    {
        text:'email',
        placeholder:'Enter your email',
        label:'Email',
        onChange:(e)=>{
            setEmail(e.target.value)
        }
    },
    {
        text:'password',
        placeholder:'Enter your password',
        label:'Password',
        onChange:(e)=>{
            setPassword(e.target.value)
        }
    },
    {
        text:'text',
        placeholder:'Enter your username',
        label:'Username',
        onChange:(e)=>{
            setName(e.target.value)
        }
    },
  ]
  
  return (
    {registerList,loading}
  )
}

export default Register