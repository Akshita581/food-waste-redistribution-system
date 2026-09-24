import React from 'react'
import { Link } from 'react-router-dom'

const STATS_DATA = [
    {
        id: 'available_food',
        label: 'Available Food',
        value: '12',
        subtext: 'Listings ready for request',
        icon: '🍲',
        accentColor: '#25854b',
        bgColor: '#eaf6ed'
    },
    {
        id: 'active_requests',
        label: 'Active Requests',
        value: '3',
        subtext: 'Pending review or pickup',
        icon: '⚡',
        accentColor: '#0284c7',
        bgColor: '#e0f2fe'
    },
    {
        id: 'approved_requests',
        label: 'Approved Requests',
        value: '5',
        subtext: 'Ready for distribution',
        icon: '✨',
        accentColor: '#d97706',
        bgColor: '#fef3c7'
    },
    {
        id: 'completed_requests',
        label: 'Completed Requests',
        value: '8',
        subtext: 'Successfully received',
        icon: '✅',
        accentColor: '#16a34a',
        bgColor: '#f0fdf4'
    }
]

const RECENT_AVAILABLE_FOOD = [
    {
        id: 1,
        foodName: 'Cooked Meals',
        quantity: '20 Meals',
        category: 'Cooked Food',
        availableUntil: '24 Sep 2026',
        status: 'Available',
        icon: '🍛'
    },
    {
        id: 2,
        foodName: 'Rice',
        quantity: '15 Kg',
        category: 'Rice & Grains',
        availableUntil: '25 Sep 2026',
        status: 'Available',
        icon: '🌾'
    },
    {
        id: 3,
        foodName: 'Fresh Fruits',
        quantity: '10 Kg',
        category: 'Fruits & Vegetables',
        availableUntil: '26 Sep 2026',
        status: 'Available',
        icon: '🍎'
    }
]

const RECENT_REQUESTS_DATA = [
    {
        id: 1,
        food: 'Cooked Meals',
        quantity: '20 Meals',
        status: 'Pending',
        date: '24 Sep 2026'
    },
    {
        id: 2,
        food: 'Rice',
        quantity: '15 Kg',
        status: 'Approved',
        date: '23 Sep 2026'
    },
    {
        id: 3,
        food: 'Bread',
        quantity: '30 Packets',
        status: 'Completed',
        date: '20 Sep 2026'
    }
]

const QUICK_ACTIONS_DATA = [
    {
        id: 'browse',
        title: 'Browse Available Food',
        description: 'Explore listings from donors and submit food requests.',
        icon: '🔍',
        buttonText: 'Browse Food',
        isPrimary: true,
        path: '/available-food'
    },
    {
        id: 'requests',
        title: 'My Requests',
        description: 'Track real-time status of all your ongoing and past food requests.',
        icon: '📋',
        buttonText: 'View Requests',
        isPrimary: false,
        path: '/my-requests'
    },
    {
        id: 'profile',
        title: 'View Profile',
        description: 'Manage your NGO organization details and distribution areas.',
        icon: '🏢',
        buttonText: 'View Profile',
        isPrimary: false,
        path: '/ngo-profile'
    }
]

