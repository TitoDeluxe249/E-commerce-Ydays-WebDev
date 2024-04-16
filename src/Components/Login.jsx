import React, { useState, useEffect } from 'react';
import './Login.css';
import loadingGif from '../assets/image/Loading.gif';

function Login() {
    const defaultUsername = 'TIBAY';
    const defaultPassword = 'TIBAY';
    const [loginUsername, setLoginUsername] = useState(defaultUsername);
    const [loginPassword, setLoginPassword] = useState(defaultPassword);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setShowWelcomeMessage(true);
                setTimeout(() => {
                    window.location.href = '/';
                }, 3000);
            }, 3000);
        }
    }, [isLoggedIn]);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            if (loginUsername === defaultUsername && loginPassword === defaultPassword) {
                setIsLoggedIn(true);
            } else {
                throw new Error('Nom d\'utilisateur ou mot de passe incorrect.');
            }
        } catch (error) {
            setIsLoading(false);
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="login-container">
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    {isLoading ? (
                                                        <div>
                                                            <img src={loadingGif} alt="Loading" />
                                                            <p>Connexion en cours...</p>
                                                        </div>
                                                    ) : showWelcomeMessage ? (
                                                        <div>
                                                            <h2>Bienvenue</h2>
                                                            <p>Vous êtes connecté avec succès !</p>
                                                        </div>
                                                    ) : isLoggedIn ? null : (
                                                        <form onSubmit={handleLogin}>
                                                            <div className="form-group">
                                                                <input
                                                                    type="text"
                                                                    name="login_username"
                                                                    className="form-style"
                                                                    value={loginUsername}
                                                                    onChange={(e) => setLoginUsername(e.target.value)}
                                                                    placeholder="Nom d'utilisateur"
                                                                    autoComplete="on"
                                                                    required
                                                                />
                                                                <i className="input-icon uil uil-at"></i>
                                                            </div>
                                                            <div className="form-group mt-2">
                                                                <input
                                                                    type="password"
                                                                    name="login_password"
                                                                    className="form-style"
                                                                    value={loginPassword}
                                                                    onChange={(e) => setLoginPassword(e.target.value)}
                                                                    placeholder="Mot de passe"
                                                                    autoComplete="off"
                                                                    required
                                                                />
                                                                <i className="input-icon uil uil-lock-alt"></i>
                                                            </div>
                                                            <button type="submit" className="btn mt-4">Se connecter</button>
                                                        </form>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
