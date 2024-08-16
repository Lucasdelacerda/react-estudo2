import styles from './Header.module.css'
import { Link } from '../routes.jsx'


export default function Header() {
    return (
        <header className={styles.header}>
            <span>lucasLacerda.dev</span>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>Sobre</Link>
                <Link to='/'>Projetos</Link>
                <Link to='/'>Contatos</Link>
            </nav>
        </header>
    );

}