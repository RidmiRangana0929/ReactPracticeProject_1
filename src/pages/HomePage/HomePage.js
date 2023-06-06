import React, { useEffect, useState } from 'react'
import RoundButton from '../../compornent/RoundButton/RoundButton'
import './style.css'
import MyNav from '../../compornent/MyNav/MyNav'
export default function HomePage() {


  

  const [email, setEmail] = useState("");
  const [telNo, setTelNo] = useState("");
  const [name, setName] = useState("");


  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [data,setData] = useState([]);

  useEffect(() => {
    console.log("use effect running from home page...");
  },[title]);


  const saveData = () => {
    console.log ("hello....")

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title,
    body: body,
    userId: userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


setTitle("");
setBody("");
setUserId("");

}

 const loadAllData = () =>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => setData(json));
 }

  return (
    <div>
        <h1>Home Page</h1>

        <RoundButton name={"Click Me Home"}/>
        <button onClick={saveData} className='btn-1'> Click For Hello</button>

        <button style={{backgroundColor : 'red', borderColor : 'red', borderRadius : '10px', color : 'white'}}> Click For Hello</button>
        <br></br><br></br>
        <input placeholder='Enter your name' value={email} onChange={ (e) => {setEmail(e.target.value)} } ></input>
        <br></br><br></br>



        <input style={{borderRadius : '10px'}} placeholder='Enter your title' value={title} onChange={ (e) => {setTitle(e.target.value)} } ></input>
        <br></br><br></br>
        <input style={{borderRadius : '10px'}} placeholder='Enter your body' value={body} onChange={ (e) => {setBody(e.target.value)} } ></input>
        <br></br><br></br>
        <input style={{borderRadius : '10px'}} placeholder='Enter your user Id' value={userId} onChange={ (e) => {setUserId(e.target.value)} } ></input>
        <br></br><br></br>
        <button style={{backgroundColor : 'black', borderColor : 'black', borderRadius : '10px', color : 'white'}}  onClick={saveData}> Submit</button>

        <br></br><br></br>
        <button style={{backgroundColor : 'black', borderColor : 'black', borderRadius : '10px', color : 'white'}}  onClick={loadAllData}> Load All Data</button>

        {
          data.map(data=>{
            return(
              <div key={data.id}>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
              </div>
            )
          })
        }

    </div>
  )
}

// state eka kiyanne front end eke indan back end ekata data tika geniyanakan front ekedi e adala data tika temporery store karagena thiyaganna thiyana feature ekak 
