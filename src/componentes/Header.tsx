
import '../css/Header.css'
import '../assets/copia.png'




function Header() {
    return (
        <header className="header">
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
    );
};

export default Header;