import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Users from './pages/Users';
import EditUser from './pages/EditUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { token } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-dark-bg">
        {/* Toast Container (Globally Available) */}
        <ToastContainer position="top-right" autoClose={3000} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/users"
            element={token ? <Users /> : <Navigate to="/" />}
          />
          <Route
            path="/edit/:id"
            element={token ? <EditUser /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
