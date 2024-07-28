import axios from "axios"


const getMeal = () =>{
    try{
        const response = axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        return response
    }
    catch(error){
        console.log(error)
    }
}

export default getMeal