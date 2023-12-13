import React from 'react'
import { useState } from 'react';
import Dashbd from './Dashbd';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleLogin = () => {
    navigate(`/dashboard/${inputValue}`);
  };


  return (
    <>
        <div className="flex justify-center items-center h-[100vh]">
        <div className='h-[38rem] w-[50rem] rounded-3xl border-4 border-solid border-red-500 grid grid-cols-1 '>

            <div className='h-[38rem] w-[50rem] flex flex-col gap-y-4 items-center justify-center'>
                <div className='h-[6rem] w-[40rem]  flex justify-center text-teal-600 text-2xl font-semibold items-center '>
                    <h1>Hello World! Register Here</h1>
                </div>
    
                <div className='bg-red-100 h-[15rem] w-[40rem] flex flex-col space-y-2 items-center pt-3'>
                    <input type="text" value={inputValue} onChange={handleInputChange} className='border-solid border-2 border-red-500 h-[3rem] w-[35rem] text-center' placeholder="Enter the Username"></input>

                    <input type="password"  className='border-2 border-red-500 h-[3rem] w-[35rem] text-center' placeholder="Enter Password"></input>

                    <div>
                      <button onClick={handleLogin} path="/dashboard" exact component={Dashbd} className='bg-slate-800 h-[5rem] w-[15rem] text-white rounded-full'>Click Here to register in the database </button>
                    </div>
                </div>

                
            </div>

        </div>
    </div>  
    </>
  )
}

export default Login