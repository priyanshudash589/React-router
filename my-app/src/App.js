import React, { useState } from 'react';
import Routing from './components/Routing'

function App() { 

  const [loggedInUser, setLoggedInUser] = useState('');


  return (
    <>
        <Routing />
        
        {loggedInUser && (
        <button onClick={() => window.location.href = "/card"}>
          Go to Card
        </button>
      )}

    </>
  );
}

export default App;
