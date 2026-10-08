import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

/**
 * Frontend Demo Statistics
 * (Simulated platform numbers for college demonstration purposes)
 */
const STATS_DATA = [
    {
        id: 'total_users',
        label: 'Total Users',
        value: '48',
        subtext: 'Registered donors, NGOs & volunteers',
        icon: '👥',
        accentColor: '#0284c7',
        bgColor: '#e0f2fe'
    },
    {
        id: 'total_donations',
        label: 'Total Donations',
        value: '125',
        subtext: 'Surplus food items listed',
        icon: '📦',
        accentColor: '#25854b',
        bgColor: '#eaf6ed'
    },
    {
        id: 'pending_requests',
        label: 'Pending Requests',
        value: '12',
        subtext: 'Awaiting allocation & review',
        icon: '⏳',
        accentColor: '#d97706',
        bgColor: '#fef3c7'
    },
    {
        id: 'active_assignments',
        label: 'Active Assignments',
        value: '8',
        subtext: 'Pickups & deliveries in progress',
        icon: '🚚',
        accentColor: '#16a34a',
        bgColor: '#f0fdf4'
    }
]

/**
 * Sample Recent Donations Data
 */
const RECENT_DONATIONS_DATA = [
    {
        id: 1,
        food: 'Cooked Meals',
        category: 'Prepared Food',
        donor: 'Campus Cafeteria',
        quantity: '20 Meals',
        status: 'Available',
        date: '24 Sep 2026'
    },
    {
        id: 2,
        food: 'Rice',
        category: 'Dry Grains',
        donor: 'Local Restaurant',
        quantity: '15 Kg',
        status: 'Picked Up',
        date: '23 Sep 2026'
    },
    {
        id: 3,
        food: 'Fresh Fruits',
        category: 'Fruits & Vegetables',
        donor: 'Fresh Mart',
        quantity: '10 Kg',
        status: 'Delivered',
        date: '22 Sep 2026'
    }
]

/**
 * Sample Recent Requests Data
 */
const RECENT_REQUESTS_DATA = [
    {
        id: 1,
        food: 'Cooked Meals',
        ngo: 'Helping Hands NGO',
        quantity: '20 Meals',
        status: 'Pending',
        date: '24 Sep 2026'
    },
    {
        id: 2,
        food: 'Rice',
        ngo: 'Community Care NGO',
        quantity: '15 Kg',
        status: 'Approved',
        date: '23 Sep 2026'
    },
    {
        id: 3,
        food: 'Bread',
        ngo: 'Helping Hands NGO',
        quantity: '30 Packets',
        status: 'Completed',
        date: '20 Sep 2026'
    }
]

/**
 * Quick Actions Navigation Cards
 */
const QUICK_ACTIONS_DATA = [
    {
        id: 'users',
        title: 'Manage Users',
        description: 'View, filter, and monitor all platform accounts across all roles.',
        icon: '👥',
        buttonText: 'Manage Users',
        path: '/admin-users',
        color: '#0284c7'
    },
    {
        id: 'donations',
        title: 'Manage Donations',
        description: 'Track real-time surplus food listings, quantities, and pickup status.',
        icon: '🍲',
        buttonText: 'Manage Donations',
        path: '/admin-donations',
        color: '#25854b'
    },
    {
        id: 'requests',
        title: 'Manage Requests',
        description: 'Review and approve community food requirements submitted by NGOs.',
        icon: '📋',
        buttonText: 'Manage Requests',
        path: '/admin-requests',
        color: '#d97706'
    },
    {
        id: 'assignments',
        title: 'Manage Assignments',
        description: 'Oversee volunteer pickup and delivery logistics from donor to shelter.',
        icon: '🚚',
        buttonText: 'Manage Assignments',
        path: '/admin-assignments',
        color: '#16a34a'
    }
]

