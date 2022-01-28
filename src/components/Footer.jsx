import React from 'react';

function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Copyrights @ {currentYear} | Made by Ganesh</p>
        </footer>
    )
}


export default Footer;