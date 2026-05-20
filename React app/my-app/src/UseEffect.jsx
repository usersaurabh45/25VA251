import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  //fetch data api
  const [apidata,setApidata]=useState(null);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => setApidata(data))
  })

  return (
    <>
      <h1>UseEffect Example: Self Counter</h1>
      <h2>{counter}</h2>
      <h3>API title:{apidata}</h3>
    </>
  );
}

export default UseEffect;