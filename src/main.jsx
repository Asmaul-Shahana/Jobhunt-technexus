import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Jobs from './components/Jobs/Jobs.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Errorpage from './components/Errorpage/Errorpage.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import { getJobFromLocalStorage } from './utilities/fakedb.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "jobs",
        element: <Jobs></Jobs>,
        loader: getJobFromLocalStorage
      },
      {
        path: "/job/:id",
        element: <JobDetails />
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>
      },
      {
        path: '*',
        element: <Errorpage></Errorpage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
