import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [toDos,setToDos]=useState([]);
  const [toDo,setToDo]=useState('');
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop,What You Want to do Today :-) </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event)=>setToDo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=> setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((newValue)=>{
          return(
            <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(newValue)
              setToDos(toDos.filter(newValue2=>{
                if(newValue2.id===newValue.id){
                  newValue2.status=e.target.checked;
                  return newValue2;
                }return null;
              }))

            }} value={newValue.status} type="checkbox" name="" id="" />
            <p>{newValue.text}</p>
          </div>
          <div className="right">
             <div>{toDos.map((newValue)=>{
          if(newValue.status){
            return(<h3>Active Task</h3>)
          }return null;
        })}
        </div>
        <div className='delete'>
            <i className="fas fa-times"></i>
         </div>   
          </div>
        </div>



          )
        })





        }
        
      </div>
    </div>
  );
}

export default App;