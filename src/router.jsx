import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Logement from "./pages/logement/logement";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:'/logement/:id',
                element: <Logement />
            },
            {
                path:'/about',
                element: <About />
            }
        ]
    },
])