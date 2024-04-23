
import App from "./App";
import Home from "./Pages/Home";
import CryptidList from "./Pages/CryptidList"
import Cryptids from "./Pages/Cryptids";
import ErrorPage from "./Pages/ErrorPage";
import Submissions from "./Pages/Submissions";


const routes = [
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path:"/cryptidlist",
                element: <CryptidList/>,

            },
            {
                path:"/cryptids/:id",
                element:  <Cryptids/>

            },
            {
                path: "/submissions",
                element: <Submissions/>
            }

           
               
        ]

    }
]

export default routes;