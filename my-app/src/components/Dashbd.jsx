import React from 'react'
import { useParams } from 'react-router';


const Dashbd = () => {

  const { inputValue } = useParams();

  return (
    <>

            <div className='bg-black text-white text-[110px] h-[45rem] w-full'>Welcome, {inputValue}!</div>

    </>
  )
}

export default Dashbd