import { useEffect, useState } from "react"
import { Tasks } from "../task/Tasks"
import { Form } from "../form/Form"
import { Buscador } from "../buscador/Buscador"
import { alertConfirmation } from "../../helpers/alertConfirmation"
import getLocalSt from "../../helpers/getLocalSt"

export const FormTask = () => {
const [data, setData] = useState(() => getLocalSt('tasksReact'))

const [copy, setCopy] = useState([])

useEffect(() => {
    localStorage.setItem('tasksReact', JSON.stringify(data))
    setCopy(data)
}, [data])

const taskInfo = (e) => {
    e.preventDefault()
    let titleTask = e.target.title.value
    let desc = e.target.description.value
    if(titleTask.length < 1 && desc.length < 1){
            alert('ambos campos son requeridos')
            return
    }
    let dataTask = {
        id: new Date().getTime(),
        titleTask,
        desc,
        edit:false,
        creationDate: new Date().getTime()
    }
    setData((previus) => [...previus, dataTask])
    e.target.reset() 
}

const deleteTask = (idTask) => {
    alertConfirmation(idTask, data, setData)
}

const edit = (idTask) => {
    let editMode =  data.map(ele => ele.id == idTask? {...ele, edit: true}: ele )
    setData(editMode)
}

const saveChange = (e,idTask) => {
    e.preventDefault()
    console.log(idTask)
    let input = e.target.input.value
    let textarea = e.target.textarea.value
    let ModifiedTask =  data.map(ele => ele.id == idTask? {...ele,titleTask: input, desc: textarea, edit:false }
        : ele )
    setData(ModifiedTask)
}

const taskFind = (e) => {
   let target = e.target.value
   if(target.length<1){
    setCopy(data)
   }
   let copyData = [...data]
   console.log(copyData)
   let response = copyData.filter(task => task.titleTask.includes(target))
   console.log(response)
   setCopy(response)
   
}
  return (
   <>   
        <Buscador taskFind={taskFind}/>
        <Form taskInfo={taskInfo}/>
        <Tasks copy={copy} 
            deleteTask={deleteTask} 
            saveChange={saveChange}
            edit={edit}
        />
       
   </>
  )
}
