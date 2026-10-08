import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

/**
 * Initial Sample Volunteer Assignments Data
 * (Frontend demo data consistent with FoodBridge volunteer logistics)
 */
const INITIAL_ASSIGNMENTS = [
    {
        id: 1,
        food: 'Cooked Meals',
        category: 'Cooked Food',
        quantity: '20 Meals',
        volunteer: 'Rahul Sharma',
        volunteerPhone: '+91 97234 56789',
        vehicle: 'Motorbike with Insulated Carrier',
        pickupLocation: 'GLA University, Mathura',
        deliveryLocation: 'Mathura Community Center',
        pickupDate: '24 Sep 2026',
        pickupTime: '5:00 PM',
        deliveryTime: '6:00 PM',
        status: 'Assigned',
        notes: 'Collect freshly prepared meals and deliver them carefully to the community center.'
    },
    {
        id: 2,
        food: 'Rice',
        category: 'Rice & Grains',
        quantity: '15 Kg',
        volunteer: 'Amit Kumar',
        volunteerPhone: '+91 96123 45678',
        vehicle: 'E-Rickshaw Cargo',
        pickupLocation: 'Mathura City',
        deliveryLocation: 'Helping Hands NGO',
        pickupDate: '25 Sep 2026',
        pickupTime: '4:00 PM',
        deliveryTime: '5:00 PM',
        status: 'Pickup Completed',
        notes: 'Rice has already been picked up and secured in transit sacks.'
    },
    {
        id: 3,
        food: 'Fresh Fruits',
        category: 'Fruits & Vegetables',
        quantity: '10 Kg',
        volunteer: 'Priya Singh',
        volunteerPhone: '+91 94321 09876',
        vehicle: 'Four-Wheeler Van',
        pickupLocation: 'Mathura Market',
        deliveryLocation: 'Community Shelter',
        pickupDate: '26 Sep 2026',
        pickupTime: '3:00 PM',
        deliveryTime: '4:00 PM',
        status: 'In Delivery',
        notes: 'Handle the fruit boxes carefully during transit.'
    },
    {
        id: 4,
        food: 'Bread',
        category: 'Bread & Bakery',
        quantity: '30 Packets',
        volunteer: 'Rahul Sharma',
        volunteerPhone: '+91 97234 56789',
        vehicle: 'Motorbike with Delivery Bag',
        pickupLocation: 'Mathura Bakery',
        deliveryLocation: 'Helping Hands NGO',
        pickupDate: '23 Sep 2026',
        pickupTime: '6:00 PM',
        deliveryTime: '7:00 PM',
        status: 'Completed',
        notes: 'Bread packets delivered successfully to NGO representative.'
    },
    {
        id: 5,
        food: 'Vegetable Curry',
        category: 'Cooked Food',
        quantity: '12 Kg',
        volunteer: 'Sneha Patel',
        volunteerPhone: '+91 93210 98765',
        vehicle: 'Cargo Scooter',
        pickupLocation: 'Mathura City',
        deliveryLocation: 'Community Shelter',
        pickupDate: '27 Sep 2026',
        pickupTime: '5:30 PM',
        deliveryTime: '6:30 PM',
        status: 'Assigned',
        notes: 'Keep thermal food containers upright during transit.'
    },
    {
        id: 6,
        food: 'Packaged Snacks',
        category: 'Packaged Food',
        quantity: '50 Packets',
        volunteer: 'Vikas Verma',
        volunteerPhone: '+91 91234 56780',
        vehicle: 'Hatchback Car',
        pickupLocation: 'Mathura Event Hall',
        deliveryLocation: 'Community Center',
        pickupDate: '28 Sep 2026',
        pickupTime: '2:00 PM',
        deliveryTime: '3:00 PM',
        status: 'Completed',
        notes: 'Delivered all sealed snack packets on schedule.'
    }
]

