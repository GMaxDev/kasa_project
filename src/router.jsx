import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import Homepage from "./pages/Homepage/Homepage";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path:'/about',
                element: <About />
            }
        ]
    },
])