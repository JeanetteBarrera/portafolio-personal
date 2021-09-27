import React,{ useState, useContext } from 'react';
import Logo from '../../images/logo-name2.svg'
import {Link} from 'react-router-dom';
import './Navigation.css';
import LanguageContext from '../../context/LanguageContext';

const Navegation = () => {
    const [ navbar, setNavbar ] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 15) {
            setNavbar(true);
        }else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',changeBackground)

    const {texts, handleLanguage} = useContext(LanguageContext);
    return(
        <header className={navbar ? 'header_container active' : 'header_container'}>
            <Link className="" to='/'>
                <img className="logo" src={Logo} alt="Logo"></img>
            </Link>
            <nav className="menu_links">
                <div className="links">
                    <Link to='/'>{texts.link1}</Link>
                    <Link to='/blog'>{texts.link2}</Link>
                    <a href='https://github.com/JeanetteBarrera?tab=repositories'>{texts.link3}</a>
                </div>
                <select name="language" onChange={handleLanguage}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
            </nav>
        </header>
    )
}

export default Navegation;