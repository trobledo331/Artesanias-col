import React, { useState } from 'react';
import '../assets/css/Registrar.css';

export const Registrar = (props) => {
    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [email, setEmail] = useState(localStorage.getItem('email') || '');
    const [pass, setPass] = useState(localStorage.getItem('password') || '');
    const [confirmPass, setConfirmPass] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            if (value.length >= 8) {
                setPass(value);
            }
        } else if (name === 'confirmPassword') {
            setConfirmPass(value);
        } else if (name === 'terms') {
            setAcceptedTerms(checked);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pass !== confirmPass) {
            console.log('Las contraseñas no coinciden.');
            return;
        }
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', pass);
        console.log(name);
        console.log(email);
        console.log(pass);
        console.log(acceptedTerms);
    };

    const handleFormSwitch = () => {
        props.onFormSwitch('login');
    };

    return (
        <div className="auth-form-container">
            <h2 className="registrarse-title">Registrarse</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre Completo</label>
                <input
                    value={name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Nombre completo"
                    id="name"
                    name="name"
                />
                <label htmlFor="email">Correo</label>
                <input
                    value={email}
                    onChange={handleChange}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    value={pass}
                    onChange={handleChange}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <label htmlFor="confirmPassword">Repetir Contraseña</label>
                <input
                    value={confirmPass}
                    onChange={handleChange}
                    type="password"
                    placeholder="********"
                    id="confirmPassword"
                    name="confirmPassword"
                />
                <div className="form-group">
                    <label htmlFor="terms">Legalidades</label><br />
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={acceptedTerms}
                        onChange={handleChange}
                    />
                    Acepto los términos y condiciones
                </div>
                <button type="submit">Registrarse</button>
            </form>
            <button className="link-btn" onClick={handleFormSwitch}>
                ¿Ya tienes una cuenta? Inicia sesión aquí.
            </button>
        </div>
    );
};

export default Registrar;
