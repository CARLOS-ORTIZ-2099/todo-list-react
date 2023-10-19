/* eslint-disable react/prop-types */


export const Form = ({taskInfo}) => {
  return (
    <>

    <div className="container">
            <form className="form-container" onSubmit={taskInfo}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">titulo de tu tarea</label>
                    <input type="text"  name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="escribe el titulo de tu tarea"/>
                    <div id="emailHelp" className="form-text">a short but memorable title.</div>
                </div>
                
                <div className="form-floating">
                    <textarea name="description" className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                    <label htmlFor="floatingTextarea2">más info sobre tu tarea</label>
                </div>
            
                <button type="submit" className="btn btn-primary button d-block mx-auto mt-3 mb-5">crear tarea</button>
            </form>
       </div>


    
    </>
  )
}
