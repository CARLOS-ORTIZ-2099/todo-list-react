import { useEffect, useState } from "react"
import { Tasks } from "../task/Tasks"
import { Form } from "../form/Form"
import { Buscador } from "../buscador/Buscador"

export const FormTask = () => {
const [data, setData] = useState(() => {
    let dataTasks = localStorage.getItem('tasksReact')
    if(dataTasks){
        return JSON.parse(dataTasks)
    }else{
        return []
    }
})

const [copy, setCopy] = useState([])

useEffect(() => {
    localStorage.setItem('tasksReact', JSON.stringify(data))
    setCopy(data)
}, [data])

const taskInfo = (e) => {
    e.preventDefault()
    let titleTask = e.target.title.value
    let desc = e.target.description.value
    let dataTask = {
        id: new Date().getTime(),
        titleTask,
        desc,
        edit:false
    }
    setData((previus) => [...previus, dataTask])
    e.target.reset() 
}

const deleteTask = (idTask) => {
    console.log(idTask)
    let response = data.filter(ele => ele.id!== idTask)
    setData(response)
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
