import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DonorDashboard from './pages/donor/DonorDashboard'
import CreateDonation from './pages/donor/CreateDonation'
import MyDonations from './pages/donor/MyDonations'
import DonationDetails from './pages/donor/DonationDetails'
import NGODashboard from './pages/ngo/NGODashboard'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/create-donation" element={<CreateDonation />} />
        <Route path="/my-donations" element={<MyDonations />} />
        <Route path="/donation-details/:id" element={<DonationDetails />} />
        <Route path="/ngo-dashboard" element={<NGODashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App