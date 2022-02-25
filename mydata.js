import {login} from "./apicalls"


async function log(){
    console.log("log")
    let  result = await login("/api/users/2")
    console.log(result)
 }
 export default log;