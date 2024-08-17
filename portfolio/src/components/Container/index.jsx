import styles from './Container.module.css'
import Proptypes from 'prop-types'

export default function Container({ children }) {

Container.prototypes = {
    children:PropTypes.any
}.isRequired
    
    return (

         //eslint-disable-next-line react/prop-types serve para ignorar a necessidade de declarar as Props Types de children Se, você quiser declarar elas, faça o import de PropTypes na parte de cima do componente: import PropTypes from 'prop-types'

        import PropTypes from 'prop-types'
        <section className={styles.components}>
            {children}
        </section>
    );

}