function NGODashboard() {
    const getStatusBadgeClass = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'ngo-status-pending'
            case 'approved':
                return 'ngo-status-approved'
            case 'completed':
                return 'ngo-status-completed'
            case 'available':
                return 'ngo-status-available'
            default:
                return 'ngo-status-default'
        }
    }

    return (
        <div className="ngo-dashboard">
            {/* 1. NGO NAVBAR */}
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
                            <Link to="/ngo-dashboard" className="ngo-nav-link active">
                                Dashboard
                            </Link>
                            <Link to="/available-food" className="ngo-nav-link">
                                Available Food
                            </Link>
                            <Link to="/my-requests" className="ngo-nav-link">
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
                    {/* 2. WELCOME SECTION */}
                    <section className="ngo-welcome-section">
                        <div className="ngo-welcome-text">
                            <div className="ngo-role-chip">NGO Portal</div>
                            <h1 className="ngo-welcome-title">Welcome, NGO! 👋</h1>
                            <p className="ngo-welcome-subtitle">
                                Find surplus food, request what your community needs, and help reduce food waste.
                            </p>
                        </div>
                        <div className="ngo-welcome-actions">
                            <Link to="/available-food" className="ngo-btn-primary">
                                <span className="ngo-btn-icon">🔍</span> Browse Available Food
                            </Link>
                            <Link to="/my-requests" className="ngo-btn-secondary">
                                <span className="ngo-btn-icon">📋</span> My Requests
                            </Link>
                        </div>
                    </section>

                    {/* 3. SUMMARY / STATISTICS CARDS */}
                    <section className="ngo-summary-section">
                        <div className="ngo-section-header">
                            <h2 className="ngo-section-title">Overview Statistics</h2>
                            <span className="ngo-section-subtitle">Overview of available food and your community requests</span>
                        </div>

                        <div className="ngo-stats-grid">
                            {STATS_DATA.map((stat) => (
                                <div key={stat.id} className="ngo-stat-card">
                                    <div className="ngo-stat-header">
                                        <span className="ngo-stat-label">{stat.label}</span>
                                        <div
                                            className="ngo-stat-icon-wrap"
                                            style={{ backgroundColor: stat.bgColor, color: stat.accentColor }}
                                        >
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <div className="ngo-stat-value">{stat.value}</div>
                                    <div className="ngo-stat-subtext">{stat.subtext}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. RECENT AVAILABLE FOOD */}
                    <section className="ngo-available-food-section">
                        <div className="ngo-section-header-flex">
                            <div>
                                <h2 className="ngo-section-title">Recently Available Food</h2>
                                <span className="ngo-section-subtitle">Freshly listed surplus donations ready to be claimed</span>
                            </div>
                            <Link to="/available-food" className="ngo-link-action">
                                Browse All Food →
                            </Link>
                        </div>

                        <div className="ngo-food-grid">
                            {RECENT_AVAILABLE_FOOD.map((item) => (
                                <div key={item.id} className="ngo-food-card">
                                    <div className="ngo-food-card-header">
                                        <div className="ngo-food-title-group">
                                            <span className="ngo-food-icon">{item.icon}</span>
                                            <div>
                                                <h3 className="ngo-food-name">{item.foodName}</h3>
                                                <span className="ngo-food-category">{item.category}</span>
                                            </div>
                                        </div>
                                        <span className={`ngo-status-badge ${getStatusBadgeClass(item.status)}`}>
                                            <span className="ngo-status-dot"></span>
                                            {item.status}
                                        </span>
                                    </div>

                                    <div className="ngo-food-card-body">
                                        <div className="ngo-food-meta-row">
                                            <span className="ngo-meta-label">Quantity</span>
                                            <span className="ngo-meta-value highlight">{item.quantity}</span>
                                        </div>
                                        <div className="ngo-food-meta-row">
                                            <span className="ngo-meta-label">Available Until</span>
                                            <span className="ngo-meta-value">{item.availableUntil}</span>
                                        </div>
                                    </div>

                                    <div className="ngo-food-card-footer">
                                        <Link to="/available-food" className="ngo-btn-card-action">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* TWO-COLUMN GRID: RECENT REQUESTS & QUICK ACTIONS */}
                    <div className="ngo-layout-grid">
                        {/* 5. RECENT REQUESTS */}
                        <section className="ngo-requests-section">
                            <div className="ngo-section-header-flex">
                                <div>
                                    <h2 className="ngo-section-title">My Recent Requests</h2>
                                    <span className="ngo-section-subtitle">Recent requests placed by your organization</span>
                                </div>
                                <Link to="/my-requests" className="ngo-link-action">
                                    View All Requests →
                                </Link>
                            </div>

                            <div className="ngo-table-card">
                                <div className="ngo-table-responsive">
                                    <table className="ngo-requests-table">
                                        <thead>
                                            <tr>
                                                <th>Food Item</th>
                                                <th>Quantity</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {RECENT_REQUESTS_DATA.map((req) => (
                                                <tr key={req.id}>
                                                    <td>
                                                        <strong className="ngo-req-food-name">{req.food}</strong>
                                                    </td>
                                                    <td className="ngo-req-quantity">{req.quantity}</td>
                                                    <td>
                                                        <span className={`ngo-status-badge ${getStatusBadgeClass(req.status)}`}>
                                                            <span className="ngo-status-dot"></span>
                                                            {req.status}
                                                        </span>
                                                    </td>
                                                    <td className="ngo-req-date">{req.date}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* 6. QUICK ACTIONS */}
                        <section className="ngo-quick-actions-section">
                            <div className="ngo-section-header">
                                <h2 className="ngo-section-title">Quick Actions</h2>
                                <span className="ngo-section-subtitle">Frequently used tools</span>
                            </div>

                            <div className="ngo-quick-actions-list">
                                {QUICK_ACTIONS_DATA.map((action) => (
                                    <div key={action.id} className="ngo-action-card">
                                        <div className="ngo-action-icon-box">
                                            {action.icon}
                                        </div>
                                        <div className="ngo-action-details">
                                            <h3 className="ngo-action-title">{action.title}</h3>
                                            <p className="ngo-action-desc">{action.description}</p>
                                            <Link
                                                to={action.path}
                                                className={action.isPrimary ? 'ngo-btn-action-primary' : 'ngo-btn-action-secondary'}
                                            >
                                                {action.buttonText}
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default NGODashboard
