import { useRouteError } from "react-router-dom";
import NavBar from "../Components/NavBar";

function ErrorPage () {
    const error = useRouteError()
    console.error(error)

    return(
        <div>
        <main>
            <h1>Oops! Something went wrong.</h1>
        </main>
        <NavBar/>
        </div>
    )
}

export default ErrorPage