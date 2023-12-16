import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home'
import About from './components/About/About';
import { Route } from 'react-router-dom';
import Contact from './components/Contact/Contact'
import User from './components/User/User';
import Github from './components/Github/Github';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element: <About/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route path='github' element={<Github/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();//it is the report that measures the perfomance of the web or user experience in the react app that they are using! it is a thrid party essential used by the react app .

