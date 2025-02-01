import { createBrowserRouter, } from "react-router-dom";
import About from "./About";
import Contact from "./Contract";
import Education from "./Education";
import Home from "./Home";
import MainLayOut from "./MainLayOut";
import AllProject from "./AllProjects";
import Error from "./Error";

const Routers = createBrowserRouter([
    
    {
        path: "/",
        element:<MainLayOut></MainLayOut>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/project",
                element:<AllProject></AllProject>
            },
            {
                path:"/education",
                element:<Education></Education>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            },
        ]
    }
])

export default Routers;