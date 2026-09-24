import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AVAILABLE_FOOD_DATA } from './AvailableFood'

const DEFAULT_FOOD = {
    id: 1,
    foodName: 'Cooked Meals',
    category: 'Cooked Food',
    quantity: 20,
    unit: 'Meals',
    preparationDate: '24 Sep 2026',
    bestBeforeDate: '24 Sep 2026',
    bestBeforeTime: '8:00 PM',
    pickupLocation: 'GLA University, Mathura',
    donor: 'Campus Cafeteria',
    status: 'Available',
    additionalDetails: 'Freshly prepared meals available for same-day distribution.',
    icon: '🍛'
}

function FoodDetails() {
    const { id } = useParams()
    const food = AVAILABLE_FOOD_DATA.find((item) => String(item.id) === String(id)) || DEFAULT_FOOD

    const [isFormOpen, setIsFormOpen] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        requestedQuantity: food.quantity,
        reason: '',
        peopleCount: '',
        additionalMessage: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Frontend-only simulation
        setIsSubmitted(true)
    }

    const handleCancel = () => {
        setIsFormOpen(false)
        setIsSubmitted(false)
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
                            <Link to="/available-food" className="ngo-nav-link active">
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
                    {/* Navigation Bar */}
                    <div className="ngo-page-nav-bar">
                        <Link to="/available-food" className="ngo-back-link">
                            ← Back to Available Food
                        </Link>
                        <Link to="/ngo-dashboard" className="ngo-back-link secondary">
                            ← Back to Dashboard
                        </Link>
                    </div>

                    {/* Food Details Main Card */}
                    <div className="ngo-details-card">
                        {/* Header */}
                        <div className="ngo-details-header">
                            <div className="ngo-details-header-left">
                                <span className="ngo-id-badge">FOOD LISTING #{food.id}</span>
                                <h1 className="ngo-details-title">{food.foodName}</h1>
                                <p className="ngo-details-subtitle">
                                    Listed by <strong className="donor-highlight">{food.donor}</strong>
                                </p>
                            </div>
                            <div className="ngo-details-header-right">
                                <span className="ngo-status-badge ngo-status-available">
                                    <span className="ngo-status-dot"></span>
                                    {food.status}
                                </span>
                            </div>
                        </div>

                        {/* Information Grid */}
                        <div className="ngo-info-grid">
                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Food Name</span>
                                <strong className="ngo-info-value primary-value">{food.foodName}</strong>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Food Category</span>
                                <span className="ngo-info-value category-pill">{food.category}</span>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Available Quantity</span>
                                <strong className="ngo-info-value highlight">{food.quantity}</strong>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Unit</span>
                                <span className="ngo-info-value">{food.unit}</span>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Preparation Date</span>
                                <span className="ngo-info-value">{food.preparationDate}</span>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Best Before Date</span>
                                <span className="ngo-info-value">{food.bestBeforeDate}</span>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Best Before Time</span>
                                <span className="ngo-info-value">{food.bestBeforeTime}</span>
                            </div>

                            <div className="ngo-info-item">
                                <span className="ngo-info-label">Donation Status</span>
                                <span className="ngo-info-value status-text">{food.status}</span>
                            </div>
                        </div>

                        {/* Full Width Info: Donor & Pickup Location */}
                        <div className="ngo-full-item">
                            <span className="ngo-info-label">Donor & Pickup Location</span>
                            <div className="ngo-location-box">
                                <span className="location-icon">📍</span>
                                <div>
                                    <strong className="location-donor">{food.donor}</strong>
                                    <p className="location-address">{food.pickupLocation}</p>
                                </div>
                            </div>
                        </div>

                        {/* Full Width Info: Additional Details */}
                        <div className="ngo-full-item">
                            <span className="ngo-info-label">Additional Details</span>
                            <div className="ngo-details-box">
                                <p>{food.additionalDetails}</p>
                            </div>
                        </div>

                        {/* Request Action Area */}
                        {!isFormOpen && !isSubmitted && (
                            <div className="ngo-details-actions">
                                <button
                                    type="button"
                                    className="ngo-btn-request-primary"
                                    onClick={() => setIsFormOpen(true)}
                                >
                                    <span className="btn-icon">🤝</span> Request Food
                                </button>
                                <Link to="/available-food" className="ngo-btn-back-outline">
                                    Browse Other Listings
                                </Link>
                            </div>
                        )}

                        {/* Request Form */}
                        {isFormOpen && !isSubmitted && (
                            <div className="ngo-request-form-card">
                                <div className="ngo-form-header">
                                    <h3 className="ngo-form-title">Request This Food Donation</h3>
                                    <p className="ngo-form-subtitle">
                                        Please provide details about your distribution need to submit this request.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="ngo-request-form">
                                    <div className="ngo-form-row">
                                        <div className="ngo-form-group">
                                            <label htmlFor="requestedQuantity">
                                                Requested Quantity ({food.unit}) <span className="ngo-required">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                id="requestedQuantity"
                                                name="requestedQuantity"
                                                min="1"
                                                max={food.quantity}
                                                value={formData.requestedQuantity}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>

                                        <div className="ngo-form-group">
                                            <label htmlFor="peopleCount">
                                                Number of People to Serve <span className="ngo-required">*</span>
                                            </label>
                                            <input
                                                type="number"
                                                id="peopleCount"
                                                name="peopleCount"
                                                min="1"
                                                placeholder="e.g. 50"
                                                value={formData.peopleCount}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="ngo-form-group">
                                        <label htmlFor="reason">
                                            Reason / Purpose <span className="ngo-required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="reason"
                                            name="reason"
                                            placeholder="e.g. Evening meal distribution for local community shelter"
                                            value={formData.reason}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="ngo-form-group">
                                        <label htmlFor="additionalMessage">
                                            Additional Message (Optional)
                                        </label>
                                        <textarea
                                            id="additionalMessage"
                                            name="additionalMessage"
                                            rows="3"
                                            placeholder="Add notes for pickup timing, volunteer vehicle details, etc."
                                            value={formData.additionalMessage}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>

                                    <div className="ngo-form-actions">
                                        <button type="submit" className="ngo-btn-submit-request">
                                            Submit Request
                                        </button>
                                        <button
                                            type="button"
                                            className="ngo-btn-cancel-request"
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Request Success Message */}
                        {isSubmitted && (
                            <div className="ngo-success-banner">
                                <div className="ngo-success-icon-wrap">✅</div>
                                <div className="ngo-success-content">
                                    <h3 className="ngo-success-title">Food request submitted successfully!</h3>
                                    <p className="ngo-success-text">
                                        Your request for <strong>{formData.requestedQuantity} {food.unit}</strong> of <strong>{food.foodName}</strong> has been received and is pending donor/admin approval.
                                    </p>
                                    <div className="ngo-success-actions">
                                        <Link to="/my-requests" className="ngo-btn-view-requests">
                                            View My Requests →
                                        </Link>
                                        <Link to="/available-food" className="ngo-btn-back-outline">
                                            ← Back to Available Food
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FoodDetails
