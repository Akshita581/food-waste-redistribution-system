import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

/**
 * Initial Sample Users Data
 * (Frontend demo data representing registered platform users)
 */
const INITIAL_USERS = [
    {
        id: 1,
        name: 'Akshita Maheshwari',
        email: 'akshita@example.com',
        role: 'Donor',
        status: 'Active',
        phone: '+91 98765 43210',
        location: 'GLA University Campus, Mathura',
        joinedDate: '15 Aug 2026',
        contributions: '12 Donations Listed'
    },
    {
        id: 2,
        name: 'Helping Hands NGO',
        email: 'ngo@example.com',
        role: 'NGO',
        status: 'Active',
        phone: '+91 98123 45678',
        location: 'Sector 14, Mathura',
        joinedDate: '20 Aug 2026',
        contributions: '18 Food Requests Fulfilled'
    },
    {
        id: 3,
        name: 'Rahul Sharma',
        email: 'volunteer@example.com',
        role: 'Volunteer',
        status: 'Active',
        phone: '+91 97234 56789',
        location: 'Civil Lines, Mathura',
        joinedDate: '01 Sep 2026',
        contributions: '24 Successful Deliveries'
    },
    {
        id: 4,
        name: 'Diya Sharma',
        email: 'diya@example.com',
        role: 'Donor',
        status: 'Active',
        phone: '+91 96543 21098',
        location: 'Krishna Nagar, Mathura',
        joinedDate: '05 Sep 2026',
        contributions: '8 Donations Listed'
    },
    {
        id: 5,
        name: 'Community Care NGO',
        email: 'contact@communitycare.org',
        role: 'NGO',
        status: 'Active',
        phone: '+91 95432 10987',
        location: 'Vrindavan Road, Mathura',
        joinedDate: '10 Sep 2026',
        contributions: '15 Food Requests Fulfilled'
    },
    {
        id: 6,
        name: 'Priya Singh',
        email: 'priya.s@example.com',
        role: 'Volunteer',
        status: 'Active',
        phone: '+91 94321 09876',
        location: 'Highway Plaza, Mathura',
        joinedDate: '12 Sep 2026',
        contributions: '16 Successful Deliveries'
    }
]