function AdminAssignments() {
    const [assignments] = useState(INITIAL_ASSIGNMENTS)
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [selectedAssignment, setSelectedAssignment] = useState(null)

    // Helper for status badge class
    const getStatusBadgeClass = (status) => {
        switch (status.toLowerCase()) {
            case 'assigned':
                return 'admin-status-pending'
            case 'pickup completed':
            case 'in delivery':
                return 'admin-status-picked'
            case 'completed':
                return 'admin-status-delivered'
            default:
                return 'admin-status-default'
        }
    }

    // Filter logic
    const filteredAssignments = assignments.filter((task) => {
        const matchesStatus =
            statusFilter === 'All' || task.status.toLowerCase() === statusFilter.toLowerCase()
        const matchesSearch =
            task.food.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.volunteer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.pickupLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.deliveryLocation.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesStatus && matchesSearch
    })

    const assignedCount = assignments.filter((a) => a.status === 'Assigned').length
    const inProgressCount = assignments.filter(
        (a) => a.status === 'Pickup Completed' || a.status === 'In Delivery'
    ).length
    const completedCount = assignments.filter((a) => a.status === 'Completed').length

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
                            <span className="admin-page-tag">LOGISTICS & DISPATCH</span>
                            <h1 className="admin-page-title">Manage Volunteer Assignments</h1>
                            <p className="admin-page-subtitle">
                                Monitor real-time food collection and delivery routes managed by volunteer couriers.
                            </p>
                        </div>
                        <div className="admin-header-badge">
                            <span className="admin-badge-count">{assignments.length} Tasks Total</span>
                        </div>
                    </header>

                    {/* Summary Metric Cards */}
                    <div className="admin-users-stats-row">
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Total Assignments</span>
                            <strong className="admin-stat-small-value">{assignments.length}</strong>
                        </div>
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Assigned / Pending</span>
                            <strong className="admin-stat-small-value text-amber">{assignedCount}</strong>
                        </div>
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">In Transit / Picked</span>
                            <strong className="admin-stat-small-value text-blue">{inProgressCount}</strong>
                        </div>
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Completed</span>
                            <strong className="admin-stat-small-value text-green">{completedCount}</strong>
                        </div>
                    </div>

                    {/* Controls: Search & Status Filter */}
                    <div className="admin-controls-card">
                        <div className="admin-search-wrapper">
                            <span className="admin-search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Search by food, volunteer, or route location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="admin-search-input"
                            />
                        </div>

                        <div className="admin-filters-group">
                            <label htmlFor="assign-status-filter" className="admin-filter-label">Filter by Status:</label>
                            <select
                                id="assign-status-filter"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="admin-filter-select"
                            >
                                <option value="All">All Statuses</option>
                                <option value="Assigned">Assigned</option>
                                <option value="Pickup Completed">Pickup Completed</option>
                                <option value="In Delivery">In Delivery</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>

                    {/* Assignments Table Card */}
                    <section className="admin-table-card">
                        <div className="admin-table-responsive">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Food</th>
                                        <th>Volunteer</th>
                                        <th>Pickup Location</th>
                                        <th>Delivery Location</th>
                                        <th>Pickup Time</th>
                                        <th>Status</th>
                                        <th style={{ textAlign: 'right' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredAssignments.length === 0 ? (
                                        <tr>
                                            <td colSpan="7" className="admin-empty-cell">
                                                No assignments found matching your search.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredAssignments.map((task) => (
                                            <tr key={task.id}>
                                                <td>
                                                    <div className="admin-item-cell">
                                                        <strong className="admin-item-title">{task.food}</strong>
                                                        <span className="admin-item-sub">Task #{task.id} • {task.quantity}</span>
                                                    </div>
                                                </td>
                                                <td className="admin-volunteer-cell">
                                                    <div className="admin-volunteer-info">
                                                        <span className="admin-volunteer-icon">🚴</span>
                                                        <span className="admin-volunteer-name">{task.volunteer}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="admin-location-cell">
                                                        <span className="admin-loc-pin">📍</span>
                                                        <span>{task.pickupLocation}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="admin-location-cell">
                                                        <span className="admin-loc-building">🏢</span>
                                                        <span>{task.deliveryLocation}</span>
                                                    </div>
                                                </td>
                                                <td className="admin-date-cell">
                                                    <div>{task.pickupDate}</div>
                                                    <span className="admin-time-sub">{task.pickupTime}</span>
                                                </td>
                                                <td>
                                                    <span className={`admin-status-badge ${getStatusBadgeClass(task.status)}`}>
                                                        <span className="admin-status-dot"></span>
                                                        {task.status}
                                                    </span>
                                                </td>
                                                <td style={{ textAlign: 'right' }}>
                                                    <button
                                                        type="button"
                                                        className="admin-btn-action-view"
                                                        onClick={() => setSelectedAssignment(task)}
                                                    >
                                                        View
                                                    </button>
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

            {/* VIEW ASSIGNMENT DETAILS MODAL */}
            {selectedAssignment && (
                <div className="admin-modal-overlay" onClick={() => setSelectedAssignment(null)}>
                    <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="admin-modal-header">
                            <div>
                                <span className="admin-modal-tag">ASSIGNMENT LOGISTICS</span>
                                <h2 className="admin-modal-title">{selectedAssignment.food}</h2>
                            </div>
                            <button
                                type="button"
                                className="admin-modal-close"
                                onClick={() => setSelectedAssignment(null)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="admin-modal-body">
                            <div className="admin-modal-grid">
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Task ID</span>
                                    <span className="admin-modal-value">#TSK-00{selectedAssignment.id}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Item & Quantity</span>
                                    <span className="admin-modal-value highlight">{selectedAssignment.food} ({selectedAssignment.quantity})</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Assigned Volunteer</span>
                                    <span className="admin-modal-value font-bold">{selectedAssignment.volunteer}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Volunteer Phone</span>
                                    <span className="admin-modal-value">{selectedAssignment.volunteerPhone}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Vehicle Type</span>
                                    <span className="admin-modal-value">{selectedAssignment.vehicle}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Current Status</span>
                                    <span className="admin-modal-value">
                                        <span className={`admin-status-badge ${getStatusBadgeClass(selectedAssignment.status)}`}>
                                            <span className="admin-status-dot"></span>
                                            {selectedAssignment.status}
                                        </span>
                                    </span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Pickup Schedule</span>
                                    <span className="admin-modal-value">{selectedAssignment.pickupDate}, {selectedAssignment.pickupTime}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Delivery Schedule</span>
                                    <span className="admin-modal-value">{selectedAssignment.pickupDate}, {selectedAssignment.deliveryTime}</span>
                                </div>
                                <div className="admin-modal-info-item full-width">
                                    <span className="admin-modal-label">Pickup Point</span>
                                    <span className="admin-modal-value">📍 {selectedAssignment.pickupLocation}</span>
                                </div>
                                <div className="admin-modal-info-item full-width">
                                    <span className="admin-modal-label">Delivery Point</span>
                                    <span className="admin-modal-value">🏢 {selectedAssignment.deliveryLocation}</span>
                                </div>
                                <div className="admin-modal-info-item full-width">
                                    <span className="admin-modal-label">Logistics Instructions</span>
                                    <span className="admin-modal-value notes-text">{selectedAssignment.notes}</span>
                                </div>
                            </div>
                        </div>

                        <div className="admin-modal-footer">
                            <button
                                type="button"
                                className="admin-btn-modal-close"
                                onClick={() => setSelectedAssignment(null)}
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

export default AdminAssignments
