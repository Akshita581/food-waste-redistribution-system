import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

/**
 * Initial Sample Food Requests Data
 * (Frontend demo data representing NGO food requests)
 */
const INITIAL_REQUESTS = [
    {
        id: 1,
        food: 'Cooked Meals',
        category: 'Cooked Food',
        ngo: 'Helping Hands NGO',
        quantity: '20 Meals',
        date: '24 Sep 2026',
        status: 'Pending',
        beneficiaries: 50,
        contactPerson: 'Anjali Verma (+91 98123 45678)',
        purpose: 'Evening community meal distribution for underprivileged families in Sector 12.',
        deliveryLocation: 'Helping Hands Community Center, Sector 12, Mathura'
    },
    {
        id: 2,
        food: 'Rice',
        category: 'Rice & Grains',
        ngo: 'Community Care NGO',
        quantity: '15 Kg',
        date: '23 Sep 2026',
        status: 'Approved',
        beneficiaries: 80,
        contactPerson: 'Suresh Kumar (+91 95432 10987)',
        purpose: 'Daily nutrition kitchen for shelter home residents and elderly individuals.',
        deliveryLocation: 'Community Care Shelter Home, Vrindavan Road, Mathura'
    },
    {
        id: 3,
        food: 'Bread',
        category: 'Bread & Bakery',
        ngo: 'Helping Hands NGO',
        quantity: '30 Packets',
        date: '20 Sep 2026',
        status: 'Completed',
        beneficiaries: 60,
        contactPerson: 'Anjali Verma (+91 98123 45678)',
        purpose: 'Evening snack distribution at child welfare daycare center.',
        deliveryLocation: 'Helping Hands Center, Sector 12, Mathura'
    },
    {
        id: 4,
        food: 'Fresh Fruits',
        category: 'Fruits & Vegetables',
        ngo: 'Care Foundation NGO',
        quantity: '10 Kg',
        date: '19 Sep 2026',
        status: 'Rejected',
        beneficiaries: 40,
        contactPerson: 'Dr. Meena Iyer (+91 94123 98765)',
        purpose: 'Nutrition care pack distribution for senior care facility.',
        deliveryLocation: 'Care Foundation Home, Mathura Cantt'
    },
    {
        id: 5,
        food: 'Vegetable Curry',
        category: 'Cooked Food',
        ngo: 'Hope Shelter NGO',
        quantity: '12 Kg',
        date: '25 Sep 2026',
        status: 'Pending',
        beneficiaries: 45,
        contactPerson: 'Rajesh Mehra (+91 93456 78901)',
        purpose: 'Night shelter dinner supply for unhoused citizens.',
        deliveryLocation: 'Hope Night Shelter, Station Road, Mathura'
    },
    {
        id: 6,
        food: 'Packaged Snacks',
        category: 'Packaged Food',
        ngo: 'Smile Welfare NGO',
        quantity: '40 Packets',
        date: '26 Sep 2026',
        status: 'Pending',
        beneficiaries: 70,
        contactPerson: 'Pooja Tiwari (+91 92345 67890)',
        purpose: 'Weekend supplementary nutrition drive for street children.',
        deliveryLocation: 'Smile Learning Hub, Highway Colony, Mathura'
    }
]

