/* eslint-disable react/prop-types */

import { calcularTiempoTranscurrido } from "../../helpers/calculateTime"


export const Tasks = ({copy, deleteTask, saveChange, edit}) => {

  return (
    <div className="container-task d-flex flex-wrap container">
            {
                copy?.map(ele => (
                  <div className="card container mb-4" style={{width: "18rem"}} key={ele.id}>
                      <div className="card-body">
                            <h5 className="card-title text-uppercase ">title: {ele.titleTask}</h5>

                            <p className="card-text lh-lg">description : {ele.desc}</p>
                            {
                              !ele.edit ? 
                              <div className="d-flex justify-content-around">
                                <button className="btn btn-danger fw-bold" onClick={() => deleteTask(ele.id)}>eliminar</button>
                                <button className="btn btn-warning fw-bold" onClick={() => edit(ele.id)} >editar</button>
                              </div>
                              :   
                              <>
                                  <form className="text-center" onSubmit={(e) => saveChange(e,ele.id)}>
                                      <input className="mb-4" defaultValue={ele.titleTask} name="input" type="text" />
                                      <textarea className="mb-4 lh-lg" defaultValue={ele.desc} name="textarea" id="" cols="15" rows="4"></textarea>
                                      <button className="btn btn-info d-block fw-bold mx-auto">guardar</button>
                                  </form>
                              </>
                            }
                          <h5 className="text-capitalize mt-3 ">creado hace: {calcularTiempoTranscurrido(ele.creationDate)}</h5>
                      </div>
                  </div>
                ))
            }
    </div>
  )
}
