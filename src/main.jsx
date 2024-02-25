import React from 'react'
import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import Home from './pages/Home/Home.jsx' 
import Home2 from './pages/Home/Home2.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx'
import './index.css'

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
            <Home2 />
          </>
        )
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Projects",
        element: <Projects />
      },
      {
        path: "/Contact",
        element: <Contact />
      },
    ],
  },
]);


// Initialize the react router
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
);
