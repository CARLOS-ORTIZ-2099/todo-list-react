export default function getLocalSt(name) {
  console.log(name)
      let responseData =  localStorage.getItem(name)
      console.log(responseData)
      if(responseData){
        return JSON.parse(responseData)
      }else{
        return []
      }
  }
  


  