import React,{ useEffect, useContext } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Fondo from '../../images/17420-acuarela.jpg';
import image from'../../images/1631240642489_2_1.png'
import './Initial.css' 
import LanguageContext from '../../context/LanguageContext';

const Initial = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    const {texts} = useContext(LanguageContext);


    return(
        <div className="container_initial" style={{
            backgroundImage: `url(${Fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width:'100%'
            }} >
            
            <div className="initial" 
                data-aos="fade-up" 
                data-aos-easing="linear"
                data-aos-duration="2000"
                
             >
                <h2 className="">{texts.initialText1}</h2>
                <h1 className="" >{texts.initialName} <span>{texts.initialSurname}</span></h1>
                <p className="" >{texts.initialText2}</p>
            </div>
            <div data-aos="zoom-in" className="container_animation" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: 'no-repeat',
                width: '65%',
                margin:' 0 auto'
                }}></div>
        </div>
    )
}

export default Initial;