function AdminDashboard() {
    // Helper function for dynamic status badge CSS classes
    const getStatusBadgeClass = (status) => {
        switch (status.toLowerCase()) {
            case 'available':
                return 'admin-status-available'
            case 'picked up':
                return 'admin-status-picked'
            case 'delivered':
            case 'completed':
                return 'admin-status-delivered'
            case 'pending':
                return 'admin-status-pending'
            case 'approved':
                return 'admin-status-approved'
            case 'rejected':
                return 'admin-status-rejected'
            default:
                return 'admin-status-default'
        }
    }

    return (
        <div className="admin-dashboard">
            {/* 1. ADMIN NAVBAR */}
            <AdminNavbar />

            {/* MAIN DASHBOARD CONTENT */}
            <main className="admin-main-content">
                <div className="admin-container">
                    {/* 2. WELCOME SECTION */}
                    <section className="admin-welcome-section">
                        <div className="admin-welcome-text">
                            <div className="admin-role-chip">Admin Portal</div>
                            <h1 className="admin-welcome-title">Welcome, Admin! 👋</h1>
                            <p className="admin-welcome-subtitle">
                                Monitor and manage the FoodBridge platform from one place. Track surplus food listings, community requests, and volunteer delivery operations.
                            </p>
                        </div>
                        <div className="admin-welcome-actions">
                            <Link to="/admin-requests" className="admin-btn-primary">
                                <span className="admin-btn-icon">📋</span> Review Requests
                            </Link>
                        </div>
                    </section>

                    {/* 3. STATISTICS CARDS */}
                    <section className="admin-summary-section">
                        <div className="admin-section-header">
                            <h2 className="admin-section-title">System Overview</h2>
                            <span className="admin-section-subtitle">Overview of FoodBridge activities and operations</span>
                        </div>

                        <div className="admin-stats-grid">
                            {STATS_DATA.map((stat) => (
                                <div key={stat.id} className="admin-stat-card">
                                    <div className="admin-stat-header">
                                        <span className="admin-stat-label">{stat.label}</span>
                                        <div
                                            className="admin-stat-icon-wrap"
                                            style={{ backgroundColor: stat.bgColor, color: stat.accentColor }}
                                        >
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <div className="admin-stat-value">{stat.value}</div>
                                    <div className="admin-stat-subtext">{stat.subtext}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4 & 5. TWO-COLUMN GRID: RECENT DONATIONS & RECENT REQUESTS */}
                    <div className="admin-layout-grid">
                        {/* 4. RECENT DONATIONS */}
                        <section className="admin-donations-section">
                            <div className="admin-section-header-flex">
                                <div>
                                    <h2 className="admin-section-title">Recent Donations</h2>
                                    <span className="admin-section-subtitle">Latest surplus food listings from donors</span>
                                </div>
                                <Link to="/admin-donations" className="admin-link-action">
                                    View All →
                                </Link>
                            </div>

                            <div className="admin-table-card">
                                <div className="admin-table-responsive">
                                    <table className="admin-table">
                                        <thead>
                                            <tr>
                                                <th>Food</th>
                                                <th>Donor</th>
                                                <th>Quantity</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {RECENT_DONATIONS_DATA.map((item) => (
                                                <tr key={item.id}>
                                                    <td>
                                                        <div className="admin-item-cell">
                                                            <strong className="admin-item-title">{item.food}</strong>
                                                            <span className="admin-item-sub">{item.category}</span>
                                                        </div>
                                                    </td>
                                                    <td className="admin-donor-cell">{item.donor}</td>
                                                    <td className="admin-quantity-cell">{item.quantity}</td>
                                                    <td>
                                                        <span className={`admin-status-badge ${getStatusBadgeClass(item.status)}`}>
                                                            <span className="admin-status-dot"></span>
                                                            {item.status}
                                                        </span>
                                                    </td>
                                                    <td className="admin-date-cell">{item.date}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* 5. RECENT REQUESTS */}
                        <section className="admin-requests-section">
                            <div className="admin-section-header-flex">
                                <div>
                                    <h2 className="admin-section-title">Recent Requests</h2>
                                    <span className="admin-section-subtitle">Latest food requests placed by NGOs</span>
                                </div>
                                <Link to="/admin-requests" className="admin-link-action">
                                    View All →
                                </Link>
                            </div>

                            <div className="admin-table-card">
                                <div className="admin-table-responsive">
                                    <table className="admin-table">
                                        <thead>
                                            <tr>
                                                <th>Food</th>
                                                <th>NGO</th>
                                                <th>Quantity</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {RECENT_REQUESTS_DATA.map((req) => (
                                                <tr key={req.id}>
                                                    <td>
                                                        <strong className="admin-item-title">{req.food}</strong>
                                                    </td>
                                                    <td className="admin-ngo-cell">{req.ngo}</td>
                                                    <td className="admin-quantity-cell">{req.quantity}</td>
                                                    <td>
                                                        <span className={`admin-status-badge ${getStatusBadgeClass(req.status)}`}>
                                                            <span className="admin-status-dot"></span>
                                                            {req.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* 6. QUICK ACTIONS */}
                    <section className="admin-quick-actions-section">
                        <div className="admin-section-header">
                            <h2 className="admin-section-title">Quick Actions</h2>
                            <span className="admin-section-subtitle">Manage FoodBridge core modules and resources</span>
                        </div>

                        <div className="admin-quick-actions-grid">
                            {QUICK_ACTIONS_DATA.map((action) => (
                                <div key={action.id} className="admin-action-card">
                                    <div className="admin-action-icon-box">
                                        {action.icon}
                                    </div>
                                    <div className="admin-action-details">
                                        <h3 className="admin-action-title">{action.title}</h3>
                                        <p className="admin-action-desc">{action.description}</p>
                                        <Link to={action.path} className="admin-btn-action-primary">
                                            {action.buttonText} →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default AdminDashboard
