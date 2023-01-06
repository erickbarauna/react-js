import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

import styles from './Footer.module.css'

function Footer() {
    return <footer>
        <ul className={styles.social_list}>
            <li><FaFacebook/></li>
            <li><FaLinkedinIn/></li>
            <li><FaInstagram/></li>
            <li><FaTwitter/></li>
            <li><FaYoutube/></li>
            <li><FaWhatsapp/></li>
        </ul>
    </footer>
}

export default Footer