function AdminRequests() {
    const [requests, setRequests] = useState(INITIAL_REQUESTS)
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [selectedRequest, setSelectedRequest] = useState(null)

    // Update request status (Approve / Reject) in local UI state
    const handleUpdateStatus = (requestId, newStatus) => {
        setRequests((prevRequests) =>
            prevRequests.map((req) => {
                if (req.id === requestId) {
                    return { ...req, status: newStatus }
                }
                return req
            })
        )
        if (selectedRequest && selectedRequest.id === requestId) {
            setSelectedRequest((prev) => ({ ...prev, status: newStatus }))
        }
    }

    // Status badge CSS helper
    const getStatusBadgeClass = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'admin-status-pending'
            case 'approved':
                return 'admin-status-approved'
            case 'completed':
                return 'admin-status-delivered'
            case 'rejected':
                return 'admin-status-rejected'
            default:
                return 'admin-status-default'
        }
    }

    // Filter list
    const filteredRequests = requests.filter((req) => {
        const matchesStatus = statusFilter === 'All' || req.status.toLowerCase() === statusFilter.toLowerCase()
        const matchesSearch =
            req.food.toLowerCase().includes(searchTerm.toLowerCase()) ||
            req.ngo.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesStatus && matchesSearch
    })

    const pendingCount = requests.filter((r) => r.status === 'Pending').length
    const approvedCount = requests.filter((r) => r.status === 'Approved').length
    const completedCount = requests.filter((r) => r.status === 'Completed').length
    const rejectedCount = requests.filter((r) => r.status === 'Rejected').length

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
                            <span className="admin-page-tag">NGO REQUEST QUEUE</span>
                            <h1 className="admin-page-title">Manage Food Requests</h1>
                            <p className="admin-page-subtitle">
                                Review, approve, and track food requests submitted by verified NGO partners.
                            </p>
                        </div>
                        <div className="admin-header-badge">
                            <span className="admin-badge-count">{requests.length} Requests Total</span>
                        </div>
                    </header>

                    {/* Summary Metric Cards */}
                    <div className="admin-users-stats-row">
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Total Requests</span>
                            <strong className="admin-stat-small-value">{requests.length}</strong>
                        </div>
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Pending Review</span>
                            <strong className="admin-stat-small-value text-amber">{pendingCount}</strong>
                        </div>
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Approved</span>
                            <strong className="admin-stat-small-value text-blue">{approvedCount}</strong>
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
                                placeholder="Search by food name or NGO..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="admin-search-input"
                            />
                        </div>

                        <div className="admin-filters-group">
                            <label htmlFor="req-status-filter" className="admin-filter-label">Filter by Status:</label>
                            <select
                                id="req-status-filter"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="admin-filter-select"
                            >
                                <option value="All">All Statuses</option>
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Completed">Completed</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>
                    </div>

                    {/* Requests Table Card */}
                    <section className="admin-table-card">
                        <div className="admin-table-responsive">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Food</th>
                                        <th>NGO</th>
                                        <th>Quantity</th>
                                        <th>Requested Date</th>
                                        <th>Status</th>
                                        <th style={{ textAlign: 'right' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredRequests.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="admin-empty-cell">
                                                No requests found matching your search.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredRequests.map((req) => (
                                            <tr key={req.id}>
                                                <td>
                                                    <div className="admin-item-cell">
                                                        <strong className="admin-item-title">{req.food}</strong>
                                                        <span className="admin-item-sub">Req #{req.id} • {req.category}</span>
                                                    </div>
                                                </td>
                                                <td className="admin-ngo-cell">
                                                    <span className="admin-ngo-name">{req.ngo}</span>
                                                </td>
                                                <td className="admin-quantity-cell highlight">{req.quantity}</td>
                                                <td className="admin-date-cell">{req.date}</td>
                                                <td>
                                                    <span className={`admin-status-badge ${getStatusBadgeClass(req.status)}`}>
                                                        <span className="admin-status-dot"></span>
                                                        {req.status}
                                                    </span>
                                                </td>
                                                <td style={{ textAlign: 'right' }}>
                                                    <div className="admin-actions-cell-right">
                                                        <button
                                                            type="button"
                                                            className="admin-btn-action-view"
                                                            onClick={() => setSelectedRequest(req)}
                                                        >
                                                            View
                                                        </button>
                                                        {req.status === 'Pending' && (
                                                            <>
                                                                <button
                                                                    type="button"
                                                                    className="admin-btn-action-approve"
                                                                    onClick={() => handleUpdateStatus(req.id, 'Approved')}
                                                                    title="Approve this request"
                                                                >
                                                                    Approve
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="admin-btn-action-reject"
                                                                    onClick={() => handleUpdateStatus(req.id, 'Rejected')}
                                                                    title="Reject this request"
                                                                >
                                                                    Reject
                                                                </button>
                                                            </>
                                                        )}
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

            {/* VIEW REQUEST DETAILS MODAL */}
            {selectedRequest && (
                <div className="admin-modal-overlay" onClick={() => setSelectedRequest(null)}>
                    <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="admin-modal-header">
                            <div>
                                <span className="admin-modal-tag">REQUEST DETAILS</span>
                                <h2 className="admin-modal-title">{selectedRequest.food}</h2>
                            </div>
                            <button
                                type="button"
                                className="admin-modal-close"
                                onClick={() => setSelectedRequest(null)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="admin-modal-body">
                            <div className="admin-modal-grid">
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Request ID</span>
                                    <span className="admin-modal-value">#REQ-00{selectedRequest.id}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Requested Item</span>
                                    <span className="admin-modal-value font-bold">{selectedRequest.food}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">NGO Partner</span>
                                    <span className="admin-modal-value font-bold">{selectedRequest.ngo}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Contact Person</span>
                                    <span className="admin-modal-value">{selectedRequest.contactPerson}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Quantity Needed</span>
                                    <span className="admin-modal-value highlight">{selectedRequest.quantity}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Target Beneficiaries</span>
                                    <span className="admin-modal-value">~{selectedRequest.beneficiaries} People</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Current Status</span>
                                    <span className="admin-modal-value">
                                        <span className={`admin-status-badge ${getStatusBadgeClass(selectedRequest.status)}`}>
                                            <span className="admin-status-dot"></span>
                                            {selectedRequest.status}
                                        </span>
                                    </span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Date Submitted</span>
                                    <span className="admin-modal-value">{selectedRequest.date}</span>
                                </div>
                                <div className="admin-modal-info-item full-width">
                                    <span className="admin-modal-label">Delivery / Distribution Location</span>
                                    <span className="admin-modal-value">🏢 {selectedRequest.deliveryLocation}</span>
                                </div>
                                <div className="admin-modal-info-item full-width">
                                    <span className="admin-modal-label">Purpose & Distribution Plan</span>
                                    <span className="admin-modal-value notes-text">{selectedRequest.purpose}</span>
                                </div>
                            </div>
                        </div>

                        <div className="admin-modal-footer">
                            {selectedRequest.status === 'Pending' ? (
                                <>
                                    <button
                                        type="button"
                                        className="admin-btn-action-approve"
                                        onClick={() => handleUpdateStatus(selectedRequest.id, 'Approved')}
                                    >
                                        ✓ Approve Request
                                    </button>
                                    <button
                                        type="button"
                                        className="admin-btn-action-reject"
                                        onClick={() => handleUpdateStatus(selectedRequest.id, 'Rejected')}
                                    >
                                        ✕ Reject Request
                                    </button>
                                </>
                            ) : (
                                <button
                                    type="button"
                                    className="admin-btn-action-view"
                                    onClick={() => handleUpdateStatus(selectedRequest.id, 'Pending')}
                                >
                                    Reset to Pending
                                </button>
                            )}
                            <button
                                type="button"
                                className="admin-btn-modal-close"
                                onClick={() => setSelectedRequest(null)}
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

export default AdminRequests
