import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home-page">
            {/* 1. NAVBAR */}
            <header className="navbar">
                <div className="nav-container">
                    <Link to="/" className="brand">
                        <div className="brand-badge">♻</div>
                        <div className="brand-text">
                            <span className="brand-name">FoodBridge</span>
                            <span className="brand-tagline">Share • Save • Serve</span>
                        </div>
                    </Link>

                    <nav className="nav-links">
                        <a href="#home">Home</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#roles">Who We Help</a>
                        <a href="#about">About</a>
                    </nav>

                    <div className="nav-actions">
                        <Link to="/login" className="btn-nav-login">
                            Login
                        </Link>
                        <Link to="/register" className="btn-nav-register">
                            Register
                        </Link>
                    </div>
                </div>
            </header>

            {/* 2. HERO SECTION */}
            <section className="hero-section" id="home">
                <div className="section-container hero-grid">
                    <div className="hero-text-content">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Reducing Food Waste • Helping Communities
                        </div>

                        <h1 className="hero-title">
                            Turn Surplus Food <br />
                            <span className="hero-highlight">Into Meaningful Meals.</span>
                        </h1>

                        <p className="hero-description">
                            FoodBridge connects food donors, NGOs and volunteers to make surplus food redistribution simple, fast and organized.
                        </p>

                        <div className="hero-cta-group">
                            <Link to="/register" className="btn-primary">
                                Donate Food
                            </Link>
                            <Link to="/register" className="btn-secondary">
                                Find Food
                            </Link>
                        </div>

                        <div className="hero-supporting-line">
                            <span className="check-icon">✓</span>
                            <span>Connecting donors, NGOs and volunteers</span>
                        </div>
                    </div>

                    <div className="hero-visual-wrapper">
                        {/* Food Redistribution Showcase Card */}
                        <div className="hero-showcase-card">
                            <div className="showcase-header">
                                <div className="showcase-tag">
                                    <span className="status-indicator"></span>
                                    Surplus Food Listing
                                </div>
                                <span className="showcase-ready-badge">Ready for Pickup</span>
                            </div>

                            <div className="showcase-body">
                                <div className="food-icon-box">🍲</div>
                                <div className="food-info">
                                    <h3>Fresh Packaged Meals</h3>
                                    <p className="food-meta">Prepared & Sealed • Available Today</p>
                                    <div className="food-tags">
                                        <span className="tag-pill">Cooked & Safe</span>
                                        <span className="tag-pill">Donor Verified</span>
                                    </div>
                                </div>
                            </div>

                            <div className="showcase-flow">
                                <div className="flow-step-mini active">
                                    <span className="mini-step-num">1</span>
                                    <span>Listed</span>
                                </div>
                                <div className="flow-divider"></div>
                                <div className="flow-step-mini active">
                                    <span className="mini-step-num">2</span>
                                    <span>Requested</span>
                                </div>
                                <div className="flow-divider"></div>
                                <div className="flow-step-mini">
                                    <span className="mini-step-num">3</span>
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Volunteer Coordination Card */}
                        <div className="floating-card volunteer-badge-card">
                            <div className="floating-card-icon">🚴</div>
                            <div className="floating-card-text">
                                <strong>Volunteer Pickup</strong>
                                <p>Route matched to local volunteers</p>
                            </div>
                        </div>

                        {/* Floating Direct Community Connection Card */}
                        <div className="floating-card recipient-badge-card">
                            <div className="floating-card-icon">🤝</div>
                            <div className="floating-card-text">
                                <strong>Direct Redistribution</strong>
                                <p>Delivered to local shelters & NGOs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HOW IT WORKS */}
            <section className="how-it-works-section" id="how-it-works">
                <div className="section-container">
                    <div className="section-header center">
                        <span className="section-label">HOW IT WORKS</span>
                        <h2 className="section-title">From surplus food to the people who need it.</h2>
                        <p className="section-subtitle">
                            A streamlined workflow that bridges surplus food supplies with non-profit demand transparently.
                        </p>
                    </div>

                    <div className="steps-flow">
                        <div className="step-card">
                            <div className="step-card-top">
                                <span className="step-number">01</span>
                                <div className="step-icon-box">🍱</div>
                            </div>
                            <h3>Donate Food</h3>
                            <p>Donors add details about available surplus food, quantities, and pickup times.</p>
                        </div>

                        <div className="step-arrow">→</div>

                        <div className="step-card">
                            <div className="step-card-top">
                                <span className="step-number">02</span>
                                <div className="step-icon-box">📋</div>
                            </div>
                            <h3>Request Food</h3>
                            <p>NGOs can find suitable food and place requests for their organizations.</p>
                        </div>

                        <div className="step-arrow">→</div>

                        <div className="step-card">
                            <div className="step-card-top">
                                <span className="step-number">03</span>
                                <div className="step-icon-box">🚴</div>
                            </div>
                            <h3>Volunteer Pickup</h3>
                            <p>Volunteers coordinate pickup from the donor and safely transport items.</p>
                        </div>

                        <div className="step-arrow">→</div>

                        <div className="step-card">
                            <div className="step-card-top">
                                <span className="step-number">04</span>
                                <div className="step-icon-box">🏡</div>
                            </div>
                            <h3>Deliver</h3>
                            <p>Food reaches the intended recipient organization and feeds people in need.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. THREE USER ROLES */}
            <section className="roles-section" id="roles">
                <div className="section-container">
                    <div className="section-header center">
                        <span className="section-label">COMMUNITY ECOSYSTEM</span>
                        <h2 className="section-title">One Platform. Three Communities.</h2>
                        <p className="section-subtitle">
                            Empowering donors, non-profits, and volunteers to collaborate seamlessly on zero-waste food distribution.
                        </p>
                    </div>

                    <div className="roles-grid">
                        <div className="role-card">
                            <div className="role-icon-wrapper">
                                <span className="role-icon">🏪</span>
                            </div>
                            <span className="role-badge">For Donors</span>
                            <h3>FOOD DONORS</h3>
                            <p className="role-tagline">Share surplus food instead of letting it go to waste.</p>
                            <ul className="role-features">
                                <li>✓ Fast and simple surplus listing</li>
                                <li>✓ Coordinate flexible pickup windows</li>
                                <li>✓ Eliminate preventable food disposal</li>
                            </ul>
                        </div>

                        <div className="role-card highlight-role">
                            <div className="role-icon-wrapper">
                                <span className="role-icon">🏢</span>
                            </div>
                            <span className="role-badge">For Recipients</span>
                            <h3>NGOs / RECIPIENTS</h3>
                            <p className="role-tagline">Find available food and request what your organization needs.</p>
                            <ul className="role-features">
                                <li>✓ Browse verified donor food listings</li>
                                <li>✓ Request batches matched to capacity</li>
                                <li>✓ Feed communities reliably</li>
                            </ul>
                        </div>

                        <div className="role-card">
                            <div className="role-icon-wrapper">
                                <span className="role-icon">🤝</span>
                            </div>
                            <span className="role-badge">For Volunteers</span>
                            <h3>VOLUNTEERS</h3>
                            <p className="role-tagline">Help move donated food from donors to recipients.</p>
                            <ul className="role-features">
                                <li>✓ Pick up local transport missions</li>
                                <li>✓ Connect with nearby donors and shelters</li>
                                <li>✓ Deliver tangible social impact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ABOUT / WHY FOODBRIDGE */}
            <section className="about-section" id="about">
                <div className="section-container about-grid">
                    <div className="about-visual">
                        <div className="about-card-graphic">
                            <div className="graphic-badge">♻ FoodBridge System</div>
                            <div className="graphic-pillars">
                                <div className="pillar-item">
                                    <span className="pillar-icon">🌱</span>
                                    <div>
                                        <strong>Reduce Waste</strong>
                                        <p>Rescue edible meals from being discarded</p>
                                    </div>
                                </div>
                                <div className="pillar-item">
                                    <span className="pillar-icon">🤝</span>
                                    <div>
                                        <strong>Direct Connections</strong>
                                        <p>Match donors directly with registered NGOs</p>
                                    </div>
                                </div>
                                <div className="pillar-item">
                                    <span className="pillar-icon">📍</span>
                                    <div>
                                        <strong>Organized Logistics</strong>
                                        <p>Streamline pickup and volunteer drop-offs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-content">
                        <span className="section-label">ABOUT FOODBRIDGE</span>
                        <h2 className="section-title">Technology that connects food with people.</h2>
                        <p className="about-description">
                            FoodBridge provides an organized platform where surplus food can be redistributed efficiently instead of wasted. Donors, NGOs and volunteers work together through a structured workflow to make redistribution faster, safer, and more accountable.
                        </p>

                        <div className="about-points">
                            <div className="point-item">
                                <span className="point-check">✓</span>
                                <div>
                                    <strong>Reduce food waste</strong>
                                    <p>Transform surplus food into a valuable resource for communities.</p>
                                </div>
                            </div>

                            <div className="point-item">
                                <span className="point-check">✓</span>
                                <div>
                                    <strong>Connect donors with NGOs</strong>
                                    <p>Direct digital connection without unnecessary delays or confusion.</p>
                                </div>
                            </div>

                            <div className="point-item">
                                <span className="point-check">✓</span>
                                <div>
                                    <strong>Coordinate volunteer delivery</strong>
                                    <p>Mobilize volunteers to deliver donations safely to organizations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section className="final-cta-section">
                <div className="section-container">
                    <div className="cta-banner">
                        <div className="cta-content">
                            <span className="cta-tag">BE PART OF THE SOLUTION</span>
                            <h2>Have surplus food?<br />Someone may need it.</h2>
                            <p>
                                Join our community and help turn surplus food into meaningful meals for people in need.
                            </p>
                        </div>
                        <div className="cta-action">
                            <Link to="/register" className="btn-cta-white">
                                Get Started →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FOOTER */}
            <footer className="footer">
                <div className="section-container footer-container">
                    <div className="footer-brand">
                        <div className="brand">
                            <div className="brand-badge">♻</div>
                            <div className="brand-text">
                                <span className="brand-name">FoodBridge</span>
                                <span className="brand-tagline">Share • Save • Serve</span>
                            </div>
                        </div>
                        <p className="footer-mission">
                            A food waste redistribution system connecting donors, NGOs, and volunteers to share surplus meals.
                        </p>
                    </div>

                    <div className="footer-links-group">
                        <h4>Navigation</h4>
                        <a href="#home">Home</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#roles">Who We Help</a>
                        <a href="#about">About</a>
                    </div>

                    <div className="footer-links-group">
                        <h4>Get Started</h4>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="section-container footer-bottom-content">
                        <p>© 2026 FoodBridge</p>
                        <p className="footer-meta">Share • Save • Serve</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home