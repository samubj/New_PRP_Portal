import React, { useState } from 'react'
import ProductLogo from '../assets/LoginAssets/Eduhire.png'
import LoginIllustration from '../assets/LoginAssets/LoginIllustration.png'
import EmailIcon from '../assets/LoginAssets/EmailIcon.png'
import PasswordIcon from '../assets/LoginAssets/PasswordIcon.png'
import ShowPasswordIcon from '../assets/LoginAssets/ShowPasswordIcon.png'
import HidePasswordIcon from '../assets/LoginAssets/HidePasswordIcon.png'
import GoogleIcon from '../assets/LoginAssets/GoogleIcon.png'
import SearchIcon from '../assets/LoginAssets/SearchIcon.png'
import LearnIcon from '../assets/LoginAssets/LearnIcon.png'
import TrustedIcon from '../assets/LoginAssets/TrustedIcon.png'
import InfoIcon from '../assets/LoginAssets/InfoIcon.png'
import SignInArrow from '../assets/LoginAssets/SignInArrow.png'
import './CommonLoginScreen.css'

const CommonLoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [keepSignedIn, setKeepSignedIn] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const validateEmail = (value) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.(com|in|edu|org)$/i

        if (!value.trim()) {
            return 'Email address is required.'
        }

        if (!emailPattern.test(value.trim())) {
            return 'Enter a valid email address with .com, .in, .edu or .org.'
        }

        return ''
    }

    const validatePassword = (value) => {
        if (!value) {
            return 'Password is required.'
        }

        if (value.length < 8) {
            return 'Password must contain at least 8 characters.'
        }

        if (!/[A-Z]/.test(value)) {
            return 'Password must contain at least one capital letter.'
        }

        if (!/[0-9]/.test(value)) {
            return 'Password must contain at least one number.'
        }

        if (!/[!@#$%^&*(),.?":{}|<>_\-\\[\]';/+=~`]/.test(value)) {
            return 'Password must contain at least one special character.'
        }

        return ''
    }

    const handleEmailChange = (event) => {
        const value = event.target.value
        setEmail(value)

        if (emailError) {
            setEmailError(validateEmail(value))
        }
    }

    const handlePasswordChange = (event) => {
        const value = event.target.value
        setPassword(value)

        if (passwordError) {
            setPasswordError(validatePassword(value))
        }
    }

    const handleEmailBlur = () => {
        setEmailError(validateEmail(email))
    }

    const handlePasswordBlur = () => {
        setPasswordError(validatePassword(password))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const emailValidationError = validateEmail(email)
        const passwordValidationError = validatePassword(password)

        setEmailError(emailValidationError)
        setPasswordError(passwordValidationError)

        if (emailValidationError || passwordValidationError) {
            return
        }

        console.log({
            email,
            password,
            keepSignedIn
        })
    }

    return (
        <div className="Common-Login-Container">
            <div className="Common-Login-Left">
                <div className="Common-Login-Brand">
                    <div className="Common-Login-Brand-Logo">
                        <img src={ProductLogo} alt="EduHire Logo" />
                    </div>
                    <div className="Common-Login-Brand-Content">
                        <h3>Placement & Recruitment Platform</h3>
                        <p>Connect • Discover • Succeed</p>
                    </div>
                </div>

                <div className="Common-Login-Welcome-Content">
                    <h5>WELCOME</h5>
                    <h1>One Platform. Endless<br />Opportunities</h1>
                    <p>
                        Discover jobs, build your skills, and take the next step in your
                        <br className="Common-Login-Desktop-Break" /> career journey with EduHire.
                    </p>
                </div>

                <div className="Common-Login-Features">
                    <div className="Common-Login-Feature">
                        <div className="Common-Login-Feature-Icon">
                            <img src={SearchIcon} alt="Search" />
                        </div>
                        <h3>Find Opportunities</h3>
                        <p>
                            Explore roles from top<br />
                            companies
                        </p>
                    </div>

                    <div className="Common-Login-Feature">
                        <div className="Common-Login-Feature-Icon">
                            <img src={LearnIcon} alt="Learn" />
                        </div>
                        <h3>Learn & Grow</h3>
                        <p>
                            Access resources to build<br />
                            your skills
                        </p>
                    </div>

                    <div className="Common-Login-Feature">
                        <div className="Common-Login-Feature-Icon">
                            <img src={TrustedIcon} alt="Trusted platform" />
                        </div>
                        <h3>A Trusted Platform</h3>
                        <p>
                            Safe, transparent and<br />
                            reliable.
                        </p>
                    </div>
                </div>

                <div className="Common-Login-Illustration-Container">
                    <img
                        src={LoginIllustration}
                        alt="EduHire platform illustration"
                    />
                </div>

                <div className="Common-Login-Info">
                    <img src={InfoIcon} alt="Information" />
                    <p>
                        Connecting students with the right opportunities to build
                        successful careers.
                    </p>
                </div>
            </div>

            <div className="Common-Login-Right">
                <div className="Common-Login-Form-Container">
                    <div className="Common-Login-Form-Header">
                        <h1>Welcome Back</h1>
                        <p>Login to your EduHire account</p>
                    </div>

                    <form
                        className="Common-Login-Form"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className="Common-Login-Field">
                            <label htmlFor="email">Email Address</label>

                            <div
                                className={`Common-Login-Input-Container ${
                                    emailError ? 'Common-Login-Input-Error' : ''
                                }`}
                            >
                                <img src={EmailIcon} alt="Email" />

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter Email address"
                                    value={email}
                                    onChange={handleEmailChange}
                                    onBlur={handleEmailBlur}
                                />
                            </div>

                            {emailError && (
                                <p className="Common-Login-Validation-Error">
                                    {emailError}
                                </p>
                            )}
                        </div>

                        <div className="Common-Login-Field">
                            <div className="Common-Login-Password-Label">
                                <label htmlFor="password">Password</label>

                                <button
                                    type="button"
                                    className="Common-Login-Forgot-Password"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            <div
                                className={`Common-Login-Input-Container ${
                                    passwordError ? 'Common-Login-Input-Error' : ''
                                }`}
                            >
                                <img src={PasswordIcon} alt="Password" />

                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    onBlur={handlePasswordBlur}
                                />

                                <button
                                    type="button"
                                    className="Common-Login-Password-Toggle"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    <img
                                        src={
                                            showPassword
                                                ? HidePasswordIcon
                                                : ShowPasswordIcon
                                        }
                                        alt={
                                            showPassword
                                                ? 'Hide password'
                                                : 'Show password'
                                        }
                                    />
                                </button>
                            </div>

                            {passwordError && (
                                <p className="Common-Login-Validation-Error">
                                    {passwordError}
                                </p>
                            )}
                        </div>

                        <label className="Common-Login-Remember">
                            <input
                                type="checkbox"
                                checked={keepSignedIn}
                                onChange={(event) =>
                                    setKeepSignedIn(event.target.checked)
                                }
                            />
                            <span>Keep me signed in</span>
                        </label>

                        <button
                            type="submit"
                            className="Common-Login-SignIn-Button"
                        >
                            <span>Sign In</span>
                            <img
                                className="Common-Login-SignIn-Arrow"
                                src={SignInArrow}
                                alt="Sign in"
                            />
                        </button>
                    </form>

                    <div className="Common-Login-Divider">
                        <span></span>
                        <p>OR CONTINUE WITH</p>
                        <span></span>
                    </div>

                    <button
                        type="button"
                        className="Common-Login-Google-Button"
                    >
                        <img src={GoogleIcon} alt="Google" />
                        <span>Google</span>
                    </button>

                    <p className="Common-Login-Create-Account">
                        Don't have an account?
                        <button type="button">Create Account</button>
                    </p>

                    <div className="Common-Login-Footer-Links">
                        <a href="#help">Help</a>
                        <span>•</span>
                        <a href="#privacy">Privacy</a>
                        <span>•</span>
                        <a href="#terms">Terms</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommonLoginScreen