import React from 'react'
import { Link } from 'react-router-dom'

const SUMMARY_DATA = [
    {
        id: 'total',
        label: 'Total Donations',
        value: '5',
        icon: '📦',
        color: '#25854b',
        bgColor: '#eaf6ed'
    },
    {
        id: 'active',
        label: 'Active',
        value: '2',
        icon: '⚡',
        color: '#0284c7',
        bgColor: '#e0f2fe'
    },
    {
        id: 'completed',
        label: 'Completed',
        value: '3',
        icon: '✅',
        color: '#16a34a',
        bgColor: '#f0fdf4'
    }
]

const DONATIONS_DATA = [
    {
        id: 1,
        foodItem: 'Cooked Meals',
        category: 'Cooked Meals',
        quantity: '20 Meals',
        status: 'Available',
        date: '24 Sep 2026'
    },
    {
        id: 2,
        foodItem: 'Rice',
        category: 'Rice & Grains',
        quantity: '15 Kg',
        status: 'Picked Up',
        date: '22 Sep 2026'
    },
    {
        id: 3,
        foodItem: 'Bread',
        category: 'Bread & Bakery',
        quantity: '30 Packets',
        status: 'Delivered',
        date: '20 Sep 2026'
    },
    {
        id: 4,
        foodItem: 'Fresh Fruits',
        category: 'Fruits & Vegetables',
        quantity: '10 Kg',
        status: 'Delivered',
        date: '18 Sep 2026'
    }
]

function MyDonations() {
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
        <div className="my-donations-page">
            <div className="my-donations-container">
                {/* Back Navigation Link */}
                <div className="my-donations-nav">
                    <Link to="/donor-dashboard" className="my-donations-back-link">
                        ← Back to Dashboard
                    </Link>
                </div>

                {/* Page Header */}
                <header className="my-donations-header">
                    <div>
                        <span className="my-donations-tag">DONOR RECORDS</span>
                        <h1 className="my-donations-title">My Donations</h1>
                        <p className="my-donations-subtitle">
                            Track all the food donations you have shared through FoodBridge.
                        </p>
                    </div>
                </header>

                {/* Summary Cards */}
                <section className="my-donations-summary">
                    <div className="my-donations-summary-grid">
                        {SUMMARY_DATA.map((item) => (
                            <div key={item.id} className="my-donations-summary-card">
                                <div className="summary-card-header">
                                    <span className="summary-card-label">{item.label}</span>
                                    <div
                                        className="summary-card-icon"
                                        style={{ backgroundColor: item.bgColor, color: item.color }}
                                    >
                                        {item.icon}
                                    </div>
                                </div>
                                <div className="summary-card-value">{item.value}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Donation History Section */}
                <section className="my-donations-history-section">
                    <div className="history-header">
                        <h2 className="history-title">Donation History</h2>
                        <span className="history-count">Showing {DONATIONS_DATA.length} records</span>
                    </div>

                    <div className="history-table-card">
                        <div className="history-table-responsive">
                            <table className="donation-history-table">
                                <thead>
                                    <tr>
                                        <th>Food Item</th>
                                        <th>Category</th>
                                        <th>Quantity</th>
                                        <th>Status</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {DONATIONS_DATA.map((donation) => (
                                        <tr key={donation.id}>
                                            <td>
                                                <strong className="food-item-name">{donation.foodItem}</strong>
                                            </td>
                                            <td className="category-cell">{donation.category}</td>
                                            <td className="quantity-cell">{donation.quantity}</td>
                                            <td>
                                                <span className={`donor-status-badge ${getStatusBadgeClass(donation.status)}`}>
                                                    <span className="donor-status-dot"></span>
                                                    {donation.status}
                                                </span>
                                            </td>
                                            <td className="date-cell">{donation.date}</td>
                                            <td>
                                                <Link
                                                    to={`/donation-details/${donation.id}`}
                                                    className="donor-link-action"
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
        </div>
    )
}

export default MyDonations
