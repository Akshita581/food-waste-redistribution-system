import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DonorDashboard from './pages/donor/DonorDashboard'
import CreateDonation from './pages/donor/CreateDonation'
import MyDonations from './pages/donor/MyDonations'
import DonationDetails from './pages/donor/DonationDetails'
import NGODashboard from './pages/ngo/NGODashboard'
import AvailableFood from './pages/ngo/AvailableFood'
import FoodDetails from './pages/ngo/FoodDetails'
import MyRequests from './pages/ngo/MyRequests'
import RequestDetails from './pages/ngo/RequestDetails'
import VolunteerDashboard from './pages/volunteer/VolunteerDashboard'
import Assignments from './pages/volunteer/Assignments'
import AssignmentDetails from './pages/volunteer/AssignmentDetails'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminDonations from './pages/admin/AdminDonations'
import AdminRequests from './pages/admin/AdminRequests'
import AdminAssignments from './pages/admin/AdminAssignments'
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
        <Route path="/available-food" element={<AvailableFood />} />
        <Route path="/food-details/:id" element={<FoodDetails />} />
        <Route path="/my-requests" element={<MyRequests />} />
        <Route path="/request-details/:id" element={<RequestDetails />} />
        <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/assignment-details/:id" element={<AssignmentDetails />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/admin-donations" element={<AdminDonations />} />
        <Route path="/admin-requests" element={<AdminRequests />} />
        <Route path="/admin-assignments" element={<AdminAssignments />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App