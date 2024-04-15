import { createBrowserRouter   } from "react-router-dom";
import { App } from "../App";
import { About, Home, Listado, NotFound } from "../Pages";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/listado",
                element: <Listado />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])