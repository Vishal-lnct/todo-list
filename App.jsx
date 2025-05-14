import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [todolist,setToDoList]=useState([])
  let saveToDoList=(event)=>{
  

    let todoname=event.target.todoname.value;
    if(!todolist.includes(todoname)){
      let finalDolist=[...todolist,todoname]
      setToDoList(finalDolist)

    }else{
      alert("already exist")
    }
    
    event.preventDefault();
  }
  let List=todolist.map((value,index)=>{
    return(
      <ToDoListitems value={value} key={index} indexnumber={index}
      todolist={todolist} setToDoList={setToDoList}/>
    )
  })

  return (
    <>
     <h1>ToDo List</h1>
     <form onSubmit={saveToDoList}>

      <input type="text" name='todoname' />
      <button>Save</button>
     </form>
     <div className='outerdiv'>
     <ul>
  {List}
      
     </ul>
     </div>
    </>
  )
}

export default App
function ToDoListitems({value,indexnumber,todolist,setToDoList}){
let [status,setStatus]=useState(false)
  let deleterow=()=>{
    let finaldata=todolist.filter((v,i)=>i!=indexnumber)
    setToDoList(finaldata)
  }

  let  checkStatus=()=>{
    setStatus(!status)

  }
  return(
<li className={status ? 'completetodo' : ''} onClick={checkStatus}>

        {indexnumber+1}{value} <span onClick={deleterow}>&times;</span>
      </li>
  )
}
