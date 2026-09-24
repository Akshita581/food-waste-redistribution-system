import React from 'react'
import { Link } from 'react-router-dom'

export const AVAILABLE_FOOD_DATA = [
    {
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
    },
    {
        id: 2,
        foodName: 'Rice',
        category: 'Rice & Grains',
        quantity: 15,
        unit: 'Kg',
        preparationDate: '24 Sep 2026',
        bestBeforeDate: '25 Sep 2026',
        bestBeforeTime: '6:00 PM',
        pickupLocation: 'Mathura City',
        donor: 'Local Restaurant',
        status: 'Available',
        additionalDetails: 'Cooked rice packed properly for distribution.',
        icon: '🌾'
    },
    {
        id: 3,
        foodName: 'Fresh Fruits',
        category: 'Fruits & Vegetables',
        quantity: 10,
        unit: 'Kg',
        preparationDate: '24 Sep 2026',
        bestBeforeDate: '26 Sep 2026',
        bestBeforeTime: '5:00 PM',
        pickupLocation: 'Mathura Market',
        donor: 'Fresh Mart',
        status: 'Available',
        additionalDetails: 'Fresh seasonal fruits.',
        icon: '🍎'
    },
    {
        id: 4,
        foodName: 'Bread',
        category: 'Bread & Bakery',
        quantity: 30,
        unit: 'Packets',
        preparationDate: '23 Sep 2026',
        bestBeforeDate: '25 Sep 2026',
        bestBeforeTime: '7:00 PM',
        pickupLocation: 'Mathura Bakery',
        donor: 'Sunrise Bakery',
        status: 'Available',
        additionalDetails: 'Fresh bread packets.',
        icon: '🍞'
    }
]

function AvailableFood() {
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
                    {/* Back Navigation */}
                    <div className="ngo-page-nav-bar">
                        <Link to="/ngo-dashboard" className="ngo-back-link">
                            ← Back to Dashboard
                        </Link>
                    </div>

                    {/* Page Header */}
                    <header className="ngo-page-header">
                        <div>
                            <span className="ngo-page-tag">SURPLUS LISTINGS</span>
                            <h1 className="ngo-page-title">Available Food</h1>
                            <p className="ngo-page-subtitle">
                                Browse surplus food donations available for your organization.
                            </p>
                        </div>
                        <div className="ngo-page-header-badge">
                            <span className="ngo-badge-count">{AVAILABLE_FOOD_DATA.length} Donations Available</span>
                        </div>
                    </header>

                    {/* Available Food Cards Grid */}
                    <div className="ngo-food-catalog-grid">
                        {AVAILABLE_FOOD_DATA.map((food) => (
                            <div key={food.id} className="ngo-catalog-card">
                                <div className="ngo-catalog-card-header">
                                    <div className="ngo-catalog-title-group">
                                        <div className="ngo-catalog-icon-wrap">
                                            {food.icon}
                                        </div>
                                        <div>
                                            <h2 className="ngo-catalog-food-name">{food.foodName}</h2>
                                            <span className="ngo-catalog-category">{food.category}</span>
                                        </div>
                                    </div>
                                    <span className="ngo-status-badge ngo-status-available">
                                        <span className="ngo-status-dot"></span>
                                        {food.status}
                                    </span>
                                </div>

                                <div className="ngo-catalog-card-body">
                                    <div className="ngo-catalog-meta-row">
                                        <span className="ngo-catalog-label">Quantity</span>
                                        <span className="ngo-catalog-value highlight">
                                            {food.quantity} {food.unit}
                                        </span>
                                    </div>
                                    <div className="ngo-catalog-meta-row">
                                        <span className="ngo-catalog-label">Available Until</span>
                                        <span className="ngo-catalog-value">
                                            {food.bestBeforeDate}, {food.bestBeforeTime}
                                        </span>
                                    </div>
                                    <div className="ngo-catalog-meta-row">
                                        <span className="ngo-catalog-label">Donor</span>
                                        <span className="ngo-catalog-value donor-text">{food.donor}</span>
                                    </div>
                                    <div className="ngo-catalog-meta-row location-row">
                                        <span className="ngo-catalog-label">Pickup Location</span>
                                        <span className="ngo-catalog-value location-text">
                                            📍 {food.pickupLocation}
                                        </span>
                                    </div>
                                </div>

                                <div className="ngo-catalog-card-footer">
                                    <Link to={`/food-details/${food.id}`} className="ngo-btn-view-food">
                                        View Details →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AvailableFood
