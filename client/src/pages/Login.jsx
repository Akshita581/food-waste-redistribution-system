import { useState } from 'react'
import { Link } from 'react-router-dom'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('Email:', email)
        console.log('Password:', password)
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>Welcome Back</h1>
                <p className="auth-subtitle">
                    Login to Food Waste Redistribution System
                </p>

                <form onSubmit={handleSubmit}>
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
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">
                        Login
                    </button>
                </form>

                <p className="auth-link">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    )
}

export default Login