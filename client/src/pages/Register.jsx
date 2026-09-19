import { useState } from 'react'
import { Link } from 'react-router-dom'
function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('Name:', name)
        console.log('Email:', email)
        console.log('Password:', password)
        console.log('Role:', role)
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Create Account</h1>

                <p className="auth-subtitle">
                    Register for Food Waste Redistribution System
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Create a password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="role">Register As</label>

                        <select
                            id="role"
                            value={role}
                            onChange={(event) => setRole(event.target.value)}
                            required
                        >
                            <option value="">Select your role</option>
                            <option value="DONOR">Food Donor</option>
                            <option value="NGO">NGO / Recipient</option>
                            <option value="VOLUNTEER">Volunteer</option>
                        </select>
                    </div>

                    <button type="submit" className="auth-button">
                        Create Account
                    </button>
                </form>

                <p className="auth-link">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Register