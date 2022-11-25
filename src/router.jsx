import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Logement from "./pages/Logement/Logement";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        errorElement: <ErrorPage />,
        children: [
            {   key:"home",
                index: true,
                element: <Home />
            },
            {
                key:"aprtment",
                path:'/logement/:id',
                element: <Logement />
            },
            {
                key:"about",
                path:'/about',
                element: <About />
            }
        ]
    },
])