import React from 'react'
import { Link } from 'react-router-dom'

const STATS_DATA = [
    {
        id: 'total',
        label: 'Total Donations',
        value: '5',
        subtext: 'Lifetime contributions',
        icon: '📦',
        accentColor: '#25854b',
        bgColor: '#eaf6ed'
    },
    {
        id: 'active',
        label: 'Active Donations',
        value: '2',
        subtext: 'Available or in transit',
        icon: '⚡',
        accentColor: '#0284c7',
        bgColor: '#e0f2fe'
    },
    {
        id: 'completed',
        label: 'Completed Donations',
        value: '3',
        subtext: 'Delivered to NGOs',
        icon: '✅',
        accentColor: '#16a34a',
        bgColor: '#f0fdf4'
    },
    {
        id: 'food_donated',
        label: 'Food Donated',
        value: '120 kg',
        subtext: 'Estimated total weight',
        icon: '🍲',
        accentColor: '#d97706',
        bgColor: '#fef3c7'
    }
]

const RECENT_DONATIONS_DATA = [
    {
        id: 1,
        foodItem: 'Cooked Meals',
        category: 'Prepared Meals',
        quantity: '20 meals',
        status: 'Available',
        date: '24 Sep 2026'
    },
    {
        id: 2,
        foodItem: 'Rice',
        category: 'Dry Grains',
        quantity: '15 kg',
        status: 'Picked Up',
        date: '22 Sep 2026'
    },
    {
        id: 3,
        foodItem: 'Bread',
        category: 'Bakery',
        quantity: '30 packets',
        status: 'Delivered',
        date: '20 Sep 2026'
    }
]

const QUICK_ACTIONS_DATA = [
    {
        id: 'create',
        title: 'Create Donation',
        description: 'List surplus food and specify pickup details.',
        icon: '➕',
        buttonText: 'New Donation',
        isPrimary: true,
        path: '/create-donation'
    },
    {
        id: 'view',
        title: 'View My Donations',
        description: 'Browse all past and active listings with status updates.',
        icon: '📋',
        buttonText: 'View History',
        isPrimary: false,
        path: '/my-donations'
    }
]

function DonorDashboard() {
    const getStatusBadgeClass = (status) => {
        switch (status.toLowerCase()) {
            case 'available':
                return 'donor-status-available'
            case 'picked up':
                return 'donor-status-picked'
            case 'delivered':
                return 'donor-status-delivered'
            default:
                return 'donor-status-default'
        }
    }

    return (
        <div className="donor-dashboard">
            {/* 1. TOP NAVBAR */}
            <header className="donor-navbar">
                <div className="donor-nav-container">
                    <div className="donor-nav-left">
                        <Link to="/" className="donor-brand">
                            <div className="brand-badge">♻</div>
                            <div className="brand-text">
                                <span className="brand-name">FoodBridge</span>
                                <span className="brand-tagline">Share • Save • Serve</span>
                            </div>
                        </Link>

                        <nav className="donor-nav-links">
                            <Link to="/donor-dashboard" className="donor-nav-link active">
                                Dashboard
                            </Link>
                            <Link to="/my-donations" className="donor-nav-link">
                                My Donations
                            </Link>
                        </nav>
                    </div>

                    <div className="donor-nav-right">
                        <div className="donor-user-pill">
                            <span className="donor-avatar-icon">👤</span>
                            <span className="donor-role-name">Donor</span>
                        </div>
                        <button type="button" className="donor-logout-btn">
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* MAIN DASHBOARD CONTENT */}
            <main className="donor-main-content">
                <div className="donor-container">
                    {/* 2. WELCOME SECTION */}
                    <section className="donor-welcome-section">
                        <div className="donor-welcome-text">
                            <div className="donor-role-chip">Donor Portal</div>
                            <h1 className="donor-welcome-title">Welcome, Donor! 👋</h1>
                            <p className="donor-welcome-subtitle">
                                Thank you for helping reduce food waste and support communities.
                            </p>
                        </div>
                        <div className="donor-welcome-actions">
                            <Link to="/create-donation" className="donor-btn-primary">
                                <span className="donor-btn-plus">+</span> Create Donation
                            </Link>
                        </div>
                    </section>

                    {/* 3. SUMMARY CARDS */}
                    <section className="donor-summary-section">
                        <div className="donor-section-header">
                            <h2 className="donor-section-title">Donation Overview</h2>
                            <span className="donor-section-subtitle">Summary of your contributions</span>
                        </div>

                        <div className="donor-stats-grid">
                            {STATS_DATA.map((stat) => (
                                <div key={stat.id} className="donor-stat-card">
                                    <div className="donor-stat-header">
                                        <span className="donor-stat-label">{stat.label}</span>
                                        <div
                                            className="donor-stat-icon-wrap"
                                            style={{ backgroundColor: stat.bgColor, color: stat.accentColor }}
                                        >
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <div className="donor-stat-value">{stat.value}</div>
                                    <div className="donor-stat-subtext">{stat.subtext}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* TWO-COLUMN GRID: RECENT DONATIONS & QUICK ACTIONS */}
                    <div className="donor-layout-grid">
                        {/* 4. RECENT DONATIONS */}
                        <section className="donor-donations-section">
                            <div className="donor-section-header-flex">
                                <div>
                                    <h2 className="donor-section-title">Recent Donations</h2>
                                    <span className="donor-section-subtitle">Your latest listed surplus items</span>
                                </div>
                                <Link to="/my-donations" className="donor-link-action">
                                    View All →
                                </Link>
                            </div>

                            <div className="donor-table-card">
                                <div className="donor-table-responsive">
                                    <table className="donor-donations-table">
                                        <thead>
                                            <tr>
                                                <th>Food Item</th>
                                                <th>Quantity</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {RECENT_DONATIONS_DATA.map((donation) => (
                                                <tr key={donation.id}>
                                                    <td>
                                                        <div className="donor-item-cell">
                                                            <strong className="donor-item-title">{donation.foodItem}</strong>
                                                            <span className="donor-item-category">{donation.category}</span>
                                                        </div>
                                                    </td>
                                                    <td className="donor-quantity-cell">
                                                        {donation.quantity}
                                                    </td>
                                                    <td>
                                                        <span className={`donor-status-badge ${getStatusBadgeClass(donation.status)}`}>
                                                            <span className="donor-status-dot"></span>
                                                            {donation.status}
                                                        </span>
                                                    </td>
                                                    <td className="donor-date-cell">
                                                        {donation.date}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        {/* 5. QUICK ACTIONS */}
                        <section className="donor-quick-actions-section">
                            <div className="donor-section-header">
                                <h2 className="donor-section-title">Quick Actions</h2>
                                <span className="donor-section-subtitle">Frequently used tools</span>
                            </div>

                            <div className="donor-quick-actions-list">
                                {QUICK_ACTIONS_DATA.map((action) => (
                                    <div key={action.id} className="donor-action-card">
                                        <div className="donor-action-icon-box">
                                            {action.icon}
                                        </div>
                                        <div className="donor-action-details">
                                            <h3 className="donor-action-title">{action.title}</h3>
                                            <p className="donor-action-desc">{action.description}</p>
                                            <Link
                                                to={action.path}
                                                className={action.isPrimary ? 'donor-btn-action-primary' : 'donor-btn-action-secondary'}
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

export default DonorDashboard
