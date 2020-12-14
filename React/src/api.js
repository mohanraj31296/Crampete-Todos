import axios from 'axios';


//const API_BASE_URL = "https://stark-brook-58201.herokuapp.com/";

const API_BASE_URL = "http://localhost:8001/todoparent";

const api = axios.create(
    {
        baseURL: API_BASE_URL
    }
)
export function getJson() {
   // let check = api.get("/todos");
   // console.log(check);
    return api.get("/todos")
}

export function saveInBackend(data){
    console.log("logging", data)
    return api.post("/" , data)
}