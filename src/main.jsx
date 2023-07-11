import React from "react";
import ReactDOM from "react-dom/client";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
// import Header from "./routes/Header/header.jsx";
// import Feed from "./routes/FeedContact/Feed.jsx";

const router = createBrowserRouter([
 {
  path: "/",
  element: <App />,
  children: [
    // {
    //   path: "/",
    //   element: <Header />,
    // },
    // {
    //   // path: "/contact",
    //   // element: <Feed />,
    // }
  ]
}
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
