import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { FiPlusCircle } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import loginLogoImg from '../../assets/login_logo.svg';

export default function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setPWD] = useState('');
    const history = useHistory();

    const { addToast } = useToasts();

    async function handleLogin (e) {
        e.preventDefault();

        try {
            const response = await api.post('login', { email, pwd }); // makes the session request

            localStorage.setItem('userId', response.data.id);

            history.push('/vehicles'); // navigates to the Vehicles route
        } catch (err) {
            addToast('Falha no login, tente novamente.', { appearance: 'info' });
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img  src={loginLogoImg} alt="loginLogo" className="img" />
                <form onSubmit={handleLogin}>
                    <input 
                        placeholder="E-mail"
                        value={email}
                        autoFocus={true}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Senha"
                        value={pwd}
                        type="password"
                        onChange={e => setPWD(e.target.value)}
                    />
                    <button id="loginButton" className="button" type="submit">Entrar</button>

                    <Link className="link-register" to="/register">
                        <FiPlusCircle size={20} color="#54478C" />
                        Cadastrar-se
                    </Link>
                </form>
            </section>
        </div>
    );
}
