import React, { useState } from "react";
import '../assets/css/Registrar.css';

export const Registrar = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPass(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(pass);
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
                <button type="submit">Registrarse</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
                ¿Ya tienes una cuenta? Inicia sesión aquí.
            </button>
        </div>
    )
}

export default Registrar;

