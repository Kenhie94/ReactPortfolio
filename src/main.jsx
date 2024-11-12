import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/App.css'

import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ResumePage from './pages/ResumePage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      }, 
      {
        path: '/projects',
        element: <ProjectPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/resume',
        element: <ResumePage />
      }
    ]
  }
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}