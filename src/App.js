
import './App.css';
import { useState } from 'react';

function App() {
    const [todo, settodo] = useState("");
    const [todos,settodos] =useState([]);
    const [isedit,setisedit] =useState(false);
     const oninputchange = (e) =>{
      settodo(e.target.value);
      // console.log(e.target.value);
     }
     const onsubmithandel = (e)=>{
          e.preventDefault();      
          const newtodo ={
              id: new Date().getTime(),
              text:todo
          }
          settodos(todos.concat(newtodo));
          settodo("");
          // console.log(todos,23);
     } 
    const ondelete =(id) =>{
        // console.log(id,"delete");
        todos.map((todo)=>{
             settodos([...todos].filter((todo) => todo.id !== id))
             return todos
        })
     }
     const onupdate =(item) =>{
      // console.log(item,"update");
      settodo(item.text);
      setisedit(true);  
   }
   const onupdatesave=(item)=>{
      item.text = todo;
      settodo("");
      setisedit(false);
   }

  return (
    <>
      <form action="" onSubmit={onsubmithandel}>
      <input type="text" value={todo} name='todoinput' onChange={oninputchange} />
      <button type='submit'>add todo</button>
      
      </form> 
      {
        todos.map((item)=>{
          // console.log(item);
            return (<div key ={item.id} >{item.text}
            {!isedit?<button onClick={() => onupdate(item)}>update</button>: <button onClick={() => onupdatesave(item)}>Save</button>}
            <button onClick={() => ondelete(item.id)}>delete</button></div>
            )
        })
      }
      </>
  );
}

export default App;
