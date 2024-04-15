
import App from "./App";
import Home from "./Pages/Home";
import CryptidList from "./Pages/CryptidList"
import Cryptids from "./Pages/Cryptids";


const routes = [
    {
        path: '/',
        element: <App/>,
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

            }
               
        ]

    }
]

export default routes;