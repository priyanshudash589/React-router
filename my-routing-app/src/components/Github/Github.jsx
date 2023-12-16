import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data , setData] = useState([])
    useEffect(() => {
      fetch('http://api.github.com/users/priyanshudash589')
      .then(response => response.json())
      .then(data => {
            setData(data)
      })
    }, [])
    
  return (
    <div>
        Github followers : {data.followers}    
        <br />
        <img src={data.avatar_url} alt="" width={300} />

    </div>
  )
}

export default Github