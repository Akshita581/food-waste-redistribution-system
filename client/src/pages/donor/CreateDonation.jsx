import { useState } from 'react'
import { Link } from 'react-router-dom'

function CreateDonation() {
    const [formData, setFormData] = useState({
        foodName: '',
        category: '',
        quantity: '',
        unit: '',
        preparationDate: '',
        bestBeforeDate: '',
        bestBeforeTime: '',
        pickupLocation: '',
        additionalDetails: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div className="donor-create-page">
            <div className="donor-create-container">
                {/* Back Navigation Link */}
                <div className="donor-create-nav">
                    <Link to="/donor-dashboard" className="donor-create-back-link">
                        ← Back to Dashboard
                    </Link>
                </div>

                {/* Donation Form Card */}
                <div className="donor-create-card">
                    {/* Header */}
                    <div className="donor-create-header">
                        <span className="donor-create-tag">NEW DONATION</span>
                        <h1 className="donor-create-title">Create Food Donation</h1>
                        <p className="donor-create-subtitle">
                            Share details about your surplus food so it can reach someone who needs it.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="donor-create-form">
                        {/* Row 1: Food Name & Category */}
                        <div className="donor-create-form-row">
                            <div className="donor-create-form-group">
                                <label htmlFor="foodName">
                                    Food Name <span className="donor-create-required">*</span>
                                </label>
                                <input
                                    id="foodName"
                                    name="foodName"
                                    type="text"
                                    placeholder="e.g. Cooked Meals, Rice, Bread"
                                    value={formData.foodName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="donor-create-form-group">
                                <label htmlFor="category">
                                    Food Category <span className="donor-create-required">*</span>
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select category</option>
                                    <option value="Cooked Meals">Cooked Meals</option>
                                    <option value="Rice & Grains">Rice & Grains</option>
                                    <option value="Bread & Bakery">Bread & Bakery</option>
                                    <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                                    <option value="Packaged Food">Packaged Food</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 2: Quantity & Unit */}
                        <div className="donor-create-form-row">
                            <div className="donor-create-form-group">
                                <label htmlFor="quantity">
                                    Quantity <span className="donor-create-required">*</span>
                                </label>
                                <input
                                    id="quantity"
                                    name="quantity"
                                    type="number"
                                    min="1"
                                    placeholder="Enter quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="donor-create-form-group">
                                <label htmlFor="unit">
                                    Unit <span className="donor-create-required">*</span>
                                </label>
                                <select
                                    id="unit"
                                    name="unit"
                                    value={formData.unit}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select unit</option>
                                    <option value="Meals">Meals</option>
                                    <option value="Kg">Kg</option>
                                    <option value="Packets">Packets</option>
                                    <option value="Boxes">Boxes</option>
                                    <option value="Litres">Litres</option>
                                </select>
                            </div>
                        </div>

                        {/* Preparation Date */}
                        <div className="donor-create-form-group">
                            <label htmlFor="preparationDate">
                                Preparation Date <span className="donor-create-required">*</span>
                            </label>
                            <input
                                id="preparationDate"
                                name="preparationDate"
                                type="date"
                                value={formData.preparationDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Row 3: Best Before Date & Best Before Time */}
                        <div className="donor-create-form-row">
                            <div className="donor-create-form-group">
                                <label htmlFor="bestBeforeDate">
                                    Best Before Date <span className="donor-create-required">*</span>
                                </label>
                                <input
                                    id="bestBeforeDate"
                                    name="bestBeforeDate"
                                    type="date"
                                    value={formData.bestBeforeDate}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="donor-create-form-group">
                                <label htmlFor="bestBeforeTime">
                                    Best Before Time <span className="donor-create-required">*</span>
                                </label>
                                <input
                                    id="bestBeforeTime"
                                    name="bestBeforeTime"
                                    type="time"
                                    value={formData.bestBeforeTime}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* Full Width: Pickup Location */}
                        <div className="donor-create-form-group">
                            <label htmlFor="pickupLocation">
                                Pickup Location <span className="donor-create-required">*</span>
                            </label>
                            <input
                                id="pickupLocation"
                                name="pickupLocation"
                                type="text"
                                placeholder="Enter pickup address"
                                value={formData.pickupLocation}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Full Width: Additional Details */}
                        <div className="donor-create-form-group">
                            <label htmlFor="additionalDetails">Additional Details</label>
                            <textarea
                                id="additionalDetails"
                                name="additionalDetails"
                                rows="4"
                                placeholder="Add any important information about the food..."
                                value={formData.additionalDetails}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Form Actions */}
                        <div className="donor-create-actions">
                            <button type="submit" className="donor-create-submit-btn">
                                Submit Donation
                            </button>
                            <Link to="/donor-dashboard" className="donor-create-cancel-btn">
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateDonation
