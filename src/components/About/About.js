import React,{ useEffect, useContext} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import Image2 from '../../images/16312784459781.jpg';
import LanguageContext from '../../context/LanguageContext';

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const {texts} = useContext(LanguageContext);

    return(
        <section className="container_about">
             <h3 className="etiqueta2" >{texts.aboutTitle}</h3>

            <div data-aos="fade-right" className="about" style={{
                backgroundImage: `url(${Image2})`,
                backgroundSize: "contain",
                backgroundPosition: "center left",
                backgroundRepeat: "no-repeat"
                }}>
                <p className="">{texts.aboutText1}<span className="">{texts.aboutText2}</span>{texts.aboutText3}<span>{texts.aboutText4}</span>{texts.aboutText5}</p>
                <p className="">{texts.aboutText6}</p>
                <br/>
                <p className=""> <span>{texts.aboutText7}</span></p>
                <p className="">{texts.aboutText8}</p>
                
            </div>

        </section>
    )
}

export default About;