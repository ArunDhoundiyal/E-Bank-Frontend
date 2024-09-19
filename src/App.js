import {Routes, Route, Navigate} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <Routes>
    <Route path="/ebank/login" element={<Login />} />
    <Route path="/" element={<Home />} />
    <Route path="/not-found" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/not-found" />} />
  </Routes>
)

export default App