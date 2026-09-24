import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useVolunteer, INITIAL_ASSIGNMENTS } from '../../context/VolunteerContext'

const DEFAULT_ASSIGNMENT = INITIAL_ASSIGNMENTS[0]

const STAGES = [
    { key: 'received', label: 'Assignment Received', icon: '📋' },
    { key: 'pickup', label: 'Pickup', icon: '📍' },
    { key: 'picked_up', label: 'Food Picked Up', icon: '📦' },
    { key: 'delivery', label: 'Delivery', icon: '🚚' },
    { key: 'completed', label: 'Completed', icon: '✅' }
]

function AssignmentDetails() {
    const { id } = useParams()
    const { assignments, updateAssignmentStatus } = useVolunteer()

    const assignment = assignments.find((item) => String(item.id) === String(id)) || DEFAULT_ASSIGNMENT
    const status = assignment.status

    const [actionMessage, setActionMessage] = useState('')

    const handleMarkPickupCompleted = () => {
        updateAssignmentStatus(assignment.id, 'Pickup Completed')
        setActionMessage('Pickup marked as completed.')
    }

    const handleStartDelivery = () => {
        updateAssignmentStatus(assignment.id, 'In Delivery')
        setActionMessage('Delivery started.')
    }

    const handleMarkDeliveryCompleted = () => {
        updateAssignmentStatus(assignment.id, 'Completed')
        setActionMessage('Delivery completed successfully!')
    }

    const getStatusBadgeClass = (s) => {
        switch (s.toLowerCase()) {
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

    const isStageCompleted = (idx) => {
        const s = status.toLowerCase()
        if (s === 'completed') return true
        if (s === 'in delivery' || s === 'pickup completed') return idx <= 2
        if (s === 'assigned') return idx === 0
        return false
    }

    const isStageCurrent = (idx) => {
        const s = status.toLowerCase()
        if (s === 'assigned' && idx === 1) return true
        if (s === 'pickup completed' && idx === 3) return true
        if (s === 'in delivery' && idx === 3) return true
        if (s === 'completed' && idx === 4) return true
        return false
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
                    {/* Navigation Bar */}
                    <div className="volunteer-page-nav-bar">
                        <Link to="/assignments" className="volunteer-back-link">
                            ← Back to My Assignments
                        </Link>
                        <Link to="/volunteer-dashboard" className="volunteer-back-link secondary">
                            ← Back to Dashboard
                        </Link>
                    </div>

                    {/* Assignment Details Main Card */}
                    <div className="volunteer-details-card">
                        {/* Header */}
                        <div className="volunteer-details-header">
                            <div className="volunteer-details-header-left">
                                <span className="volunteer-id-badge">ASSIGNMENT #{assignment.id}</span>
                                <h1 className="volunteer-details-title">{assignment.food}</h1>
                                <p className="volunteer-details-subtitle">
                                    Donor: <strong>{assignment.donor}</strong> • Scheduled for <strong>{assignment.pickupDate}</strong>
                                </p>
                            </div>
                            <div className="volunteer-details-header-right">
                                <span className={`volunteer-status-badge ${getStatusBadgeClass(status)}`}>
                                    <span className="volunteer-status-dot"></span>
                                    {status}
                                </span>
                            </div>
                        </div>

                        {/* Progress Stepper (Workflow) */}
                        <div className="volunteer-progress-section">
                            <h3 className="volunteer-progress-title">Assignment Progress</h3>
                            <div className="volunteer-progress-stepper">
                                {STAGES.map((stage, idx) => {
                                    const completed = isStageCompleted(idx)
                                    const current = isStageCurrent(idx)
                                    return (
                                        <div
                                            key={stage.key}
                                            className={`volunteer-step-item ${completed ? 'completed' : ''} ${current ? 'current' : ''}`}
                                        >
                                            <div className="volunteer-step-circle">
                                                {completed ? '✓' : stage.icon}
                                            </div>
                                            <span className="volunteer-step-label">{stage.label}</span>
                                            {idx < STAGES.length - 1 && (
                                                <div
                                                    className={`volunteer-step-line ${isStageCompleted(idx + 1) ? 'completed' : ''}`}
                                                ></div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Status Feedback Message */}
                        {actionMessage && (
                            <div className="volunteer-action-notice">
                                <span className="notice-icon">🔔</span>
                                <p>{actionMessage}</p>
                            </div>
                        )}

                        {/* Interactive Volunteer Actions Bar */}
                        <div className="volunteer-action-banner">
                            {status === 'Assigned' && (
                                <div className="volunteer-action-box">
                                    <div className="action-text-group">
                                        <h4 className="action-heading">Ready for Food Pickup</h4>
                                        <p className="action-desc">Proceed to the donor location to collect the surplus food.</p>
                                    </div>
                                    <button
                                        type="button"
                                        className="volunteer-btn-step-action"
                                        onClick={handleMarkPickupCompleted}
                                    >
                                        📦 Mark Pickup Completed
                                    </button>
                                </div>
                            )}

                            {status === 'Pickup Completed' && (
                                <div className="volunteer-action-box">
                                    <div className="action-text-group">
                                        <h4 className="action-heading">Food Picked Up</h4>
                                        <p className="action-desc">Begin transit towards the recipient delivery location.</p>
                                    </div>
                                    <button
                                        type="button"
                                        className="volunteer-btn-step-action start-delivery"
                                        onClick={handleStartDelivery}
                                    >
                                        🚚 Start Delivery
                                    </button>
                                </div>
                            )}

                            {status === 'In Delivery' && (
                                <div className="volunteer-action-box in-delivery-box">
                                    <div className="action-text-group">
                                        <h4 className="action-heading">Transit In Progress</h4>
                                        <p className="action-desc">Hand over the food package to the recipient and confirm completion.</p>
                                    </div>
                                    <button
                                        type="button"
                                        className="volunteer-btn-step-action complete-delivery"
                                        onClick={handleMarkDeliveryCompleted}
                                    >
                                        ✅ Mark Delivery Completed
                                    </button>
                                </div>
                            )}

                            {status === 'Completed' && (
                                <div className="volunteer-completed-banner">
                                    <span className="completed-icon">🎉</span>
                                    <div>
                                        <h4 className="completed-title">Assignment Completed</h4>
                                        <p className="completed-desc">
                                            Great job! The food has been successfully delivered and distributed.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Information Grid */}
                        <div className="volunteer-info-grid">
                            <div className="volunteer-info-item">
                                <span className="volunteer-info-label">Assignment ID</span>
                                <strong className="volunteer-info-value primary-value">#{assignment.id}</strong>
                            </div>

                            <div className="volunteer-info-item">
                                <span className="volunteer-info-label">Food Name</span>
                                <strong className="volunteer-info-value">{assignment.food}</strong>
                            </div>

                            <div className="volunteer-info-item">
                                <span className="volunteer-info-label">Food Category</span>
                                <span className="volunteer-info-value category-pill">{assignment.category}</span>
                            </div>

                            <div className="volunteer-info-item">
                                <span className="volunteer-info-label">Quantity</span>
                                <strong className="volunteer-info-value highlight">{assignment.quantity}</strong>
                            </div>

                            <div className="volunteer-info-item">
                                <span className="volunteer-info-label">Donor</span>
                                <span className="volunteer-info-value">{assignment.donor}</span>
                            </div>

                            <div className="volunteer-info-item">
                                <span className="volunteer-info-label">Current Status</span>
                                <span className="volunteer-info-value status-text">{status}</span>
                            </div>
                        </div>

                        {/* Pickup & Delivery Location Cards */}
                        <div className="volunteer-locations-row">
                            <div className="volunteer-location-card pickup-card">
                                <div className="loc-card-header">
                                    <span className="loc-badge pickup-badge">PICKUP POINT</span>
                                    <span className="loc-time">{assignment.pickupDate} • {assignment.pickupTime}</span>
                                </div>
                                <div className="loc-card-body">
                                    <span className="loc-pin">📍</span>
                                    <div>
                                        <strong className="loc-title">{assignment.donor}</strong>
                                        <p className="loc-address">{assignment.pickupLocation}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="volunteer-location-card delivery-card">
                                <div className="loc-card-header">
                                    <span className="loc-badge delivery-badge">DELIVERY POINT</span>
                                    <span className="loc-time">{assignment.deliveryDate} • {assignment.deliveryTime}</span>
                                </div>
                                <div className="loc-card-body">
                                    <span className="loc-pin">🏢</span>
                                    <div>
                                        <strong className="loc-title">{assignment.deliveryLocation}</strong>
                                        <p className="loc-address">{assignment.deliveryLocation}, Mathura</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Notes Section */}
                        {assignment.notes && (
                            <div className="volunteer-full-item">
                                <span className="volunteer-info-label">Special Instructions & Notes</span>
                                <div className="volunteer-notes-box">
                                    <p>{assignment.notes}</p>
                                </div>
                            </div>
                        )}

                        {/* Bottom Actions */}
                        <div className="volunteer-details-actions">
                            <Link to="/assignments" className="volunteer-btn-back-assignments">
                                ← Back to My Assignments
                            </Link>
                            <Link to="/volunteer-dashboard" className="volunteer-btn-back-dashboard">
                                Back to Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AssignmentDetails
