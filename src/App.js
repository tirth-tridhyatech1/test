import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let tempid = 1;

    const [todo, settodo] = useState({text:""});
    const [todos,settodos] =useState([]);

     const oninputchange = (e) =>{
      settodo({text:e.target.value});
     }

     const onsubmithandel = (e)=>{
          e.preventDefault();
          settodos(...todos,[{id: tempid , text: todo.text}]);
          tempid = tempid+1;
          console.log(todos,20);
     } 
  return (
    <>
      <form action="" onSubmit={onsubmithandel}>
      <input type="text"  name='todoinput' onChange={oninputchange} />

      <button type='submit'>add todo</button>
      </form> 
      

      

      </>
  );
}

export default App;
