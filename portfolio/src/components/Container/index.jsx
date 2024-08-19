import styles from './Container.module.css';
import PropTypes from 'prop-types';

export default function Container({ children }) {
    return (
        <section className={styles.components}>
            {children}
        </section>
    );
}


Container.propTypes = {
    children: PropTypes.any.isRequired, 
};
