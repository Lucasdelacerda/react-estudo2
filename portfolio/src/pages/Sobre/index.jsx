import styles from './Sobre.module.css'


export default function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                {/* pegar um avatar */}

                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Lucas Lacerda</span><br />
                        <strong>Dev Full Stack</strong>
                    </p>

                    <p>Trabalho com desenvolvimento Web desde 2023</p>

                    <p>Sou apaixonado em transformar ideias em realidade digital</p>
                    <p>Especioalizado em criação de aplicações dinâmicas e intuitivas, <br /> com foco na experiência do usuário</p>
                </div>
            </div>
            <div className={styles.techs}>

                <h3>Techs</h3>
                <div className={styles.icones}>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                </div>
            </div>
        </section>
    )
}