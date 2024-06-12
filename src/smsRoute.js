import {
    createBrowserRouter 
  } from "react-router-dom";
import Home from "./components/Home";
import AddLibrary from "./components/AddLibrary";
import AddGroup from "./components/AddGroup";
import AddMessage from "./components/AddMessage";
import AddContact from "./components/AddContact";
import App from "./components/App";
import PageNotFound from "./components/PageNotFound";
 

  const smsRoute =  createBrowserRouter( [
    {
        path: "/",
        element: <App />,
        children: [
            {
              path: "",
              element: <Home/>,
            },
            {
                path: "add-library",
                element: <AddLibrary></AddLibrary>,
              },
              {
                path: "add-group",
                element: <AddGroup/>,
              },
              {
                path: "add-message",
                element: <AddMessage />,
              },
              {
                path: "add-contact",
                element: <AddContact />,
              },
          ],

      },
      {
        path:'*',
        element: <PageNotFound/>
      }
  ])

  export default smsRoute;