import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Initial from './pages/initial'
import News from './pages/news'
import Music from './pages/music'
import Notes from './pages/notes'

const router = createBrowserRouter([
   { path:"/", element: <Initial /> },
   { path:"/news", element: <News /> },
   { path:"/music", element: <Music /> },
   { path:"/notes", element: <Notes /> }
]);

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>

)
