import React from 'react'
import { Link } from 'react-router-dom'
import { useVolunteer } from '../../context/VolunteerContext'

const QUICK_ACTIONS = [
    {
        id: 'my_assignments',
        title: 'My Assignments',
        description: 'View and manage all your active and previous tasks.',
        icon: '📋',
        buttonText: 'View All Tasks',
        isPrimary: true,
        path: '/assignments'
    },
    {
        id: 'pending_pickups',
        title: 'Pending Pickups',
        description: 'Check surplus food ready for donor collection.',
        icon: '⏳',
        buttonText: 'View Pickups',
        isPrimary: false,
        path: '/assignments'
    },
    {
        id: 'completed_deliveries',
        title: 'Completed Deliveries',
        description: 'Review your successfully completed food runs.',
        icon: '✅',
        buttonText: 'View History',
        isPrimary: false,
        path: '/assignments'
    }
]

function VolunteerDashboard() {
    const { assignments } = useVolunteer()

    const assignedCount = assignments.filter((a) => a.status === 'Assigned').length
    const pendingPickupCount = assignments.filter((a) => a.status === 'Assigned').length
    const inDeliveryCount = assignments.filter((a) => a.status === 'In Delivery').length
    const completedCount = assignments.filter((a) => a.status === 'Completed').length

    const statsData = [
        {
            id: 'assigned',
            label: 'Assigned Tasks',
            value: String(assignedCount),
            subtext: 'Currently assigned tasks',
            icon: '📋',
            accentColor: '#25854b',
            bgColor: '#eaf6ed'
        },
        {
            id: 'pending_pickup',
            label: 'Pending Pickup',
            value: String(pendingPickupCount),
            subtext: 'Awaiting collection',
            icon: '⏳',
            accentColor: '#d97706',
            bgColor: '#fef3c7'
        },
        {
            id: 'in_delivery',
            label: 'In Delivery',
            value: String(inDeliveryCount),
            subtext: 'On the way to destination',
            icon: '🚚',
            accentColor: '#0284c7',
            bgColor: '#e0f2fe'
        },
        {
            id: 'completed',
            label: 'Completed',
            value: String(completedCount),
            subtext: 'Successfully delivered',
            icon: '✅',
            accentColor: '#16a34a',
            bgColor: '#f0fdf4'
        }
    ]

    const todayAssignments = assignments.slice(0, 3)

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
            {/* 1. VOLUNTEER NAVBAR */}
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
                            <Link to="/volunteer-dashboard" className="volunteer-nav-link active">
                                Dashboard
                            </Link>
                            <Link to="/assignments" className="volunteer-nav-link">
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

            {/* MAIN DASHBOARD CONTENT */}
            <main className="volunteer-main-content">
                <div className="volunteer-container">
                    {/* 2. WELCOME SECTION */}
                    <section className="volunteer-welcome-section">
                        <div className="volunteer-welcome-text">
                            <div className="volunteer-role-chip">Volunteer Portal</div>
                            <h1 className="volunteer-welcome-title">Welcome, Volunteer! 👋</h1>
                            <p className="volunteer-welcome-subtitle">
                                Help move surplus food from donors to communities by completing pickup and delivery assignments.
                            </p>
                        </div>
                        <div className="volunteer-welcome-actions">
                            <Link to="/assignments" className="volunteer-btn-primary">
                                <span className="volunteer-btn-icon">📋</span> View My Assignments
                            </Link>
                            <Link to="/assignments" className="volunteer-btn-secondary">
                                <span className="volunteer-btn-icon">⚡</span> Available Tasks
                            </Link>
                        </div>
                    </section>

                    {/* 3. SUMMARY CARDS */}
                    <section className="volunteer-summary-section">
                        <div className="volunteer-section-header">
                            <h2 className="volunteer-section-title">Overview Statistics</h2>
                            <span className="volunteer-section-subtitle">Summary of your delivery and pickup activity</span>
                        </div>

                        <div className="volunteer-stats-grid">
                            {statsData.map((stat) => (
                                <div key={stat.id} className="volunteer-stat-card">
                                    <div className="volunteer-stat-header">
                                        <span className="volunteer-stat-label">{stat.label}</span>
                                        <div
                                            className="volunteer-stat-icon-wrap"
                                            style={{ backgroundColor: stat.bgColor, color: stat.accentColor }}
                                        >
                                            {stat.icon}
                                        </div>
                                    </div>
                                    <div className="volunteer-stat-value">{stat.value}</div>
                                    <div className="volunteer-stat-subtext">{stat.subtext}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. TODAY'S ASSIGNMENTS SECTION */}
                    <section className="volunteer-assignments-section">
                        <div className="volunteer-section-header-flex">
                            <div>
                                <h2 className="volunteer-section-title">Today's Assignments</h2>
                                <span className="volunteer-section-subtitle">Your assigned food pickups and deliveries.</span>
                            </div>
                            <Link to="/assignments" className="volunteer-link-action">
                                View All Assignments →
                            </Link>
                        </div>

                        <div className="volunteer-cards-grid">
                            {todayAssignments.map((task) => (
                                <div key={task.id} className="volunteer-task-card">
                                    <div className="volunteer-task-header">
                                        <div className="volunteer-task-title-group">
                                            <span className="volunteer-task-icon">{task.icon}</span>
                                            <div>
                                                <h3 className="volunteer-task-name">{task.food}</h3>
                                                <span className="volunteer-task-category">{task.category}</span>
                                            </div>
                                        </div>
                                        <span className={`volunteer-status-badge ${getStatusBadgeClass(task.status)}`}>
                                            <span className="volunteer-status-dot"></span>
                                            {task.status}
                                        </span>
                                    </div>

                                    <div className="volunteer-task-body">
                                        <div className="volunteer-task-meta-row">
                                            <span className="volunteer-meta-label">Quantity</span>
                                            <span className="volunteer-meta-value highlight">{task.quantity}</span>
                                        </div>
                                        <div className="volunteer-task-meta-row">
                                            <span className="volunteer-meta-label">Pickup Time</span>
                                            <span className="volunteer-meta-value">{task.pickupDate}, {task.pickupTime}</span>
                                        </div>
                                        <div className="volunteer-route-preview">
                                            <div className="route-point">
                                                <span className="point-dot pickup-dot"></span>
                                                <div>
                                                    <span className="route-label">Pickup:</span>
                                                    <span className="route-name">{task.donor || task.pickupLocation}</span>
                                                </div>
                                            </div>
                                            <div className="route-line-connector"></div>
                                            <div className="route-point">
                                                <span className="point-dot delivery-dot"></span>
                                                <div>
                                                    <span className="route-label">Delivery:</span>
                                                    <span className="route-name">{task.deliveryLocation}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="volunteer-task-footer">
                                        <Link to={`/assignment-details/${task.id}`} className="volunteer-btn-card-action">
                                            View Details →
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 5. QUICK ACTIONS */}
                    <section className="volunteer-quick-actions-section">
                        <div className="volunteer-section-header">
                            <h2 className="volunteer-section-title">Quick Actions</h2>
                            <span className="volunteer-section-subtitle">Frequently used volunteer tools</span>
                        </div>

                        <div className="volunteer-quick-actions-grid">
                            {QUICK_ACTIONS.map((action) => (
                                <div key={action.id} className="volunteer-action-card">
                                    <div className="volunteer-action-icon-box">
                                        {action.icon}
                                    </div>
                                    <div className="volunteer-action-details">
                                        <h3 className="volunteer-action-title">{action.title}</h3>
                                        <p className="volunteer-action-desc">{action.description}</p>
                                        <Link
                                            to={action.path}
                                            className={action.isPrimary ? 'volunteer-btn-action-primary' : 'volunteer-btn-action-secondary'}
                                        >
                                            {action.buttonText}
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

export default VolunteerDashboard
