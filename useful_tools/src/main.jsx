import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

const exercices = [
  {
    path: '/',
    element: <div>Homepage</div>,
  },
];


const router = createBrowserRouter([
  ...exercices.map(({ path, element }) => ({
    path,
    element: (
      <>
        <Link to="/">Homepage</Link>
        <h1>Exercice {path.slice(1)}</h1>
        {element}
      </>
    ),
  })),
  {
    path: '/',
    element: (
      <>
        <h1>Home</h1>
        <ul>
          {exercices.map(({ path }) => (
            <li key={path}>
              <a href={path}>Exercice {path.slice(1)}</a>
            </li>
          ))}
        </ul>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
