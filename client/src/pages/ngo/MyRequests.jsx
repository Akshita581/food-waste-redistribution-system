import React from 'react'
import { Link } from 'react-router-dom'

export const REQUESTS_DATA = [
    {
        id: 1,
        food: 'Cooked Meals',
        category: 'Cooked Food',
        requestedQuantity: '20 Meals',
        date: '24 Sep 2026',
        status: 'Pending',
        reason: 'Community meal distribution for underprivileged families in Sector 12',
        peopleCount: 50,
        additionalMessage: 'We have volunteer pickup vehicles ready for collection at 5:00 PM.',
        pickupLocation: 'GLA University, Mathura',
        donor: 'Campus Cafeteria',
        foodAvailability: '20 Meals',
        foodId: 1
    },
    {
        id: 2,
        food: 'Rice',
        category: 'Rice & Grains',
        requestedQuantity: '15 Kg',
        date: '23 Sep 2026',
        status: 'Approved',
        reason: 'Daily nutrition kitchen for shelter home residents',
        peopleCount: 80,
        additionalMessage: 'Volunteers will arrive with airtight food containers.',
        pickupLocation: 'Mathura City',
        donor: 'Local Restaurant',
        foodAvailability: '15 Kg',
        foodId: 2
    },
    {
        id: 3,
        food: 'Bread',
        category: 'Bread & Bakery',
        requestedQuantity: '30 Packets',
        date: '20 Sep 2026',
        status: 'Completed',
        reason: 'Evening snack distribution at child welfare daycare center',
        peopleCount: 60,
        additionalMessage: 'Delivered and distributed successfully.',
        pickupLocation: 'Mathura Bakery',
        donor: 'Sunrise Bakery',
        foodAvailability: '30 Packets',
        foodId: 4
    },
    {
        id: 4,
        food: 'Fresh Fruits',
        category: 'Fruits & Vegetables',
        requestedQuantity: '10 Kg',
        date: '18 Sep 2026',
        status: 'Rejected',
        reason: 'Nutrition care pack distribution for senior care facility',
        peopleCount: 40,
        additionalMessage: 'Submitted after the donation allocation limit was reached.',
        pickupLocation: 'Mathura Market',
        donor: 'Fresh Mart',
        foodAvailability: '0 Kg',
        foodId: 3
    }
]

const SUMMARY_STATS = [
    {
        id: 'total',
        label: 'Total Requests',
        value: '6',
        icon: '📋',
        color: '#25854b',
        bgColor: '#eaf6ed'
    },
    {
        id: 'pending',
        label: 'Pending',
        value: '2',
        icon: '⏳',
        color: '#b45309',
        bgColor: '#fef3c7'
    },
    {
        id: 'approved',
        label: 'Approved',
        value: '3',
        icon: '✨',
        color: '#0284c7',
        bgColor: '#e0f2fe'
    },
    {
        id: 'completed',
        label: 'Completed',
        value: '1',
        icon: '✅',
        color: '#16a34a',
        bgColor: '#f0fdf4'
    }
]

function MyRequests() {
    const getStatusBadgeClass = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'ngo-status-pending'
            case 'approved':
                return 'ngo-status-approved'
            case 'completed':
                return 'ngo-status-completed'
            case 'rejected':
                return 'ngo-status-rejected'
            default:
                return 'ngo-status-default'
        }
    }

    return (
        <div className="ngo-dashboard">
            {/* NGO NAVBAR */}
            <header className="ngo-navbar">
                <div className="ngo-nav-container">
                    <div className="ngo-nav-left">
                        <Link to="/" className="ngo-brand">
                            <div className="brand-badge">♻</div>
                            <div className="brand-text">
                                <span className="brand-name">FoodBridge</span>
                                <span className="brand-tagline">Share • Save • Serve</span>
                            </div>
                        </Link>

                        <nav className="ngo-nav-links">
                            <Link to="/ngo-dashboard" className="ngo-nav-link">
                                Dashboard
                            </Link>
                            <Link to="/available-food" className="ngo-nav-link">
                                Available Food
                            </Link>
                            <Link to="/my-requests" className="ngo-nav-link active">
                                My Requests
                            </Link>
                        </nav>
                    </div>

                    <div className="ngo-nav-right">
                        <div className="ngo-user-pill">
                            <span className="ngo-avatar-icon">🏢</span>
                            <span className="ngo-role-name">NGO Partner</span>
                        </div>
                        <button type="button" className="ngo-logout-btn">
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="ngo-main-content">
                <div className="ngo-container">
                    {/* Back Navigation */}
                    <div className="ngo-page-nav-bar">
                        <Link to="/ngo-dashboard" className="ngo-back-link">
                            ← Back to Dashboard
                        </Link>
                    </div>

                    {/* Page Header */}
                    <header className="ngo-page-header">
                        <div>
                            <span className="ngo-page-tag">REQUEST TRACKING</span>
                            <h1 className="ngo-page-title">My Requests</h1>
                            <p className="ngo-page-subtitle">
                                Track the food requests submitted by your organization.
                            </p>
                        </div>
                        <div className="ngo-page-header-actions">
                            <Link to="/available-food" className="ngo-btn-primary">
                                + New Request
                            </Link>
                        </div>
                    </header>

                    {/* Summary Cards */}
                    <section className="ngo-summary-section">
                        <div className="ngo-stats-grid">
                            {SUMMARY_STATS.map((stat) => (
                                <div key={stat.id} className="ngo-stat-card">
                                    <div className="ngo-stat-header">
                                        <span className="ngo-stat-label">{stat.label}</span>
                                        <div
                                            className="ngo-stat-icon-wrap"
                                            style={{ backgroundColor: stat.bgColor, color: stat.color }}
                                        >
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <div className="ngo-stat-value">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Requests Table Section */}
                    <section className="ngo-requests-list-section">
                        <div className="ngo-section-header-flex">
                            <div>
                                <h2 className="ngo-section-title">Submitted Food Requests</h2>
                                <span className="ngo-section-subtitle">
                                    Showing {REQUESTS_DATA.length} request entries
                                </span>
                            </div>
                        </div>

                        <div className="ngo-table-card">
                            <div className="ngo-table-responsive">
                                <table className="ngo-requests-table">
                                    <thead>
                                        <tr>
                                            <th>Food Item</th>
                                            <th>Category</th>
                                            <th>Requested Quantity</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {REQUESTS_DATA.map((req) => (
                                            <tr key={req.id}>
                                                <td>
                                                    <div className="ngo-req-item-cell">
                                                        <strong className="ngo-req-food-name">{req.food}</strong>
                                                        <span className="ngo-req-id-sub">Req #{req.id}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="ngo-req-category">{req.category}</span>
                                                </td>
                                                <td>
                                                    <span className="ngo-req-quantity highlight">{req.requestedQuantity}</span>
                                                </td>
                                                <td>
                                                    <span className="ngo-req-date">{req.date}</span>
                                                </td>
                                                <td>
                                                    <span className={`ngo-status-badge ${getStatusBadgeClass(req.status)}`}>
                                                        <span className="ngo-status-dot"></span>
                                                        {req.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    <Link
                                                        to={`/request-details/${req.id}`}
                                                        className="ngo-link-action"
                                                    >
                                                        View Details →
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default MyRequests
