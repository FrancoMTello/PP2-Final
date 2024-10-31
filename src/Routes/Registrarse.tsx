import React, { useState } from 'react';
import '../css/Home.css'







function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState<'paciente' | 'recepcionista'>('paciente');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica para manejar el inicio de sesión
        console.log(`Usuario: ${username}, Tipo: ${userType}`);
        // Redirigir o manejar el inicio de sesión
    };
//Esto se puede hacer asi o con etiquetas mas normales sin los metodos default estos me los siguerio chatgpt     
    return (
        <div>
            <header className='header'>
                <h1>Pensar-Salud</h1>
                <img src="copia.png" alt="" />
                <nav>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/registrarse">Registrarse</a></li>
                    <li><a href="/">Configuraciones</a></li>
                </ul>
            </nav>
            </header>
            <h2 className='iniciarsecion'>Registrarse</h2>
            <form onSubmit={handleLogin}>
                <div className='formato'>
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='formato'>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='formato'>
                    <label htmlFor="userType">Tipo de Usuario:</label>
                    <select
                        id="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value as 'paciente' | 'recepcionista')}
                    >
                        <option value="paciente">Paciente</option>
                        <option value="recepcionista">Recepcionista</option>
                    </select>
                </div>
                <button type="submit" className='boton'>Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default Home;