/* eslint-disable react/prop-types */


export const Tasks = ({copy, deleteTask, saveChange, edit}) => {

  return (
    <div className="container-task">
            {
                copy?.map(ele => (
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
  )
}
