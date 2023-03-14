import React from 'react'

const get = async () =>{
    const data = await fetch('http://localhost:8080/api/questions/1')
    const result = await data.json()
    console.log(result)
    return result
}
 function Test(){
    const data =  get()
    return (
        <div className="App">
            {/*//{data?.question}*/}
        </div>
    );
}


export default Test;