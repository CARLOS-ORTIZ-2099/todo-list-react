import Swal from "sweetalert2";

export const alertConfirmation = (idTask, data, setdata) => {
    Swal.fire({
      title:'eliminar',
      text:'seguro que quieres eliminar esta tarea?',

      icon:'question',

      confirmButtonText:'aceptar',
      confirmButtonColor:'green',

      showCancelButton:true,
      cancelButtonText:'cancelar',
      cancelButtonColor:'red',
      allowOutsideClick:false, 
      allowEscapeKey:false, 
    }).then((result)=> {
      console.log(result)
      if(result.isConfirmed){
          console.log(result.isConfirmed)
          Swal.fire('Éxito', 'tu tarea ha sido eliminada correctamente', 'success');
          const filtrado = data.filter(task => task.id!== idTask)
          setdata(filtrado)
      }
      else if(result.dismiss === Swal.DismissReason.cancel){
          console.log(result.dismiss)
          console.log(Swal.DismissReason)
          Swal.fire('Error', 'La eliminación ha sido cancelada', 'error');
      }
      
  })
}