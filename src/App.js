import ToDoList from './ToDoList';
import './App.css';
// import { ListGroup} from "react-bootstrap"
import React, { useState }  from 'react';
const App =() => {
  const [inputList ,setInputList] =useState("");
  const [Items , setItems] =useState([]);

  const itemEvent =(event) => {
     setInputList(event.target.value)
  }
  const ListOfItem =() => {
     setItems((oldItems)=>{
      return[...oldItems,inputList];
     });
     setInputList("");
  };
  const deleteItems =(id) => {
     setItems ((oldItems) => {
      return oldItems.filter((arrElem , index) =>{
          return index !== id;
          })
    })

  }

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add your ToDo in a list" 
          value={inputList}
          onChange={itemEvent} />
          <button onClick={ListOfItem}> + </button>

          <ol> {
            Items.map((itemVal , index) =>  {
               return <ToDoList
                key={index} 
               id={index}
               text={itemVal}
               onSelect={deleteItems}
               />;  
              })
          }
          </ol>
        </div>
      </div>
    </>
  );

}
export default App;
