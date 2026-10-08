import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'

/**
 * Initial Sample Donations Data
 * (Frontend demo data consistent with FoodBridge donor listings)
 */
const INITIAL_DONATIONS = [
    {
        id: 1,
        food: 'Cooked Meals',
        category: 'Prepared Meals',
        donor: 'Campus Cafeteria',
        quantity: '20 Meals',
        pickupLocation: 'GLA University, Mathura',
        status: 'Available',
        date: '24 Sep 2026',
        expiryTime: 'Within 6 hours',
        donorContact: '+91 98765 11223',
        notes: 'Freshly packed meals prepared for lunch; sealed in hygienic containers.'
    },
    {
        id: 2,
        food: 'Rice',
        category: 'Dry Grains',
        donor: 'Local Restaurant',
        quantity: '15 Kg',
        pickupLocation: 'Mathura City',
        status: 'Picked Up',
        date: '23 Sep 2026',
        expiryTime: 'Best before 3 days',
        donorContact: '+91 98765 22334',
        notes: 'High quality basmati rice stored in clean dry sacks.'
    },
    {
        id: 3,
        food: 'Fresh Fruits',
        category: 'Fruits & Vegetables',
        donor: 'Fresh Mart',
        quantity: '10 Kg',
        pickupLocation: 'Mathura Market',
        status: 'Delivered',
        date: '22 Sep 2026',
        expiryTime: 'Best before 2 days',
        donorContact: '+91 98765 33445',
        notes: 'Assorted seasonal apples and bananas in cardboard crates.'
    },
    {
        id: 4,
        food: 'Bread',
        category: 'Bakery',
        donor: 'Sunrise Bakery',
        quantity: '30 Packets',
        pickupLocation: 'Mathura Bakery',
        status: 'Available',
        date: '24 Sep 2026',
        expiryTime: 'Best before 2 days',
        donorContact: '+91 98765 44556',
        notes: 'Whole wheat freshly baked bread loaves.'
    },
    {
        id: 5,
        food: 'Vegetable Curry',
        category: 'Prepared Meals',
        donor: 'City Restaurant',
        quantity: '12 Kg',
        pickupLocation: 'Mathura City',
        status: 'Picked Up',
        date: '25 Sep 2026',
        expiryTime: 'Within 8 hours',
        donorContact: '+91 98765 55667',
        notes: 'Mixed vegetable curry packed in thermal containers.'
    },
    {
        id: 6,
        food: 'Packaged Snacks',
        category: 'Packaged Food',
        donor: 'Local Event Organizer',
        quantity: '50 Packets',
        pickupLocation: 'Mathura Event Hall',
        status: 'Delivered',
        date: '21 Sep 2026',
        expiryTime: 'Best before 15 days',
        donorContact: '+91 98765 66778',
        notes: 'Biscuits, granola bars and sealed snack packs from event.'
    }
]

