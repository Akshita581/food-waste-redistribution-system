import React from 'react'
import { useParams, Link } from 'react-router-dom'

const DUMMY_DONATIONS = {
    '1': {
        id: '1',
        foodName: 'Cooked Meals',
        category: 'Cooked Meals',
        quantity: '20',
        unit: 'Meals',
        preparationDate: '24 Sep 2026',
        bestBeforeDate: '25 Sep 2026',
        bestBeforeTime: '10:00 PM',
        pickupLocation: 'Community Kitchen, 14 Green Park Avenue, Sector 12',
        additionalDetails: 'Freshly packed meals (rice, lentils, vegetables) in hygiene-sealed biodegradable boxes. Ready for immediate pickup.',
        status: 'Available'
    },
    '2': {
        id: '2',
        foodName: 'Rice',
        category: 'Rice & Grains',
        quantity: '15',
        unit: 'Kg',
        preparationDate: '20 Sep 2026',
        bestBeforeDate: '30 Oct 2026',
        bestBeforeTime: '06:00 PM',
        pickupLocation: 'Wholesale Depot, Bay 4, Ring Road Market',
        additionalDetails: 'Dry basmati rice packed in airtight food-grade bags. Stored in cool dry conditions.',
        status: 'Picked Up'
    },
    '3': {
        id: '3',
        foodName: 'Bread',
        category: 'Bread & Bakery',
        quantity: '30',
        unit: 'Packets',
        preparationDate: '20 Sep 2026',
        bestBeforeDate: '23 Sep 2026',
        bestBeforeTime: '08:00 AM',
        pickupLocation: 'BakeHouse Central, 88 High Street',
        additionalDetails: 'Assorted whole wheat and multi-grain loaves baked fresh this morning.',
        status: 'Delivered'
    },
    '4': {
        id: '4',
        foodName: 'Fresh Fruits',
        category: 'Fruits & Vegetables',
        quantity: '10',
        unit: 'Kg',
        preparationDate: '18 Sep 2026',
        bestBeforeDate: '22 Sep 2026',
        bestBeforeTime: '04:00 PM',
        pickupLocation: 'FarmFresh Outlet, Stall 19, City Market',
        additionalDetails: 'Seasonal fresh apples and oranges, crate-packed and sorted.',
        status: 'Delivered'
    }
}

const DEFAULT_DONATION = {
    id: '1',
    foodName: 'Cooked Meals',
    category: 'Cooked Meals',
    quantity: '20',
    unit: 'Meals',
    preparationDate: '24 Sep 2026',
    bestBeforeDate: '25 Sep 2026',
    bestBeforeTime: '10:00 PM',
    pickupLocation: 'Community Kitchen, 14 Green Park Avenue, Sector 12',
    additionalDetails: 'Freshly packed meals in hygiene-sealed boxes. Ready for immediate pickup.',
    status: 'Available'
}

function DonationDetails() {
    const { id } = useParams()
    const donation = (id && DUMMY_DONATIONS[id]) ? DUMMY_DONATIONS[id] : { ...DEFAULT_DONATION, id: id || '1' }

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
        <div className="donation-details-page">
            <div className="donation-details-container">
                {/* Navigation Links */}
                <div className="donation-details-nav">
                    <Link to="/my-donations" className="donation-nav-link">
                        ← Back to My Donations
                    </Link>
                    <Link to="/donor-dashboard" className="donation-nav-link secondary">
                        ← Back to Dashboard
                    </Link>
                </div>

                {/* Donation Details Card */}
                <div className="donation-details-card">
                    {/* Header */}
                    <div className="donation-details-header">
                        <div className="donation-header-left">
                            <span className="donation-id-badge">DONATION #{donation.id}</span>
                            <h1 className="donation-details-title">Donation Details</h1>
                            <p className="donation-details-subtitle">
                                Detailed information about this food donation listing.
                            </p>
                        </div>
                        <div className="donation-header-right">
                            <span className={`donor-status-badge ${getStatusBadgeClass(donation.status)}`}>
                                <span className="donor-status-dot"></span>
                                {donation.status}
                            </span>
                        </div>
                    </div>

                    {/* Information Grid */}
                    <div className="donation-info-grid">
                        {/* Food Name */}
                        <div className="donation-info-item">
                            <span className="info-label">Food Name</span>
                            <strong className="info-value primary-value">{donation.foodName}</strong>
                        </div>

                        {/* Food Category */}
                        <div className="donation-info-item">
                            <span className="info-label">Food Category</span>
                            <span className="info-value category-pill">{donation.category}</span>
                        </div>

                        {/* Quantity */}
                        <div className="donation-info-item">
                            <span className="info-label">Quantity</span>
                            <span className="info-value">{donation.quantity}</span>
                        </div>

                        {/* Unit */}
                        <div className="donation-info-item">
                            <span className="info-label">Unit</span>
                            <span className="info-value">{donation.unit}</span>
                        </div>

                        {/* Preparation Date */}
                        <div className="donation-info-item">
                            <span className="info-label">Preparation Date</span>
                            <span className="info-value">{donation.preparationDate}</span>
                        </div>

                        {/* Best Before Date */}
                        <div className="donation-info-item">
                            <span className="info-label">Best Before Date</span>
                            <span className="info-value">{donation.bestBeforeDate}</span>
                        </div>

                        {/* Best Before Time */}
                        <div className="donation-info-item">
                            <span className="info-label">Best Before Time</span>
                            <span className="info-value">{donation.bestBeforeTime}</span>
                        </div>

                        {/* Donation Status */}
                        <div className="donation-info-item">
                            <span className="info-label">Donation Status</span>
                            <span className="info-value status-text">{donation.status}</span>
                        </div>
                    </div>

                    {/* Full Width: Pickup Location */}
                    <div className="donation-full-item">
                        <span className="info-label">Pickup Location</span>
                        <div className="location-box">
                            <span className="location-icon">📍</span>
                            <span className="location-text">{donation.pickupLocation}</span>
                        </div>
                    </div>

                    {/* Full Width: Additional Details */}
                    <div className="donation-full-item">
                        <span className="info-label">Additional Details</span>
                        <div className="details-box">
                            <p>{donation.additionalDetails || 'No additional details provided.'}</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="donation-details-actions">
                        <Link to="/my-donations" className="btn-back-donations">
                            ← Back to My Donations
                        </Link>
                        <Link to="/donor-dashboard" className="btn-back-dashboard">
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonationDetails
