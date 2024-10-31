import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import Registrarse from './Routes/Registrarse.tsx'
import VistaR from './Routes/vistaRecepcionista.tsx'
import ProtectedRoute from './Routes/rutaprotegida.tsx'
import { AuthProvider } from './auth/autotenticación.tsx'


const router= createBrowserRouter(
  [{
    path: "/",
    element: <App/>,
  },
  {
    path: "/registrarse",
    element: <Registrarse/>,
  },
  {
    path: "/",
    element: <ProtectedRoute/>,
    children: [{
      path: "/vistarecepcionista",
      element: <VistaR/> 
    }]
  },
]
);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