function AdminDonations() {
    const [donations] = useState(INITIAL_DONATIONS)
    const [searchTerm, setSearchTerm] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [selectedDonation, setSelectedDonation] = useState(null)

    // Helper for status badge styling
    const getStatusBadgeClass = (status) => {
        switch (status.toLowerCase()) {
            case 'available':
                return 'admin-status-available'
            case 'picked up':
                return 'admin-status-picked'
            case 'delivered':
                return 'admin-status-delivered'
            default:
                return 'admin-status-default'
        }
    }

    // Filter logic
    const filteredDonations = donations.filter((item) => {
        const matchesStatus = statusFilter === 'All' || item.status.toLowerCase() === statusFilter.toLowerCase()
        const matchesSearch =
            item.food.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.donor.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.pickupLocation.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesStatus && matchesSearch
    })

    const availableCount = donations.filter((d) => d.status === 'Available').length
    const pickedUpCount = donations.filter((d) => d.status === 'Picked Up').length
    const deliveredCount = donations.filter((d) => d.status === 'Delivered').length

    return (
        <div className="admin-dashboard">
            {/* ADMIN NAVBAR */}
            <AdminNavbar />

            {/* MAIN CONTENT */}
            <main className="admin-main-content">
                <div className="admin-container">
                    {/* Back Navigation */}
                    <div className="admin-page-nav-bar">
                        <Link to="/admin-dashboard" className="admin-back-link">
                            ← Back to Dashboard
                        </Link>
                    </div>

                    {/* Page Header */}
                    <header className="admin-page-header">
                        <div>
                            <span className="admin-page-tag">DONATION REGISTRY</span>
                            <h1 className="admin-page-title">Manage Surplus Donations</h1>
                            <p className="admin-page-subtitle">
                                Oversee all surplus food contributions listed by restaurants, cafeterias, and grocery donors.
                            </p>
                        </div>
                        <div className="admin-header-badge">
                            <span className="admin-badge-count">{donations.length} Listings Total</span>
                        </div>
                    </header>

                    {/* Summary Metric Cards */}
                    <div className="admin-users-stats-row">
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Total Listings</span>
                            <strong className="admin-stat-small-value">{donations.length}</strong>
                        </div>
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Available</span>
                            <strong className="admin-stat-small-value text-green">{availableCount}</strong>
                        </div>
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">In Transit / Picked</span>
                            <strong className="admin-stat-small-value text-blue">{pickedUpCount}</strong>
                        </div>
                        <div className="admin-user-stat-card">
                            <span className="admin-stat-small-label">Delivered</span>
                            <strong className="admin-stat-small-value text-emerald">{deliveredCount}</strong>
                        </div>
                    </div>

                    {/* Controls: Search & Status Filter */}
                    <div className="admin-controls-card">
                        <div className="admin-search-wrapper">
                            <span className="admin-search-icon">🔍</span>
                            <input
                                type="text"
                                placeholder="Search by food name, donor, or location..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="admin-search-input"
                            />
                        </div>

                        <div className="admin-filters-group">
                            <label htmlFor="status-filter" className="admin-filter-label">Filter by Status:</label>
                            <select
                                id="status-filter"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="admin-filter-select"
                            >
                                <option value="All">All Statuses</option>
                                <option value="Available">Available</option>
                                <option value="Picked Up">Picked Up</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                    </div>

                    {/* Donations Table Card */}
                    <section className="admin-table-card">
                        <div className="admin-table-responsive">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Food</th>
                                        <th>Donor</th>
                                        <th>Quantity</th>
                                        <th>Pickup Location</th>
                                        <th>Status</th>
                                        <th style={{ textAlign: 'right' }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredDonations.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="admin-empty-cell">
                                                No donations found matching your search.
                                            </td>
                                        </tr>
                                    ) : (
                                        filteredDonations.map((item) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <div className="admin-item-cell">
                                                        <strong className="admin-item-title">{item.food}</strong>
                                                        <span className="admin-item-sub">{item.category} • #{item.id}</span>
                                                    </div>
                                                </td>
                                                <td className="admin-donor-cell">
                                                    <span className="admin-donor-name">{item.donor}</span>
                                                </td>
                                                <td className="admin-quantity-cell highlight">{item.quantity}</td>
                                                <td>
                                                    <div className="admin-location-cell">
                                                        <span className="admin-loc-pin">📍</span>
                                                        <span>{item.pickupLocation}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={`admin-status-badge ${getStatusBadgeClass(item.status)}`}>
                                                        <span className="admin-status-dot"></span>
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td style={{ textAlign: 'right' }}>
                                                    <button
                                                        type="button"
                                                        className="admin-btn-action-view"
                                                        onClick={() => setSelectedDonation(item)}
                                                    >
                                                        View
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>

            {/* VIEW DONATION DETAILS MODAL */}
            {selectedDonation && (
                <div className="admin-modal-overlay" onClick={() => setSelectedDonation(null)}>
                    <div className="admin-modal-card" onClick={(e) => e.stopPropagation()}>
                        <div className="admin-modal-header">
                            <div>
                                <span className="admin-modal-tag">DONATION DETAILS</span>
                                <h2 className="admin-modal-title">{selectedDonation.food}</h2>
                            </div>
                            <button
                                type="button"
                                className="admin-modal-close"
                                onClick={() => setSelectedDonation(null)}
                            >
                                ✕
                            </button>
                        </div>

                        <div className="admin-modal-body">
                            <div className="admin-modal-grid">
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Donation ID</span>
                                    <span className="admin-modal-value">#DON-00{selectedDonation.id}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Category</span>
                                    <span className="admin-modal-value">{selectedDonation.category}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Donor Name</span>
                                    <span className="admin-modal-value font-bold">{selectedDonation.donor}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Donor Contact</span>
                                    <span className="admin-modal-value">{selectedDonation.donorContact}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Quantity Listed</span>
                                    <span className="admin-modal-value highlight">{selectedDonation.quantity}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Current Status</span>
                                    <span className="admin-modal-value">
                                        <span className={`admin-status-badge ${getStatusBadgeClass(selectedDonation.status)}`}>
                                            <span className="admin-status-dot"></span>
                                            {selectedDonation.status}
                                        </span>
                                    </span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Listed Date</span>
                                    <span className="admin-modal-value">{selectedDonation.date}</span>
                                </div>
                                <div className="admin-modal-info-item">
                                    <span className="admin-modal-label">Shelf Life / Window</span>
                                    <span className="admin-modal-value">{selectedDonation.expiryTime}</span>
                                </div>
                                <div className="admin-modal-info-item full-width">
                                    <span className="admin-modal-label">Pickup Location</span>
                                    <span className="admin-modal-value">📍 {selectedDonation.pickupLocation}</span>
                                </div>
                                <div className="admin-modal-info-item full-width">
                                    <span className="admin-modal-label">Notes & Instructions</span>
                                    <span className="admin-modal-value notes-text">{selectedDonation.notes}</span>
                                </div>
                            </div>
                        </div>

                        <div className="admin-modal-footer">
                            <button
                                type="button"
                                className="admin-btn-modal-close"
                                onClick={() => setSelectedDonation(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminDonations
