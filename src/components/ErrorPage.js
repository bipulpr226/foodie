import { useRouteError } from "react-router-dom"

const ErrorPage=()=>{

    const errorObject=useRouteError()
    console.log("errorObject",errorObject
        )
    return(
        <div>
            <p className="text-danger d-flex flex-column justify-content-center align-item-center"
            style={{position:"absolute", left:"50%" ,top:"50%", transform:"translate(-50%,-50%)"}}>
            <strong className="h1">status:{errorObject.status} ,</strong>
            <strong className="h1">statusText:{errorObject.statusText}</strong>
            
            <h1>description:{errorObject.error.message}</h1>
            </p>
        </div>
    )
}
export default ErrorPage