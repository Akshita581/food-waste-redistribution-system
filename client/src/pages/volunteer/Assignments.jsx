import React from 'react'
import { Link } from 'react-router-dom'
import { useVolunteer } from '../../context/VolunteerContext'

function Assignments() {
    const { assignments } = useVolunteer()

    const totalCount = assignments.length
    const pendingCount = assignments.filter((a) => a.status === 'Assigned').length
    const inProgressCount = assignments.filter((a) => a.status === 'Pickup Completed' || a.status === 'In Delivery').length
    const completedCount = assignments.filter((a) => a.status === 'Completed').length

    const summaryCards = [
        {
            id: 'total',
            label: 'Total Assignments',
            value: String(totalCount),
            icon: '📋',
            color: '#25854b',
            bgColor: '#eaf6ed'
        },
        {
            id: 'pending',
            label: 'Pending',
            value: String(pendingCount),
            icon: '⏳',
            color: '#d97706',
            bgColor: '#fef3c7'
        },
        {
            id: 'in_progress',
            label: 'In Progress',
            value: String(inProgressCount),
            icon: '🚚',
            color: '#0284c7',
            bgColor: '#e0f2fe'
        },
        {
            id: 'completed',
            label: 'Completed',
            value: String(completedCount),
            icon: '✅',
            color: '#16a34a',
            bgColor: '#f0fdf4'
        }
    ]

    const getStatusBadgeClass = (status) => {
        switch (status.toLowerCase()) {
            case 'assigned':
                return 'volunteer-status-assigned'
            case 'pickup completed':
                return 'volunteer-status-picked'
            case 'in delivery':
                return 'volunteer-status-delivery'
            case 'completed':
                return 'volunteer-status-completed'
            default:
                return 'volunteer-status-default'
        }
    }

    return (
        <div className="volunteer-dashboard">
            {/* VOLUNTEER NAVBAR */}
            <header className="volunteer-navbar">
                <div className="volunteer-nav-container">
                    <div className="volunteer-nav-left">
                        <Link to="/" className="volunteer-brand">
                            <div className="brand-badge">♻</div>
                            <div className="brand-text">
                                <span className="brand-name">FoodBridge</span>
                                <span className="brand-tagline">Share • Save • Serve</span>
                            </div>
                        </Link>

                        <nav className="volunteer-nav-links">
                            <Link to="/volunteer-dashboard" className="volunteer-nav-link">
                                Dashboard
                            </Link>
                            <Link to="/assignments" className="volunteer-nav-link active">
                                My Assignments
                            </Link>
                        </nav>
                    </div>

                    <div className="volunteer-nav-right">
                        <div className="volunteer-user-pill">
                            <span className="volunteer-avatar-icon">🚴</span>
                            <span className="volunteer-role-name">Volunteer</span>
                        </div>
                        <button type="button" className="volunteer-logout-btn">
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="volunteer-main-content">
                <div className="volunteer-container">
                    {/* Back Navigation */}
                    <div className="volunteer-page-nav-bar">
                        <Link to="/volunteer-dashboard" className="volunteer-back-link">
                            ← Back to Dashboard
                        </Link>
                    </div>

                    {/* Page Header */}
                    <header className="volunteer-page-header">
                        <div>
                            <span className="volunteer-page-tag">TASK SCHEDULE</span>
                            <h1 className="volunteer-page-title">My Assignments</h1>
                            <p className="volunteer-page-subtitle">
                                View and manage your assigned food pickup and delivery tasks.
                            </p>
                        </div>
                        <div className="volunteer-header-badge">
                            <span className="volunteer-badge-count">{assignments.length} Tasks Total</span>
                        </div>
                    </header>

                    {/* Summary Cards */}
                    <section className="volunteer-summary-section">
                        <div className="volunteer-stats-grid">
                            {summaryCards.map((stat) => (
                                <div key={stat.id} className="volunteer-stat-card">
                                    <div className="volunteer-stat-header">
                                        <span className="volunteer-stat-label">{stat.label}</span>
                                        <div
                                            className="volunteer-stat-icon-wrap"
                                            style={{ backgroundColor: stat.bgColor, color: stat.color }}
                                        >
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <div className="volunteer-stat-value">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Assignments Table Section */}
                    <section className="volunteer-assignments-list-section">
                        <div className="volunteer-section-header-flex">
                            <div>
                                <h2 className="volunteer-section-title">All Assigned Deliveries</h2>
                                <span className="volunteer-section-subtitle">
                                    Showing {assignments.length} total tasks
                                </span>
                            </div>
                        </div>

                        <div className="volunteer-table-card">
                            <div className="volunteer-table-responsive">
                                <table className="volunteer-assignments-table">
                                    <thead>
                                        <tr>
                                            <th>Food Item</th>
                                            <th>Quantity</th>
                                            <th>Pickup Location</th>
                                            <th>Delivery Location</th>
                                            <th>Pickup Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assignments.map((task) => (
                                            <tr key={task.id}>
                                                <td>
                                                    <div className="volunteer-item-cell">
                                                        <strong className="volunteer-item-title">{task.food}</strong>
                                                        <span className="volunteer-item-sub">Task #{task.id} • {task.category}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="volunteer-quantity-cell highlight">{task.quantity}</span>
                                                </td>
                                                <td>
                                                    <div className="volunteer-location-cell">
                                                        <span className="loc-dot loc-pickup">📍</span>
                                                        <span className="loc-text">{task.pickupLocation}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="volunteer-location-cell">
                                                        <span className="loc-dot loc-delivery">🏢</span>
                                                        <span className="loc-text">{task.deliveryLocation}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="volunteer-date-cell">{task.pickupDate}</span>
                                                </td>
                                                <td>
                                                    <span className={`volunteer-status-badge ${getStatusBadgeClass(task.status)}`}>
                                                        <span className="volunteer-status-dot"></span>
                                                        {task.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    <Link
                                                        to={`/assignment-details/${task.id}`}
                                                        className="volunteer-link-action"
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

export default Assignments
