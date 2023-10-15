import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import Books from "@/pages/Books";
import BookDetails from "@/pages/BookDetails";
import LogIn from "@/pages/LogIn";
import SignUp from "@/pages/SignUp";
import AddNewBook from "@/pages/AddNewBook";
import EditBook from "@/pages/EditBook";
import { WishList } from "@/pages/WishList";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        index: true,
        element: <Books />,
      },
      {
        path: "/book-details/:id",
        index: true,
        element: <BookDetails />,
      },
      {
        path: "/wish-list/:id",
        index: true,
        element: <WishList />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/add-new-book",
    element: <AddNewBook />,
  },
  {
    path: "/edit-book/:id",
    element: <EditBook />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

export default routes;
