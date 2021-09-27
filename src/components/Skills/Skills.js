import React,{ useEffect, useContext} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Skills.css';
import LanguageContext from '../../context/LanguageContext';

const Skills = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const {texts} = useContext(LanguageContext);

    return(
        <section className="container_skills">
            <div data-aos="fade-left" className="skills">
                <span>{texts.skillTitle}</span>
                <p><strong>{texts.skillTextStrong1}</strong>{texts.skillText1}</p>
                <p><strong>{texts.skillTextStrong2}</strong>{texts.skillText2}</p>
                <p>{texts.skillText3}<strong>{texts.skillTextStrong3}</strong>.</p>
            </div>
            <div className="container_box">
     
                <div data-aos="flip-right" className="box">
                    <i className="fab fa-codepen icon"></i>
                    <h4>Codepen</h4>
                    <a href="https://codepen.io/Garcia-Barrera"><p>Ir a codepen ..</p></a>
                    <div className="background_hover"> </div>
                </div>
                
                <div data-aos="flip-right" className="box">
                    <i className="fab fa-github icon"></i>
                    <h4>GitHub</h4>
                    <a href="https://github.com/JeanetteBarrera?tab=repositories"><p>Ir a Proyectos ..</p></a>
                    <div className="background_hover"> </div>
                </div>
                
                <div data-aos="flip-right" className="box">
                    <i className="fab fa-gitlab icon"></i>
                    <h4>GitLab</h4>
                    <a href="/"><p>Ir a Proyectos ..</p></a>
                    <div className="background_hover"> </div>
                </div>
                
                <div data-aos="flip-right" className="box">
                    <i className="fab fa-linkedin-in icon"></i>
                    <h4>Linkedin</h4>
                    <a href="https://www.linkedin.com/in/jeanette-garcia-barrera-604533210/"><p>Ir a Perfil ..</p></a>
                    <div className="background_hover"> </div>
                </div>
                
            </div>
        </section>
    )
}

export default Skills;