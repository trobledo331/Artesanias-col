import React, { useState } from "react";
import '../assets/css/Ingresar.css';

export const Ingresar = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPass(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    };

    return (
        <div className="auth-form-container">
            <h2 className="ingresar-title">Ingresar</h2>
            <form className="login-form" onSubmit={handleSubmit}>
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
                <button type="submit">Iniciar sesión</button>
            </form>
            <button
                className="link-btn"
                onClick={() => props.onFormSwitch('register')}
            >
                ¿No tienes una cuenta? Regístrate aquí.
            </button>
        </div>
    );
}

export default Ingresar;
