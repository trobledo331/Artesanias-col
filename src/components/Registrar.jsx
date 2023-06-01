import React, { useState } from "react";
import '../assets/css/Registrar.css';

export const Registrar = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPass(value);
        } else if (name === 'terms') {
            setAcceptedTerms(checked);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(pass);
        console.log(acceptedTerms);
    }

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
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
                ¿Ya tienes una cuenta? Inicia sesión aquí.
            </button>
        </div>
    )
}

export default Registrar;
