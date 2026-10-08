import React from 'react'
import { Link, useLocation } from 'react-router-dom'

/**
 * AdminNavbar Component
 * Consistent navigation bar for all Admin module pages.
 */
function AdminNavbar() {
    const location = useLocation()
    const currentPath = location.pathname

    const navLinks = [
        { label: 'Dashboard', path: '/admin-dashboard' },
        { label: 'Users', path: '/admin-users' },
        { label: 'Donations', path: '/admin-donations' },
        { label: 'Requests', path: '/admin-requests' },
        { label: 'Assignments', path: '/admin-assignments' }
    ]

    return (
        <header className="admin-navbar">
            <div className="admin-nav-container">
                {/* Brand & Left Navigation Links */}
                <div className="admin-nav-left">
                    <Link to="/" className="admin-brand">
                        <div className="brand-badge">♻</div>
                        <div className="brand-text">
                            <span className="brand-name">FoodBridge</span>
                            <span className="brand-tagline">Share • Save • Serve</span>
                        </div>
                    </Link>

                    <nav className="admin-nav-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`admin-nav-link ${currentPath === link.path ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right Side: Admin Pill & Logout */}
                <div className="admin-nav-right">
                    <div className="admin-user-pill">
                        <span className="admin-avatar-icon">🛡️</span>
                        <span className="admin-role-name">Admin</span>
                    </div>
                    <Link to="/login" className="admin-logout-btn">
                        Logout
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default AdminNavbar
