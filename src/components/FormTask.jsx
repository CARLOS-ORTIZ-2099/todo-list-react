import { useState } from "react"


export const FormTask = () => {
const [data, setData] = useState([])

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
    let r =  data.map(ele => ele.id == idTask? {...ele, edit: true}: ele )
    setData(r)
}

const saveChange = (e,idTask) => {
    e.preventDefault()
    console.log(idTask)
    let input = e.target.input.value
    let textarea = e.target.textarea.value
    let r =  data.map(ele => ele.id == idTask? {...ele,titleTask:input, desc: textarea,edit:false }: ele )
    setData(r)
}

  return (
   <>
        <form action="" onSubmit={taskInfo}>
            <input name="title" type="text" placeholder="escribe tu tarea" />
            <textarea name="description" type="text" placeholder="escribe la descripcion tarea" />
            <input type="submit" />
        </form>
        <div className="container-task">
            {
                data.map(ele => (
                    <div key={ele.id}>
                        <h1>{ele.titleTask}</h1>
                        <p>{ele.desc}</p>
                      {
                        !ele.edit? 
                            <>
                              <button onClick={() => deleteTask(ele.id)}>eliminar</button>
                              <button onClick={() => edit(ele.id)} >editar</button>
                            </>
                        :   <>
                                <form onSubmit={(e) => saveChange(e,ele.id)}>
                                    <input defaultValue={ele.titleTask} name="input" type="text" />
                                    <textarea defaultValue={ele.desc} name="textarea" id="" cols="15" rows="4"></textarea>
                                    <button>guardar</button>
                                </form>
                            </>
                      }
                    </div>
                ))
            }
        </div>
   </>
  )
}
