/*
import React from 'react'
export default function LearnEffects (){
    const [count,setCount]=React.useState(0)
    const [starWarsData,setStarWarsData]=React.useState({})
    React.useEffect(function(){
     fetch("https://swapi.dev/api/people/"+count)
     .then(res => res.json())
     .then(data => setStarWarsData(data))
    },[count])//[count]

    return(
        <div className='LearnEffects'>

            <h2>The count is {count}</h2>
            <button onClick={()=>setCount(prevCount => prevCount+1)}></button>
            <br/>
            <pre>{JSON.stringify(starWarsData,null,2)}</pre>
        </div>
    )
}*/