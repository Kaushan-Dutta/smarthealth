import React,{useState,useCallback,useEffect} from 'react'


const Login = () => {
  const [loading,setLoading]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  
  const loginList=[
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
    }
  ]
  
  return (
    {loginList,loading}
  )
}

export default Login