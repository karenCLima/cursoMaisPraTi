import { useState } from "react"
import './TaskList.module.css'


const TaskList = () =>{

    const [task, setTask] = useState([])

    function addTask(newTask){
        setTask([...task, newTask])

    }

    return (
        <>
            <h1>To Do List</h1>
            <h2>Insira aqui sua tarefa:</h2>
            <input id="input"  type="text" />
            <input type="button" typeof="submit" value="Inserir" onClick={()=>addTask(document.getElementById('input').value)}/>
            
            
            <h3 >Lista de Tarefas</h3>
            <ul className="list">
                {task.map((t, index)=> <li key={index}>{t}</li>)}
            </ul>
        </>
    )

}

export default TaskList