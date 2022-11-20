import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Homepage from "./pages/Homepage/Homepage";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path:'/about',
                element: <About />
            }
        ]
    },
])