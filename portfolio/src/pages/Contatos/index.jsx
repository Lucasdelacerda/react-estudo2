import styles from './Contatos.module.css'
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

export default function Contatos() {
    return (
        <>


            <section className={styles.contatos}>

                <h3> Entre em contato</h3>
                <p>Para que possamos conversar mais sobre</p>

                <div className={styles.icones}>
                    <a href='lacerdalucas270@gmail.com' target='blank' rel='noopener noreferrer'>
                        <GoMail className={styles.icone} />
                    </a>
                    <a href='colocar o github' target='blank' rel='noopener noreferrer'>
                        <BsGithub className={styles.icone} />
                    </a>
                    <a href='colocar o linkedin' target='blank' rel='noopener noreferrer'>
                        <BsLinkedin className={styles.icone} />
                    </a>
                    <a href='colocar o whatsapp' target='blank' rel='noopener noreferrer'>
                        <BsWhatsapp className={styles.icone} />
                    </a>
                </div>
            </section>

        </>
    );

}