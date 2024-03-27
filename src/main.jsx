import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout';
import ListedBooks from './pages/ListedBooks';
import PageToRead from './pages/PageToRead';
import Home from './pages/Home';
import BookDetails from './components/BookDetails';
import ReadBook from './components/ReadBook';
import WishlistBooks from './components/WishlistBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('../public/bookData.json'),

      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path:"readBooks",
            element: <ReadBook></ReadBook>,
            loader:()=>fetch('../public/bookData.json'),
          },
          {
            path:"wishlistBooks",
            element: <WishlistBooks></WishlistBooks>,
            loader:()=>fetch('../public/bookData.json'),
          }
        ]
      },
      {
        path: "/pagesToRead",
        element: <PageToRead></PageToRead>,
        loader:()=>fetch('../public/bookData.json'),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader:()=>fetch('../public/bookData.json'),
      }
    ]

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
