import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { REQUESTS_DATA } from './MyRequests'

const DEFAULT_REQUEST = {
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
}

const STAGES = [
    { key: 'submitted', label: 'Request Submitted', icon: '📝' },
    { key: 'review', label: 'Under Review', icon: '🔍' },
    { key: 'approved', label: 'Approved', icon: '✨' },
    { key: 'pickup', label: 'Pickup', icon: '🚚' },
    { key: 'completed', label: 'Completed', icon: '✅' }
]

function RequestDetails() {
    const { id } = useParams()
    const initialRequest = REQUESTS_DATA.find((item) => String(item.id) === String(id)) || DEFAULT_REQUEST
    const [currentStatus, setCurrentStatus] = useState(initialRequest.status)
    const [isCancelled, setIsCancelled] = useState(false)

    const handleCancelRequest = () => {
        setCurrentStatus('Cancelled')
        setIsCancelled(true)
    }

    const getStatusBadgeClass = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'ngo-status-pending'
            case 'approved':
                return 'ngo-status-approved'
            case 'completed':
                return 'ngo-status-completed'
            case 'rejected':
            case 'cancelled':
                return 'ngo-status-rejected'
            default:
                return 'ngo-status-default'
        }
    }

    const isStageCompleted = (stageIndex) => {
        const s = currentStatus.toLowerCase()
        if (s === 'completed') return true
        if (s === 'approved') return stageIndex <= 3
        if (s === 'pending') return stageIndex <= 1
        if (s === 'rejected' || s === 'cancelled') return stageIndex === 0
        return false
    }

    const isStageCurrent = (stageIndex) => {
        const s = currentStatus.toLowerCase()
        if (s === 'pending' && stageIndex === 1) return true
        if (s === 'approved' && stageIndex === 3) return true
        if (s === 'completed' && stageIndex === 4) return true
        return false
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
                    {/* Navigation Bar */}
                    <div className="ngo-page-nav-bar">
                        <Link to="/my-requests" className="ngo-back-link">
                            ← Back to My Requests
                        </Link>
                        <Link to="/ngo-dashboard" className="ngo-back-link secondary">
                            ← Back to Dashboard
                        </Link>
                    </div>

                    {/* Request Details Card */}
                    <div className="ngo-details-card">
                        {/* Header */}
                        <div className="ngo-details-header">
                            <div className="ngo-details-header-left">
                                <span className="ngo-id-badge">REQUEST #{initialRequest.id}</span>
                                <h1 className="ngo-details-title">{initialRequest.food}</h1>
                                <p className="ngo-details-subtitle">
                                    Submitted on <strong>{initialRequest.date}</strong>
                                </p>
                            </div>
                            <div className="ngo-details-header-right">
                                <span className={`ngo-status-badge ${getStatusBadgeClass(currentStatus)}`}>
                                    <span className="ngo-status-dot"></span>
                                    {currentStatus}
                                </span>
                            </div>
                        </div>

                        {/* Progress Stepper (Timeline) */}
                        <div className="ngo-progress-section">
                            <h3 className="ngo-progress-title">Request Progress</h3>
                            <div className="ngo-progress-stepper">
                                {STAGES.map((stage, idx) => {
                                    const completed = isStageCompleted(idx)
                                    const current = isStageCurrent(idx)
                                    return (
                                        <div
                                            key={stage.key}
                                            className={`ngo-step-item ${completed ? 'completed' : ''} ${current ? 'current' : ''}`}
                                        >
                                            <div className="ngo-step-circle">
                                                {completed ? '✓' : stage.icon}
                                            </div>
                                            <span className="ngo-step-label">{stage.label}</span>
                                            {idx < STAGES.length - 1 && (
                                                <div
                                                    className={`ngo-step-line ${isStageCompleted(idx + 1) ? 'completed' : ''}`}
                                                ></div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Request Details Grid */}
                        <div className="ngo-info-grid">
                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Request ID</span>
                                <strong className="ngo-info-value primary-value">#{initialRequest.id}</strong>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Food Name</span>
                                <strong className="ngo-info-value">{initialRequest.food}</strong>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Food Category</span>
                                <span className="ngo-info-value category-pill">{initialRequest.category}</span>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Requested Quantity</span>
                                <strong className="ngo-info-value highlight">{initialRequest.requestedQuantity}</strong>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Request Date</span>
                                <span className="ngo-info-value">{initialRequest.date}</span>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">People to Serve</span>
                                <span className="ngo-info-value">{initialRequest.peopleCount} individuals</span>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Food Availability</span>
                                <span className="ngo-info-value">{initialRequest.foodAvailability}</span>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Current Status</span>
                                <span className="ngo-info-value status-text">{currentStatus}</span>
                            </div>
                        </div>

                        {/* Reason / Purpose */}
                        <div className="ngo-full-item">
                            <span className="ngo-info-label">Reason / Purpose</span>
                            <div className="ngo-details-box">
                                <p>{initialRequest.reason}</p>
                            </div>
                        </div>

                        {/* Additional Message */}
                        {initialRequest.additionalMessage && (
                            <div className="ngo-full-item">
                                <span className="ngo-info-label">Additional Message</span>
                                <div className="ngo-details-box">
                                    <p>{initialRequest.additionalMessage}</p>
                                </div>
                            </div>
                        )}

                        {/* Related Donation & Pickup Location */}
                        <div className="ngo-full-item">
                            <span className="ngo-info-label">Donor & Pickup Location</span>
                            <div className="ngo-location-box">
                                <span className="location-icon">📍</span>
                                <div>
                                    <strong className="location-donor">{initialRequest.donor}</strong>
                                    <p className="location-address">{initialRequest.pickupLocation}</p>
                                </div>
                            </div>
                        </div>

                        {/* Status Feedback Notice / Action Area */}
                        <div className="ngo-request-action-card">
                            {currentStatus.toLowerCase() === 'pending' && !isCancelled && (
                                <div className="ngo-status-action-row">
                                    <div className="ngo-status-action-info">
                                        <span className="action-hint-icon">⏳</span>
                                        <p>This request is currently under review by the donor/administrator.</p>
                                    </div>
                                    <button
                                        type="button"
                                        className="ngo-btn-cancel-action"
                                        onClick={handleCancelRequest}
                                    >
                                        Cancel Request
                                    </button>
                                </div>
                            )}

                            {currentStatus.toLowerCase() === 'approved' && (
                                <div className="ngo-status-action-row approved-row">
                                    <div className="ngo-status-action-info">
                                        <span className="action-hint-icon">✨</span>
                                        <p>Your request has been approved! You can coordinate pickup with the donor.</p>
                                    </div>
                                    <Link
                                        to={`/food-details/${initialRequest.foodId || initialRequest.id}`}
                                        className="ngo-btn-view-food-link"
                                    >
                                        View Food Details →
                                    </Link>
                                </div>
                            )}

                            {currentStatus.toLowerCase() === 'completed' && (
                                <div className="ngo-status-action-row completed-row">
                                    <span className="action-hint-icon">✅</span>
                                    <p><strong>Request Completed</strong> — This surplus food was successfully received and distributed.</p>
                                </div>
                            )}

                            {(currentStatus.toLowerCase() === 'rejected' || isCancelled) && (
                                <div className="ngo-status-action-row rejected-row">
                                    <span className="action-hint-icon">❌</span>
                                    <p>
                                        <strong>{isCancelled ? 'Request Cancelled' : 'Request Rejected'}</strong> — This request is closed.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Bottom Navigation Actions */}
                        <div className="ngo-details-actions">
                            <Link to="/my-requests" className="ngo-btn-back-donations">
                                ← Back to My Requests
                            </Link>
                            <Link to="/ngo-dashboard" className="ngo-btn-back-dashboard">
                                Back to Dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default RequestDetails
