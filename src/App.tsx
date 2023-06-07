import React, { useState } from 'react';
import './App.css'

interface ToDoData {
  id: number;
  text: string;
  status: boolean;
  date:Date
}

function App() {
  const [toDos, setToDos] = useState<ToDoData[]>([]);
  const [toDo, setToDo] = useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {new Date().toLocaleDateString("en-US", { weekday: "long" })} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([
              ...toDos,
              { id: Date.now(), text: toDo, status: false ,date:new Date() }
            ])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {
          toDos.map((obj, index) => {
            return (

              <div className="todo">
                <div className="left">

                  <input
                    onChange={(e) => {
                      setToDos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj.status = e.target.checked
                          }
                          return obj2
                        }))
                    }} checked={obj.status}
                    type="checkbox"
                    name=""
                    id="" />
                  <p>{obj.text}</p>
                </div>
                <div className="right">

                  <i onClick={() => {
                    setToDos(toDos.filter((dltobj) => {
                      if (dltobj.id != obj.id) {
                        return dltobj
                      }
                    })
                    )
                  }}
                    className="fas fa-times"></i>
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