function AdminUsers() {
    const [users, setUsers] = useState(INITIAL_USERS)
    const [searchTerm, setSearchTerm] = useState('')
    const [roleFilter, setRoleFilter] = useState('All')
    const [selectedUser, setSelectedUser] = useState(null)

    // Toggle user status (Active / Disabled) in local UI state
    const handleToggleStatus = (userId) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) => {
                if (user.id === userId) {
                    const nextStatus = user.status === 'Active' ? 'Disabled' : 'Active'
                    return { ...user, status: nextStatus }
                }
                return user
            })
        )
    }

    // Role badge color helper
    const getRoleBadgeClass = (role) => {
        switch (role.toLowerCase()) {
            case 'donor':
                return 'admin-role-donor'
            case 'ngo':
                return 'admin-role-ngo'
            case 'volunteer':
                return 'admin-role-volunteer'
            default:
                return 'admin-role-default'
        }
    }

    // Filter users according to role filter and search query
    const filteredUsers = users.filter((user) => {
        const matchesRole = roleFilter === 'All' || user.role.toLowerCase() === roleFilter.toLowerCase()
        const matchesSearch =
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesRole && matchesSearch
    })

    const donorCount = users.filter((u) => u.role === 'Donor').length
    const ngoCount = users.filter((u) => u.role === 'NGO').length
    const volunteerCount = users.filter((u) => u.role === 'Volunteer').length

    return (
        <div className="admin-dashboard">
            {/* ADMIN NAVBAR */}
            <AdminNavbar />

            {/* MAIN CONTENT */}
            <main className="admin-main-content">
                <div className="admin-container">
                    {/* Back Navigation */}
                    <div className="admin-page-nav-bar">
                        <Link to="/admin-dashboard" className="admin-back-link">
                            ← Back to Dashboard
                        </Link>
                    </div>

                    {/* Page Header */}
                    <header className="admin-page-header">
                        <div>
                            <span className="admin-page-tag">USER MANAGEMENT</span>
                            <h1 className="admin-page-title">Manage Platform Users</h1>
                            <p className="admin-page-subtitle">
                                View, filter, and manage registered donors, partner NGOs, and delivery volunteers.
                            </p>
                        </div>
                        <div className="admin-header-badge">
                            <span className="admin-badge-count">{users.length} Users Total</span>
                        </div>
                    </header>

                    {/* Summary Metric Chips */}
                    <div className="admin-users-stats-row">
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Total Users</span>
                            <strong className="admin-stat-small-value">{users.length}</strong>
                        </div>
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Donors</span>
                            <strong className="admin-stat-small-value text-green">{donorCount}</strong>
                        </div>
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">NGO Partners</span>
                            <strong className="admin-stat-small-value text-blue">{ngoCount}</strong>
                        </div>
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Volunteers</span>
                            <strong className="admin-stat-small-value text-amber">{volunteerCount}</strong>
                        </div>
                    </div>

                    {/* Controls Bar: Search & Role Filter */}
                    <div className="admin-controls-card">
                        <div className="admin-search-wrapper">
                            <span className="admin-search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Search by user name or email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="admin-search-input"
                            />
                        </div>

                        <div className="admin-filters-group">
                            <label htmlFor="role-filter" className="admin-filter-label">Filter by Role:</label>
                            <select
                                id="role-filter"
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                                className="admin-filter-select"
                            >
                                <option value="All">All Roles</option>
                                <option value="Donor">Donors</option>
                                <option value="NGO">NGOs</option>
                                <option value="Volunteer">Volunteers</option>
                            </select>
                        </div>
                    </div>

                    {/* Users Table Card */}
                    <section className="admin-table-card">
                        <div className="admin-table-responsive">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th style={{ textAlign: 'right' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.length === 0 ? (
                                        <tr>
                                            <td colSpan="5" className="admin-empty-cell">
                                                No users found matching your search.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredUsers.map((user) => (
                                            <tr key={user.id}>
                                                <td>
                                                    <div className="admin-user-name-cell">
                                                        <div className="admin-avatar-small">
                                                            {user.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <strong className="admin-item-title">{user.name}</strong>
                                                            <span className="admin-item-sub">ID: #USR-00{user.id}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="admin-email-cell">{user.email}</td>
                                                <td>
                                                    <span className={`admin-role-badge ${getRoleBadgeClass(user.role)}`}>
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td>
                                                    <span
                                                        className={`admin-status-badge ${
                                                            user.status === 'Active'
                                                                ? 'admin-status-available'
                                                                : 'admin-status-rejected'
                                                        }`}
                                                    >
                                                        <span className="admin-status-dot"></span>
                                                        {user.status}
                                                    </span>
                                                </td>
                                                <td style={{ textAlign: 'right' }}>
                                                    <div className="admin-actions-cell-right">
                                                        <button
                                                            type="button"
                                                            className="admin-btn-action-view"
                                                            onClick={() => setSelectedUser(user)}
                                                        >
                                                            View
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className={
                                                                user.status === 'Active'
                                                                    ? 'admin-btn-action-disable'
                                                                    : 'admin-btn-action-enable'
                                                            }
                                                            onClick={() => handleToggleStatus(user.id)}
                                                        >
                                                            {user.status === 'Active' ? 'Disable' : 'Enable'}
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>

            {/* VIEW USER DETAILS MODAL */}
            {selectedUser && (
                <div className="admin-modal-overlay" onClick={() => setSelectedUser(null)}>
                    <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="admin-modal-header">
                            <div>
                                <span className="admin-modal-tag">USER PROFILE</span>
                                <h2 className="admin-modal-title">{selectedUser.name}</h2>
                            </div>
                            <button
                                type="button"
                                className="admin-modal-close"
                                onClick={() => setSelectedUser(null)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="admin-modal-body">
                            <div className="admin-modal-grid">
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">User ID</span>
                                    <span className="admin-modal-value">#USR-00{selectedUser.id}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Email Address</span>
                                    <span className="admin-modal-value">{selectedUser.email}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Platform Role</span>
                                    <span className="admin-modal-value">
                                        <span className={`admin-role-badge ${getRoleBadgeClass(selectedUser.role)}`}>
                                            {selectedUser.role}
                                        </span>
                                    </span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Account Status</span>
                                    <span className="admin-modal-value">
                                        <span
                                            className={`admin-status-badge ${
                                                selectedUser.status === 'Active'
                                                    ? 'admin-status-available'
                                                    : 'admin-status-rejected'
                                            }`}
                                        >
                                            <span className="admin-status-dot"></span>
                                            {selectedUser.status}
                                        </span>
                                    </span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Phone Number</span>
                                    <span className="admin-modal-value">{selectedUser.phone}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Joined Date</span>
                                    <span className="admin-modal-value">{selectedUser.joinedDate}</span>
                                </div>
                                <div className="admin-modal-info-item full-width">
                                    <span className="admin-modal-label">Location / Address</span>
                                    <span className="admin-modal-value">{selectedUser.location}</span>
                                </div>
                                <div className="admin-modal-info-item full-width">
                                    <span className="admin-modal-label">Platform Contribution</span>
                                    <span className="admin-modal-value highlight">{selectedUser.contributions}</span>
                                </div>
                            </div>
                        </div>

                        <div className="admin-modal-footer">
                            <button
                                type="button"
                                className={
                                    selectedUser.status === 'Active'
                                        ? 'admin-btn-action-disable'
                                        : 'admin-btn-action-enable'
                                }
                                onClick={() => {
                                    handleToggleStatus(selectedUser.id)
                                    setSelectedUser((prev) => ({
                                        ...prev,
                                        status: prev.status === 'Active' ? 'Disabled' : 'Active'
                                    }))
                                }}
                            >
                                {selectedUser.status === 'Active' ? 'Disable Account' : 'Activate Account'}
                            </button>
                            <button
                                type="button"
                                className="admin-btn-modal-close"
                                onClick={() => setSelectedUser(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminUsers
