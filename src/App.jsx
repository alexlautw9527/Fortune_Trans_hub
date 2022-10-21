import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/sign-up';
import Home from './pages/home';
import ProtectedRoute from './services/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<SignUp />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
