import { useState } from 'react';
import styles from './Header.module.css'
import { Link } from 'react-router-dom'


export default function Header() {

    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header className={styles.header}>
            <Link to='/'>
                <span>lucasLacerda.dev</span>
            </Link>
            {/* esse fecha o menu */}
            <nav className={`${styles.menuSandwish} ${showMenu ? styles.show : ''}`} onClick={toggleMenu}>
                <Link className={`${styles.btn}`} to='/'>Home</Link>
                <Link className={`${styles.btn}`} to='/sobre'>Sobre</Link>
                <Link className={`${styles.btn}`} to='/projetos'>Projetos</Link>
                <Link className={`${styles.btn}`} to='/contatos'>Contatos</Link>
            </nav>
            {/* esse abre o menu */}
            <div className={styles.menuButton} onClick={toggleMenu}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
    );

}