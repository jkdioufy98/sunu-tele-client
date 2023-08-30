import { createBrowserRouter } from "react-router-dom";
import EmptyLayout from "../layouts/main-layout/main-layout";
import BackOffice from "../layouts/back-office/back-office";
import FrontOffice from "../layouts/front-office/front-office";
import Signin from "../pages/signin/signin";
import Signup from "../pages/signup/signup";
import Landing from "../pages/landing/landing";
import BaseLayout from "../layouts/base-layout/base-layout";

const mainRoutes = createBrowserRouter([
    {
        path: "",
        element: <EmptyLayout />,
        children: [
            {
                path: "",
                element: <FrontOffice />,
                children: [
                    {
                        path: "",
                        element: <Landing />
                    },
                ]
            },
            {
                path: "",
                element: <BaseLayout />,
                children: [
                    {
                        path: "signin",
                        element: <Signin />
                    },
                    {
                        path: "signup",
                        element: <Signup />
                    }
                ]
            },
            {
                path: "back-office",
                element: <BackOffice />
            }
        ]
    },
    {
        path: "*",
        element: <div>404 page</div>
    }
])

export default mainRoutes;