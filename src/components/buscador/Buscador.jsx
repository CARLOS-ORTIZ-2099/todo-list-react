/* eslint-disable react/prop-types */


export const Buscador = ({taskFind}) => {
  return (
    <>
        
            <div className="input-group flex-nowrap container">
                <span className="input-group-text" id="addon-wrapping">🔎</span>
                <input onChange={taskFind} type="text" className="form-control" placeholder="find task" aria-label="Username" aria-describedby="addon-wrapping"/>
            </div>
    </>
    
  )
}
