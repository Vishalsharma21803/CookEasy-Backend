import './App.css'
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import the styles

function App() {
 

  return (
    <>
    <ToastContainer position="top-center" autoClose={2000} />

    <AuthProvider>
     
   
      <AppRoutes />
     
    
    </AuthProvider>

    
     
    </>
  )
}

export default App
